import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import path from "node:path";

export type ReservationRequest = {
  id: string;
  service: string;
  durationMinutes: number;
  dateISO: string;
  dateLabel: string;
  slot: string;
  endTime: string;
  clientName: string;
  clientContact: string;
  message: string;
  status: "demande" | "valide" | "refuse" | "deplace";
  createdAt: string;
};

const dataDirectory = process.env.DATA_DIR || path.join(process.cwd(), "data");
const databasePath =
  process.env.DATABASE_PATH || path.join(dataDirectory, "melo-nail.sqlite");

mkdirSync(dataDirectory, { recursive: true });

const db = new Database(databasePath);

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS reservation_requests (
    id TEXT PRIMARY KEY,
    service TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL,
    date_iso TEXT NOT NULL,
    date_label TEXT NOT NULL,
    slot TEXT NOT NULL,
    end_time TEXT NOT NULL,
    client_name TEXT NOT NULL,
    client_contact TEXT NOT NULL,
    message TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'demande',
    created_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS idx_reservation_requests_created_at
  ON reservation_requests(created_at);

  CREATE INDEX IF NOT EXISTS idx_reservation_requests_date_iso
  ON reservation_requests(date_iso);
`);

export function createReservationRequest(
  input: Omit<ReservationRequest, "id" | "status" | "createdAt">
) {
  const request: ReservationRequest = {
    id: crypto.randomUUID(),
    ...input,
    status: "demande",
    createdAt: new Date().toISOString(),
  };

  const statement = db.prepare(`
    INSERT INTO reservation_requests (
      id,
      service,
      duration_minutes,
      date_iso,
      date_label,
      slot,
      end_time,
      client_name,
      client_contact,
      message,
      status,
      created_at
    )
    VALUES (
      @id,
      @service,
      @durationMinutes,
      @dateISO,
      @dateLabel,
      @slot,
      @endTime,
      @clientName,
      @clientContact,
      @message,
      @status,
      @createdAt
    )
  `);

  statement.run(request);

  return request;
}

export function getReservationRequests() {
  const rows = db
    .prepare(
      `
      SELECT
        id,
        service,
        duration_minutes as durationMinutes,
        date_iso as dateISO,
        date_label as dateLabel,
        slot,
        end_time as endTime,
        client_name as clientName,
        client_contact as clientContact,
        message,
        status,
        created_at as createdAt
      FROM reservation_requests
      ORDER BY created_at DESC
    `
    )
    .all() as ReservationRequest[];

  return rows;
}
