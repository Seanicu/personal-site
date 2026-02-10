---
title: 'Astro 5 入门指南'
description: '了解如何使用 Astro 5 构建现代化的静态网站，探索其零 JavaScript 的默认输出和出色的性能表现。'
date: 2026-02-10
tags: ['Astro', 'Web 开发', '静态站点']
lang: 'zh'
translationKey: 'getting-started-with-astro'
draft: false
---

# Astro 5 入门指南

Astro 是一个现代化的静态站点生成器，以其**零 JavaScript 默认输出**和**出色的性能**而闻名。在这篇文章中，我们将探索 Astro 5 的核心特性。

## 为什么选择 Astro？

Astro 提供了几个关键优势：

1. **零 JavaScript 默认输出** - 默认情况下，Astro 生成纯 HTML 和 CSS，不包含任何 JavaScript。
2. **岛屿架构** - 只在需要时添加交互性，使用 "Islands" 架构隔离交互组件。
3. **内置内容集合** - 使用 Content Collections 轻松管理 Markdown 内容。
4. **极致性能** - Lighthouse 性能评分轻松达到 100 分。

## 快速开始

创建一个新的 Astro 项目非常简单：

```bash
npm create astro@latest
```

这将启动一个交互式命令行工具，引导你完成项目设置。

## Content Collections

Astro 5 的 Content Collections 是管理内容的强大工具。你可以定义内容模式，获得类型安全和自动完成：

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

## 性能优化

Astro 自动优化你的网站：

- **自动图片优化** - 使用 `<Image />` 组件自动转换为 WebP/AVIF
- **CSS 优化** - 自动提取和内联关键 CSS
- **代码分割** - 智能分割 JavaScript 代码

## 总结

Astro 5 是构建现代静态网站的绝佳选择。其简单的架构、出色的性能和优秀的开发体验使其成为博客、文档站点和营销网站的理想选择。

立即开始使用 Astro，体验零 JavaScript 的魅力！
