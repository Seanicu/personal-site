---
title: 'Getting Started with Astro 5'
description: 'Learn how to build modern static websites with Astro 5, exploring its zero JavaScript default output and excellent performance.'
date: 2026-02-10
tags: ['Astro', 'Web Development', 'Static Sites']
lang: 'en'
translationKey: 'getting-started-with-astro'
draft: false
---

# Getting Started with Astro 5

Astro is a modern static site generator known for its **zero JavaScript default output** and **excellent performance**. In this article, we'll explore the core features of Astro 5.

## Why Choose Astro?

Astro offers several key advantages:

1. **Zero JavaScript by Default** - By default, Astro generates pure HTML and CSS without any JavaScript.
2. **Islands Architecture** - Add interactivity only when needed using the "Islands" architecture to isolate interactive components.
3. **Built-in Content Collections** - Easily manage Markdown content using Content Collections.
4. **Ultimate Performance** - Easily achieve a perfect 100 Lighthouse performance score.

## Quick Start

Creating a new Astro project is simple:

```bash
npm create astro@latest
```

This will launch an interactive CLI tool that guides you through the project setup.

## Content Collections

Astro 5's Content Collections are a powerful tool for managing content. You can define content schemas and get type safety with autocompletion:

```typescript
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};
```

## Performance Optimization

Astro automatically optimizes your website:

- **Automatic Image Optimization** - Use the `<Image />` component to automatically convert to WebP/AVIF
- **CSS Optimization** - Automatically extract and inline critical CSS
- **Code Splitting** - Intelligently split JavaScript code

## Conclusion

Astro 5 is an excellent choice for building modern static websites. Its simple architecture, outstanding performance, and excellent developer experience make it ideal for blogs, documentation sites, and marketing websites.

Start using Astro today and experience the magic of zero JavaScript!
