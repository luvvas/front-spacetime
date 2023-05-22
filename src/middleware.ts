import { NextRequest, NextResponse } from "next/server";

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

export function middleware(request: NextRequest) {
  // Recebe o token do cookie com NextRequest
  const token = request.cookies.get("token")?.value;

  // Se não existir nenhum token, redirecionar para o login dentro
  // do Github, e então para a ação que o usuário estava fazendo
  // através do `redirectTo=${request.url};`
  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        "Set-Cookie": `redirectTo=${request.url}; Path=/; HttpOnly max-age=10`,
      },
    });
  }

  // Deixa a aplicação seguir o próprio fluxo
  return NextResponse.next();
}

// Toda vez que o usuário acessa qualquer rota com /memories/<path>
// esse middleware/função vai ser chamado
export const config = {
  matcher: "/memories/:path*",
};
