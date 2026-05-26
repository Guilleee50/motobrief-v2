// src/content.config.ts  ← Astro 6: va en la raíz de src/, NO en src/content/
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  lang: z.enum(["es", "en"]),
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  target: z.string().optional(),
  cvss: z.number().min(0).max(10).optional(),
  disclosureStatus: z
    .enum(["unreported", "reported", "acknowledged", "patched", "published"])
    .optional(),
});

export const collections = {
  "blog-es": defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog-es" }),
    schema: blogSchema,
  }),
  "blog-en": defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog-en" }),
    schema: blogSchema,
  }),
};
