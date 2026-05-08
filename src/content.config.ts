import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const masterclasses = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/masterclasses' }),
  schema: z.object({
    title: z.string(),
    type: z.string().default('Masterclass'),
    date: z.coerce.date(),
    time_start: z.union([z.string(), z.number().transform(n => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`)]).optional(),
    time_end: z.union([z.string(), z.number().transform(n => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`)]).optional(),
    location: z.string(),
    slug: z.string().optional(),
    cost: z.string().optional(),
    level: z.string().optional(),
    studielast: z.string().optional(),
    deelnemers: z.string().optional(),
    accreditation: z.string().optional(),
    aanmeld_url: z.string().url().optional(),
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
    slug: z.string().optional(),
    startdatum: z.coerce.date().optional(),
    location: z.string().optional(),
    cost: z.string().optional(),
    level: z.string().optional(),
    studielast: z.string().optional(),
    deelnemers: z.string().optional(),
    aanmeld_url: z.string().url().nullish().transform(v => v ?? undefined),
    intro: z.string().optional(),
    sfeerfoto: z.string().optional(),
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
