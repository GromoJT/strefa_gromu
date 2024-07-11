import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";


import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  integrations: [
    icon(), 
    mdx(), 
    react({
      include: ["**/react/*"],
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
  
  experimental: {
    actions: true,
  },
});