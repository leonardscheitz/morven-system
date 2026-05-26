import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#030305', panel: '#0A0A0F', card: '#111118', line: 'rgba(255,255,255,0.08)',
        text: '#F4F7FB', muted: '#9CA3AF', purple: '#6D4AFF', steel: '#3B82F6', cyan: '#22D3EE',
      },
      boxShadow: { premium: '0 20px 80px rgba(0,0,0,0.45)' }
    },
  },
  plugins: [],
} satisfies Config;
