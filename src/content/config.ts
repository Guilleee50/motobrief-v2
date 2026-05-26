// src/content/config.ts
// Define las colecciones de contenido y sus schemas.
// Astro valida el frontmatter de cada .md/.mdx contra estos schemas en build time.

import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  // Obligatorios
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  lang: z.enum(["es", "en"]),

  // Opcionales
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),

  // Para investigación de seguridad
  target: z.string().optional(),          // e.g. "Yamaha MyRide v3.2.1"
  cvss: z.number().min(0).max(10).optional(),
  disclosureStatus: z
    .enum(["unreported", "reported", "acknowledged", "patched", "published"])
    .optional(),
});

export const collections = {
  // Artículos en español: src/content/blog/es/
  "blog-es": defineCollection({
    type: "content",
    schema: blogSchema,
  }),
  // Artículos en inglés: src/content/blog/en/
  "blog-en": defineCollection({
    type: "content",
    schema: blogSchema,
  }),
};
