import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const masterclasses = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/masterclasses' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time_start: z.string().optional(),
    time_end: z.string().optional(),
    location: z.string(),
    slug: z.string(),
    cost: z.string().optional(),
    level: z.string().optional(),
    studielast: z.string().optional(),
    deelnemers: z.string().optional(),
    accreditation: z.string().optional(),
    sfeerfoto: z.string().optional(),
    intro: z.string().optional(),
    body: z.string().optional(),
  }),
});

const leergangen = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/leergangen' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    body: z.string(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/team' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    photo: z.string().optional(),
    bio: z.string(),
  }),
});

export const collections = { masterclasses, leergangen, team };
