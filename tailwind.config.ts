import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#0b1220', bg2: '#0f192d', card: '#121e35', line: '#22304d', ink: '#E9EEF8', mut: '#9BA7C0', brand: '#5CA8FF', amber: '#FFB86B' },
      fontFamily: { display: ['var(--font-sora)', 'system-ui', 'sans-serif'], body: ['var(--font-dm)', 'system-ui', 'sans-serif'] },
      keyframes: { marquee: { to: { transform: 'translateX(-50%)' } } },
      animation: { marquee: 'marquee 32s linear infinite' },
    },
  },
  plugins: [],
};
export default config;
