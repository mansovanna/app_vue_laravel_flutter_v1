import colors from 'tailwindcss/colors';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif']
      },
    extend: {
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        white: '#FFFFFF',
        black: {
          ...colors.black,
          DEFAULT: '#1C2434',
          2: '#010101',
        },
        red: {
          ...colors.red,
          DEFAULT: '#FB5454',
        },
        body: '#64748B',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',
        primary: '#3C50E0',
        secondary: '#80CAEE',
        stroke: '#E2E8F0',
        gray: {
          ...colors.gray,
          DEFAULT: '#EFF4FB',
          2: '#F7F9FC',
          3: '#FAFAFA',
        },
        graydark: '#333A48',
        whiten: '#F1F5F9',
        whiter: '#F5F7FD',
        boxdark: '#24303F',
        'boxdark-2': '#1A222C',
        strokedark: '#2E3A47',
        'form-strokedark': '#3d4d60',
        'form-input': '#1d2a39',
        meta: {
          1: '#DC3545',
          2: '#EFF2F7',
          3: '#10B981',
          4: '#313D4A',
          5: '#259AE6',
          6: '#FFBA00',
          7: '#FF6766',
          8: '#F0950C',
          9: '#E5E7EB',
          10: '#0FADCF',
        },
        success: '#219653',
        danger: '#D34053',
        warning: '#FFA70B',
      },
      fontSize: {
        'title-xxl': ['44px', '55px'],
        'title-xxl2': ['42px', '58px'],
        'title-xl': ['36px', '45px'],
        'title-xl2': ['33px', '45px'],
        'title-lg': ['28px', '35px'],
        'title-md': ['24px', '30px'],
        'title-md2': ['26px', '30px'],
        'title-sm': ['20px', '26px'],
        'title-sm2': ['22px', '28px'],
        'title-xsm': ['18px', '24px']
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        9: '9',
        1: '1'
      },
      boxShadow: {
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
        card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        'card-2': '0px 1px 2px rgba(0, 0, 0, 0.05)',
        switcher:
          '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        1: '0px 1px 3px rgba(0, 0, 0, 0.08)',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        3: '0px 1px 5px rgba(0, 0, 0, 0.14)',
        4: '0px 4px 10px rgba(0, 0, 0, 0.12)',
        5: '0px 1px 1px rgba(0, 0, 0, 0.15)',
        6: '0px 3px 15px rgba(0, 0, 0, 0.1)',
        7: '-5px 0 0 #313D4A, 5px 0 0 #313D4A',
        8: '1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)',
        9: '0px 2px 3px rgba(183, 183, 183, 0.5)'
      },
      dropShadow: {
        1: '0px 1px 0px #E2E8F0',
        2: '0px 1px 4px rgba(0, 0, 0, 0.12)',
        3: '0px 0px 4px rgba(0, 0, 0, 0.15)',
        4: '0px 0px 2px rgba(0, 0, 0, 0.2)',
        5: '0px 1px 5px rgba(0, 0, 0, 0.2)'
      },
      keyframes: {
        linspin: {
          '100%': { transform: 'rotate(360deg)' }
        },
        easespin: {
          '12.5%': { transform: 'rotate(135deg)' },
          '25%': { transform: 'rotate(270deg)' },
          '37.5%': { transform: 'rotate(405deg)' },
          '50%': { transform: 'rotate(540deg)' },
          '62.5%': { transform: 'rotate(675deg)' },
          '75%': { transform: 'rotate(810deg)' },
          '87.5%': { transform: 'rotate(945deg)' },
          '100%': { transform: 'rotate(1080deg)' }
        },
        'left-spin': {
          '0%': { transform: 'rotate(130deg)' },
          '50%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(130deg)' }
        },
        'right-spin': {
          '0%': { transform: 'rotate(-130deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-130deg)' }
        },
        rotating: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '50%': { transform: 'rotate(0deg)' }
        },
        topbottom: {
          '0%, 100%': { transform: 'translate3d(0, -100%, 0)' },
          '50%': { transform: 'translate3d(0, 0, 0)' }
        },
        bottomtop: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -100%, 0)' }
        }
      },
      animation: {
        linspin: 'linspin 1568.2353ms linear infinite',
        easespin: 'easespin 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'left-spin': 'left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'right-spin': 'right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both',
        'ping-once': 'ping 5s cubic-bezier(0, 0, 0.2, 1)',
        rotating: 'rotating 30s linear infinite',
        topbottom: 'topbottom 60s infinite alternate linear',
        bottomtop: 'bottomtop 60s infinite alternate linear',
        'spin-1.5': 'spin 1.5s linear infinite',
        'spin-2': 'spin 2s linear infinite',
        'spin-3': 'spin 3s linear infinite'
      }
    },
  },
  plugins: [],
}

