---
title: 'Tailwind CSS 最佳实践'
description: '分享使用 Tailwind CSS 构建现代 UI 的最佳实践和技巧，帮助你写出更简洁、更可维护的样式代码。'
date: 2026-02-08
tags: ['Tailwind CSS', 'CSS', '前端开发']
lang: 'zh'
translationKey: 'tailwind-css-best-practices'
draft: false
---

# Tailwind CSS 最佳实践

Tailwind CSS 是一个实用优先的 CSS 框架，它改变了我们编写样式的方式。本文将分享一些使用 Tailwind 的最佳实践。

## 组织你的工具类

### 使用一致的顺序

保持工具类的顺序一致可以提高代码可读性。推荐的顺序：

1. 布局（display, position）
2. 盒模型（width, height, padding, margin）
3. 排版（font, text）
4. 视觉效果（background, border, shadow）
5. 其他（transforms, transitions）

示例：
```html
<div class="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md">
  <!-- 内容 -->
</div>
```

## 自定义配置

### 扩展默认主题

在 `tailwind.config.mjs` 中扩展主题，而不是覆盖：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
    },
  },
};
```

## 响应式设计

### 移动优先

Tailwind 采用移动优先的方法。从最小的屏幕开始设计，然后向上扩展：

```html
<div class="text-sm md:text-base lg:text-lg">
  响应式文本
</div>
```

### 常用断点

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 提取组件

对于重复的样式模式，使用 Astro 组件而不是 `@apply`：

```astro
---
// components/Button.astro
const { variant = 'primary' } = Astro.props;
const styles = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
};
---

<button class={`px-4 py-2 rounded-lg font-medium transition-colors ${styles[variant]}`}>
  <slot />
</button>
```

## 性能优化

### 清除未使用的样式

确保在生产构建中清除未使用的样式：

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // Tailwind 会自动清除未使用的样式
};
```

## Typography 插件

使用 `@tailwindcss/typography` 插件美化 Markdown 内容：

```html
<article class="prose prose-slate lg:prose-lg">
  <!-- Markdown 内容 -->
</article>
```

## 暗色模式

启用暗色模式支持：

```javascript
export default {
  darkMode: 'class',
  // ...
};
```

使用：
```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  自适应暗色模式
</div>
```

## 总结

Tailwind CSS 通过实用优先的方法简化了样式开发。遵循这些最佳实践，你可以构建更快、更可维护的 UI。

关键要点：
- 保持工具类顺序一致
- 移动优先的响应式设计
- 适当地提取组件
- 利用 Tailwind 的配置系统

开始实践这些技巧，让你的 Tailwind 代码更上一层楼！
