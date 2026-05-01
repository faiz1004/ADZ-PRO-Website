import type {Config} from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        surface: 'var(--surface)',
        'surface-glass': 'var(--surface-glass)',
        'card-bg': 'var(--card-bg)',
        'section-alt': 'var(--section-alt)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-inverse': 'var(--text-inverse)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-light': 'var(--accent-light)',
        border: 'var(--border)',
        'border-glass': 'var(--border-glass)',
        success: 'var(--success)',
        danger: 'var(--danger)',
        // Keeping ShadCN base names for compatibility but mapping to tokens
        primary: {
          DEFAULT: 'var(--accent-primary)',
          foreground: 'var(--text-inverse)',
        },
        secondary: {
          DEFAULT: 'var(--background-secondary)',
          foreground: 'var(--text-primary)',
        },
        muted: {
          DEFAULT: 'var(--accent-light)',
          foreground: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          foreground: 'var(--text-inverse)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
        strong: 'var(--shadow-strong)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;