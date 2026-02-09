import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    lang: z.enum(['zh', 'en']),
    translationKey: z.string(), // 关联中英文文章
  }),
});

export const collections = {
  blog: blogCollection,
};
