import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type ReservationRequest = {
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

const dataDirectory = path.join(process.cwd(), "data");
const dataFile = path.join(dataDirectory, "reservation-requests.json");

async function readRequests(): Promise<ReservationRequest[]> {
  try {
    const content = await readFile(dataFile, "utf8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeRequests(requests: ReservationRequest[]) {
  await mkdir(dataDirectory, { recursive: true });
  await writeFile(dataFile, JSON.stringify(requests, null, 2), "utf8");
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.service || !body.dateISO || !body.slot || !body.clientName || !body.clientContact) {
    return NextResponse.json(
      { error: "Informations manquantes." },
      { status: 400 }
    );
  }

  const newRequest: ReservationRequest = {
    id: crypto.randomUUID(),
    service: String(body.service),
    durationMinutes: Number(body.durationMinutes ?? 0),
    dateISO: String(body.dateISO),
    dateLabel: String(body.dateLabel ?? ""),
    slot: String(body.slot),
    endTime: String(body.endTime ?? ""),
    clientName: String(body.clientName),
    clientContact: String(body.clientContact),
    message: String(body.message ?? ""),
    status: "demande",
    createdAt: new Date().toISOString(),
  };

  const requests = await readRequests();
  await writeRequests([newRequest, ...requests]);

  return NextResponse.json({ success: true, request: newRequest });
}

export async function GET() {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("melo_bureau_access")?.value === "ok";

  if (!hasAccess) {
    return NextResponse.json({ error: "Accès non autorisé." }, { status: 401 });
  }

  const requests = await readRequests();
  return NextResponse.json({ requests });
}
