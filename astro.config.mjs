import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Preserve spaces between inline elements after Astro 7's default changed.
  compressHTML: true,
  integrations: [alpinejs({ entrypoint: "/src/alpine.ts" }), mdx()]
});
