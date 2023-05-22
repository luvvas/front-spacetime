import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectURL = new URL("/", request.url);

  // Para expirar um token é necessário que ele tenha max-age=0
  return NextResponse.redirect(redirectURL, {
    headers: {
      "Set-Cookie": `token=; Path=/; max-age=0;`,
    },
  });
}
