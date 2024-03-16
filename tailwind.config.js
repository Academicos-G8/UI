import { colors } from './src/theme/colors'
import { keyframes } from './src/theme/keyframes'

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes,
    screens: {
      xs: '480px',
      sm: '620px',
      md: '768px',
      lg: '1024px',
      xl: '1232px',
    },
    extend: {
      animation: {
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        slideDownAndFade: 'slideDownAndFade 0.3s ease-out',
        slideLeftAndFade: 'slideLeftAndFade 0.3s ease-out',
        slideRightAndFade: 'slideRightAndFade 0.3s ease-out',
        slideUpAndFade: 'slideUpAndFade 0.3s ease-out',
      },
      colors,
    },
  },
}
