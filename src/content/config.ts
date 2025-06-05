import { defineCollection, z } from 'astro:content';

// Staff collection for pastoral team
const staff = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    bio: z.string(),
    image: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

// Sermons collection
const sermons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pastor: z.string(),
    date: z.date(),
    series: z.string().optional(),
    scripture: z.string(),
    description: z.string(),
    videoUrl: z.string().optional(),
    audioUrl: z.string().optional(),
    transcript: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

// Events collection
const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    endDate: z.date().optional(),
    time: z.string(),
    location: z.string(),
    description: z.string(),
    category: z.enum(['worship', 'fellowship', 'education', 'service', 'special']),
    image: z.string().optional(),
    registrationRequired: z.boolean().default(false),
    registrationUrl: z.string().optional(),
    contact: z.string().optional(),
    recurring: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

// Ministries collection
const ministries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['children', 'youth', 'adult', 'seniors', 'special-needs', 'outreach']),
    leader: z.string().optional(),
    contact: z.string().optional(),
    meetingTime: z.string().optional(),
    location: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  staff,
  sermons,
  events,
  ministries,
}; 