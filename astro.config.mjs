import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [icon(), mdx(), react()],
  experimental: {
    actions: true,
  },
});