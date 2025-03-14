import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const mods = defineCollection({
  loader: glob({ base: "./src/mods", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAspectRatio: z.string().optional(),
  }),
});

export const collections = { mods };
