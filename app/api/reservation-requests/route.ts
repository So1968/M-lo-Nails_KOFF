import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  createReservationRequest,
  getReservationRequests,
} from "@/lib/reservation-db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json();

  if (
    !body.service ||
    !body.dateISO ||
    !body.slot ||
    !body.clientName ||
    !body.clientContact
  ) {
    return NextResponse.json(
      { error: "Informations manquantes." },
      { status: 400 }
    );
  }

  const newRequest = createReservationRequest({
    service: String(body.service),
    durationMinutes: Number(body.durationMinutes ?? 0),
    dateISO: String(body.dateISO),
    dateLabel: String(body.dateLabel ?? ""),
    slot: String(body.slot),
    endTime: String(body.endTime ?? ""),
    clientName: String(body.clientName),
    clientContact: String(body.clientContact),
    message: String(body.message ?? ""),
  });

  return NextResponse.json({ success: true, request: newRequest });
}

export async function GET() {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("melo_bureau_access")?.value === "ok";

  if (!hasAccess) {
    return NextResponse.json({ error: "Accès non autorisé." }, { status: 401 });
  }

  const requests = getReservationRequests();
  return NextResponse.json({ requests });
}
