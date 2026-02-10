---
title: 'Tailwind CSS Best Practices'
description: 'Share best practices and tips for building modern UIs with Tailwind CSS, helping you write cleaner and more maintainable style code.'
date: 2026-02-08
tags: ['Tailwind CSS', 'CSS', 'Frontend Development']
lang: 'en'
translationKey: 'tailwind-css-best-practices'
draft: false
---

# Tailwind CSS Best Practices

Tailwind CSS is a utility-first CSS framework that has transformed how we write styles. This article shares some best practices for using Tailwind.

## Organizing Your Utility Classes

### Use a Consistent Order

Maintaining a consistent order of utility classes improves code readability. Recommended order:

1. Layout (display, position)
2. Box model (width, height, padding, margin)
3. Typography (font, text)
4. Visual effects (background, border, shadow)
5. Others (transforms, transitions)

Example:
```html
<div class="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md">
  <!-- Content -->
</div>
```

## Custom Configuration

### Extend the Default Theme

Extend the theme in `tailwind.config.mjs` rather than overriding:

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

## Responsive Design

### Mobile First

Tailwind uses a mobile-first approach. Start designing from the smallest screen and scale up:

```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### Common Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Extract Components

For repeating style patterns, use Astro components instead of `@apply`:

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

## Performance Optimization

### Purge Unused Styles

Ensure unused styles are purged in production builds:

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
};
```

### Use JIT Mode

Just-In-Time (JIT) mode is now the default and offers significant benefits:

- Faster build times
- Smaller CSS files
- All variants available out of the box

## Working with Dark Mode

### Class-based Strategy

Use the class strategy for explicit dark mode control:

```javascript
// tailwind.config.mjs
export default {
  darkMode: 'class',
};
```

```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Content adapts to theme
</div>
```

## Typography Plugin

Use the Typography plugin for rich text content:

```javascript
// tailwind.config.mjs
export default {
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

```html
<article class="prose lg:prose-xl dark:prose-invert mx-auto">
  <h1>Article Title</h1>
  <p>Content with beautiful default styles</p>
</article>
```

## Custom Utilities

Create custom utilities for project-specific patterns:

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
};
```

## Accessibility

### Focus States

Always include visible focus states:

```html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-300">
  Accessible Button
</button>
```

### Color Contrast

Ensure sufficient color contrast:

```html
<!-- Good contrast -->
<p class="text-gray-900 dark:text-gray-100">
  Readable text
</p>

<!-- Poor contrast - avoid -->
<p class="text-gray-400 dark:text-gray-600">
  Hard to read
</p>
```

## State Variants

Leverage Tailwind's state variants:

```html
<input 
  class="
    border-gray-300 
    focus:border-blue-500 
    focus:ring focus:ring-blue-200
    disabled:bg-gray-100 
    disabled:cursor-not-allowed
    invalid:border-red-500
  " 
/>
```

## Group and Peer Utilities

Use group and peer for parent-child interactions:

```html
<!-- Group -->
<div class="group">
  <img class="group-hover:scale-110 transition-transform" />
  <p class="group-hover:text-blue-600">Hover the parent</p>
</div>

<!-- Peer -->
<input type="checkbox" class="peer" />
<label class="peer-checked:text-blue-600">Checkbox Label</label>
```

## Arbitrary Values

Use arbitrary values for one-off customization:

```html
<div class="w-[137px] top-[117px] bg-[#1da1f2]">
  Custom values
</div>
```

## Best Practices Summary

1. **Consistent Ordering** - Use a consistent order for utility classes
2. **Extract Components** - Don't repeat yourself, create components
3. **Mobile First** - Design from small to large screens
4. **Dark Mode** - Support both light and dark themes
5. **Accessibility** - Always consider focus states and contrast
6. **Performance** - Optimize with purging and JIT mode
7. **Semantic HTML** - Use proper HTML elements
8. **Custom Config** - Extend Tailwind for your design system

## Conclusion

Tailwind CSS is a powerful tool when used correctly. Following these best practices will help you build maintainable, performant, and accessible user interfaces.

Remember: utility-first doesn't mean you can't have components. Find the right balance for your project!
