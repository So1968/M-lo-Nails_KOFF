import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { updateReservationStatus } from "@/lib/reservation-db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("melo_bureau_access")?.value === "ok";

  if (!hasAccess) {
    return NextResponse.json({ error: "Accès non autorisé." }, { status: 401 });
  }

  const { id } = await context.params;
  const body = await request.json();

  if (!["demande", "valide", "refuse", "deplace"].includes(body.status)) {
    return NextResponse.json({ error: "Statut invalide." }, { status: 400 });
  }

  const updated = updateReservationStatus(id, body.status);

  return NextResponse.json({ success: true, request: updated });
}
