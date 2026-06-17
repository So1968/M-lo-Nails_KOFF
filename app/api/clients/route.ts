import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getClients } from "@/lib/reservation-db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const cookieStore = await cookies();
  const hasAccess = cookieStore.get("melo_bureau_access")?.value === "ok";

  if (!hasAccess) {
    return NextResponse.json({ error: "Accès non autorisé." }, { status: 401 });
  }

  return NextResponse.json({ clients: getClients() });
}
