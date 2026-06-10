import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { code } = await request.json();

  const expectedCode = process.env.BUREAU_ACCESS_CODE;

  if (!expectedCode) {
    return NextResponse.json(
      { error: "Code d’accès non configuré." },
      { status: 500 }
    );
  }

  if (code !== expectedCode) {
    return NextResponse.json({ error: "Code incorrect." }, { status: 401 });
  }

  const cookieStore = await cookies();

  cookieStore.set("melo_bureau_access", "ok", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({ success: true });
}
