import type { APIRoute } from "astro";
import { valeny } from "../data/index.ts";

// En demos (PUBLIC_NOINDEX=1) se pide a los buscadores que no indexen nada.
export const GET: APIRoute = () => {
  const noindex = import.meta.env.PUBLIC_NOINDEX === "1";
  const cuerpo = noindex
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${valeny.dominio}/sitemap-index.xml\n`;
  return new Response(cuerpo, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
