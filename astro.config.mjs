import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";

const valeny = JSON.parse(readFileSync(new URL("./src/data/valeny.json", import.meta.url), "utf8"));

export default defineConfig({
  site: valeny.dominio,
  integrations: [sitemap()],
});
