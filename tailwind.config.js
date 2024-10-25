/** 
 * @type {import('tailwindcss').Config} 
 * cspell:ignore tailwindcss daisyui jsx tsx
 */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
