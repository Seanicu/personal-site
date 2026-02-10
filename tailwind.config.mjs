/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 纸张感背景色系统
        paper: {
          DEFAULT: '#F5F5F0',
          warm: '#F2F2EB',
        },
        // 非纯黑文字色
        ink: {
          DEFAULT: '#1A1A1A',
          light: '#4A4A4A',
        },
        // 橙色交互强调色
        accent: {
          DEFAULT: '#FF4500',
          hover: '#FF5722',
        },
      },
      // 衬线字体系统
      fontFamily: {
        serif: [
          '"Libre Baskerville"',
          '"Noto Serif SC"',
          'Georgia',
          'serif',
        ],
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      // 字阶系统
      fontSize: {
        'hero': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'post-title': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['28px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.8' }],
        'body': ['18px', { lineHeight: '1.8' }],
        'label': ['14px', { lineHeight: '1.5' }],
      },
      // 大留白系统
      spacing: {
        '18': '72px',
        '26': '104px',
        '30': '120px',
        '36': '144px',
      },
      // Typography 插件配置
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: theme('colors.ink.DEFAULT'),
            fontFamily: theme('fontFamily.serif').join(', '),
            fontSize: '18px',
            lineHeight: '1.8',
            // 标题样式
            h1: {
              color: theme('colors.ink.DEFAULT'),
              fontWeight: '700',
              fontSize: '48px',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
            },
            h2: {
              color: theme('colors.ink.DEFAULT'),
              fontWeight: '600',
              fontSize: '32px',
              lineHeight: '1.3',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              color: theme('colors.ink.DEFAULT'),
              fontWeight: '600',
              fontSize: '24px',
              lineHeight: '1.4',
            },
            // 链接样式 - 橙色背景+白色文字，无过渡
            a: {
              color: theme('colors.ink.DEFAULT'),
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              textDecorationColor: theme('colors.accent.DEFAULT'),
              fontWeight: '500',
              transition: 'none',
              '&:hover': {
                backgroundColor: theme('colors.accent.DEFAULT'),
                color: '#FFFFFF',
                textDecoration: 'none',
              },
            },
            // 引用块样式 - 斜体、右缩进、无侧边线
            blockquote: {
              fontStyle: 'italic',
              borderLeft: 'none',
              paddingLeft: '2rem',
              marginLeft: '2rem',
              color: theme('colors.ink.light'),
            },
            // 代码块
            code: {
              color: theme('colors.ink.DEFAULT'),
              backgroundColor: '#F5F5F5',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            // 段落
            p: {
              marginBottom: '1.5rem',
            },
            // 图片
            img: {
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '0.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
