import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        smoke: '#11100f',
        velvet: '#211811',
        amber: '#D3A15E',
        bronze: '#7C5A33'
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gold-fade': 'linear-gradient(135deg, rgba(211,161,94,0.25) 0%, rgba(17,16,15,0.95) 60%)'
      }
    }
  },
  plugins: []
} satisfies Config;
