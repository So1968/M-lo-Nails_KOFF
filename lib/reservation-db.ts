import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";

export type ClientRecord = {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  instagram: string;
  address: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type ReservationStatus = "demande" | "valide" | "refuse" | "deplace";

export type ReservationRequest = {
  id: string;
  clientId: string;
  service: string;
  durationMinutes: number;
  dateISO: string;
  dateLabel: string;
  slot: string;
  endTime: string;
  message: string;
  status: ReservationStatus;
  createdAt: string;
  updatedAt: string;
};

export type ReservationWithClient = ReservationRequest & {
  clientFullName: string;
  clientPhone: string;
  clientEmail: string;
  clientInstagram: string;
  clientAddress: string;
};

const dataDirectory = process.env.DATA_DIR || path.join(process.cwd(), "data");
const databasePath =
  process.env.DATABASE_PATH || path.join(dataDirectory, "melo-nail.sqlite");

mkdirSync(dataDirectory, { recursive: true });

const db = new Database(databasePath);
db.pragma("journal_mode = WAL");

function columnExists(tableName: string, columnName: string) {
  const columns = db.prepare(`PRAGMA table_info(${tableName})`).all() as {
    name: string;
  }[];

  return columns.some((column) => column.name === columnName);
}

function tableExists(tableName: string) {
  const row = db
    .prepare(
      "SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?"
    )
    .get(tableName);

  return Boolean(row);
}

function addColumnIfMissing(tableName: string, columnName: string, definition: string) {
  if (!columnExists(tableName, columnName)) {
    db.exec(`ALTER TABLE ${tableName} ADD COLUMN ${columnName} ${definition}`);
  }
}

function normalize(value: unknown) {
  return String(value ?? "").trim();
}

function normalizeContact(value: unknown) {
  return normalize(value).toLowerCase();
}

function now() {
  return new Date().toISOString();
}

function migrateDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS clients (
      id TEXT PRIMARY KEY,
      full_name TEXT NOT NULL,
      phone TEXT NOT NULL DEFAULT '',
      email TEXT NOT NULL DEFAULT '',
      instagram TEXT NOT NULL DEFAULT '',
      address TEXT NOT NULL DEFAULT '',
      notes TEXT NOT NULL DEFAULT '',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS reservation_requests (
      id TEXT PRIMARY KEY,
      client_id TEXT NOT NULL DEFAULT '',
      service TEXT NOT NULL,
      duration_minutes INTEGER NOT NULL DEFAULT 0,
      date_iso TEXT NOT NULL DEFAULT '',
      date_label TEXT NOT NULL DEFAULT '',
      slot TEXT NOT NULL DEFAULT '',
      end_time TEXT NOT NULL DEFAULT '',
      message TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'demande',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
  `);

  if (tableExists("reservation_requests")) {
    addColumnIfMissing("reservation_requests", "client_id", "TEXT NOT NULL DEFAULT ''");
    addColumnIfMissing("reservation_requests", "duration_minutes", "INTEGER NOT NULL DEFAULT 0");
    addColumnIfMissing("reservation_requests", "date_label", "TEXT NOT NULL DEFAULT ''");
    addColumnIfMissing("reservation_requests", "end_time", "TEXT NOT NULL DEFAULT ''");
    addColumnIfMissing("reservation_requests", "message", "TEXT NOT NULL DEFAULT ''");
    addColumnIfMissing("reservation_requests", "status", "TEXT NOT NULL DEFAULT 'demande'");
    addColumnIfMissing("reservation_requests", "updated_at", "TEXT NOT NULL DEFAULT ''");
  }

  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_clients_phone ON clients(phone);
    CREATE INDEX IF NOT EXISTS idx_clients_email ON clients(email);
    CREATE INDEX IF NOT EXISTS idx_clients_instagram ON clients(instagram);

    CREATE INDEX IF NOT EXISTS idx_reservation_requests_client_id
    ON reservation_requests(client_id);

    CREATE INDEX IF NOT EXISTS idx_reservation_requests_status
    ON reservation_requests(status);

    CREATE INDEX IF NOT EXISTS idx_reservation_requests_date_iso
    ON reservation_requests(date_iso);
  `);
}

migrateDatabase();

export function upsertClient(input: {
  fullName: string;
  phone?: string;
  email?: string;
  instagram?: string;
  address?: string;
  notes?: string;
}) {
  const fullName = normalize(input.fullName);
  const phone = normalize(input.phone);
  const email = normalize(input.email);
  const instagram = normalize(input.instagram);
  const address = normalize(input.address);
  const notes = normalize(input.notes);

  const existing = db
    .prepare(
      `
      SELECT
        id,
        full_name as fullName,
        phone,
        email,
        instagram,
        address,
        notes,
        created_at as createdAt,
        updated_at as updatedAt
      FROM clients
      WHERE
        (phone != '' AND lower(phone) = @phone)
        OR (email != '' AND lower(email) = @email)
        OR (instagram != '' AND lower(instagram) = @instagram)
      LIMIT 1
    `
    )
    .get({
      phone: normalizeContact(phone),
      email: normalizeContact(email),
      instagram: normalizeContact(instagram),
    }) as ClientRecord | undefined;

  if (existing) {
    const updatedClient: ClientRecord = {
      ...existing,
      fullName: fullName || existing.fullName,
      phone: phone || existing.phone,
      email: email || existing.email,
      instagram: instagram || existing.instagram,
      address: address || existing.address,
      notes: notes || existing.notes,
      updatedAt: now(),
    };

    db.prepare(
      `
      UPDATE clients
      SET
        full_name = @fullName,
        phone = @phone,
        email = @email,
        instagram = @instagram,
        address = @address,
        notes = @notes,
        updated_at = @updatedAt
      WHERE id = @id
    `
    ).run(updatedClient);

    return updatedClient;
  }

  const createdAt = now();

  const client: ClientRecord = {
    id: crypto.randomUUID(),
    fullName,
    phone,
    email,
    instagram,
    address,
    notes,
    createdAt,
    updatedAt: createdAt,
  };

  db.prepare(
    `
    INSERT INTO clients (
      id,
      full_name,
      phone,
      email,
      instagram,
      address,
      notes,
      created_at,
      updated_at
    )
    VALUES (
      @id,
      @fullName,
      @phone,
      @email,
      @instagram,
      @address,
      @notes,
      @createdAt,
      @updatedAt
    )
  `
  ).run(client);

  return client;
}

export function createReservationRequest(input: {
  clientId: string;
  service: string;
  durationMinutes: number;
  dateISO: string;
  dateLabel: string;
  slot: string;
  endTime: string;
  message?: string;
}) {
  const createdAt = now();

  const request: ReservationRequest = {
    id: crypto.randomUUID(),
    clientId: input.clientId,
    service: normalize(input.service),
    durationMinutes: Number(input.durationMinutes ?? 0),
    dateISO: normalize(input.dateISO),
    dateLabel: normalize(input.dateLabel),
    slot: normalize(input.slot),
    endTime: normalize(input.endTime),
    message: normalize(input.message),
    status: "demande",
    createdAt,
    updatedAt: createdAt,
  };

  db.prepare(
    `
    INSERT INTO reservation_requests (
      id,
      client_id,
      service,
      duration_minutes,
      date_iso,
      date_label,
      slot,
      end_time,
      message,
      status,
      created_at,
      updated_at
    )
    VALUES (
      @id,
      @clientId,
      @service,
      @durationMinutes,
      @dateISO,
      @dateLabel,
      @slot,
      @endTime,
      @message,
      @status,
      @createdAt,
      @updatedAt
    )
  `
  ).run(request);

  return request;
}

export function getReservationRequests() {
  return db
    .prepare(
      `
      SELECT
        r.id,
        r.client_id as clientId,
        r.service,
        r.duration_minutes as durationMinutes,
        r.date_iso as dateISO,
        r.date_label as dateLabel,
        r.slot,
        r.end_time as endTime,
        r.message,
        r.status,
        r.created_at as createdAt,
        r.updated_at as updatedAt,
        COALESCE(c.full_name, 'Cliente à rattacher') as clientFullName,
        COALESCE(c.phone, '') as clientPhone,
        COALESCE(c.email, '') as clientEmail,
        COALESCE(c.instagram, '') as clientInstagram,
        COALESCE(c.address, '') as clientAddress
      FROM reservation_requests r
      LEFT JOIN clients c ON c.id = r.client_id
      ORDER BY r.created_at DESC
    `
    )
    .all() as ReservationWithClient[];
}

export function updateReservationStatus(id: string, status: ReservationStatus) {
  db.prepare(
    `
    UPDATE reservation_requests
    SET status = @status, updated_at = @updatedAt
    WHERE id = @id
  `
  ).run({
    id,
    status,
    updatedAt: now(),
  });

  return getReservationRequests().find((request) => request.id === id);
}

export function getClients() {
  return db
    .prepare(
      `
      SELECT
        id,
        full_name as fullName,
        phone,
        email,
        instagram,
        address,
        notes,
        created_at as createdAt,
        updated_at as updatedAt
      FROM clients
      ORDER BY updated_at DESC
    `
    )
    .all() as ClientRecord[];
}
