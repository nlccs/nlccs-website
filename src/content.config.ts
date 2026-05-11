import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Reusable: accepts a URL string, null, or undefined — always outputs string | undefined
const optionalUrl = z.string().url().nullish().transform(v => v ?? undefined);

const masterclasses = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/masterclasses' }),
  schema: z.object({
    title: z.string(),
    type: z.string().default('Masterclass'),
    date: z.coerce.date(),
    time_start: z.union([z.string(), z.number().transform(n => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`)]).optional(),
    time_end: z.union([z.string(), z.number().transform(n => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`)]).optional(),
    location: z.string(),
    slug: z.string(),
    cost: z.string().optional(),
    level: z.string().optional(),
    studielast: z.string().optional(),
    deelnemers: z.string().optional(),
    accreditation: z.string().optional(),
    aanmeld_url: optionalUrl,
    sfeerfoto: z.string().optional(),
    intro: z.string().optional(),
    body: z.string().optional(),
  }),
});

const leergangen = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/leergangen' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    startdatum: z.coerce.date().optional(),
    location: z.string().optional(),
    cost: z.string().optional(),
    level: z.string().optional(),
    studielast: z.string().optional(),
    deelnemers: z.string().optional(),
    aanmeld_url: optionalUrl,
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
    photo: z.string(),
    bio: z.string(),
    email: z.string().email().optional(),
  }),
});

export const collections = { masterclasses, leergangen, team };
