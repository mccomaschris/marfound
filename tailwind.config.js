const colors = require('tailwindcss/colors')

// Settings
//const settingsScreens = require('./tailwind.settings.screens')
//const settingsFontSizes = require('./tailwind.settings.fontSizes')
// https://davidhellmann.com/blog/development/tailwindcss-fluid-typography-with-css-clamp

module.exports = {
  content: [
    'docs/*.html'
  ],
  safelist: [
    {
        pattern: /^text\-((?:white)|(?:gray)|(?:gray\-\d)|(?:greed)|(?:blue))/,
    },
    {
        pattern: /^bg\-((?:green))/,
    },
    {
        pattern: /^.*grid-cols-.*/,
    },    
    {
        pattern: /^.*m[b|t|x|y|l|r]?-.*/,
    },
    {
        pattern: /^text\-((?:sm)|(?:base)|(?:lg)|(?:xl)|(?:\dxl))/,
    }
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      transparent: 'transparent',
      current: 'currentColor'
    },
    container: {
      center: true,
    },
    fontFamily: {
      'serif': ['sentinel, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
      'sans': ['myriad, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"']
    },
    fontSize: {
      // Font sizes for "normal"
      'xs': ['12px', {
        lineHeight: '20px',
      }],
      'sm': ['14px', {
        lineHeight: '20px',
      }],
      'smed': ['16px', {
        lineHeight: '19.2px',
      }],
      'base': ['18px', {
        lineHeight: '24px',
      }],
      'mini-lg': ['20px', {
        lineHeight: '26px',
      }],
      'lg': ['22px', {
        lineHeight: '28px',
      }],
      'xl': ['26px', {
        lineHeight: '32px',
      }],
      '2xl' : ['36px', {
        lineHeight: '40px'
      }],
      '3xl' : ['64px', {
        lineHeight: '68px'
      }],
      '4xl' : ['96px', {
        lineHeight: '115px'
      }],
      /*
      '5xl' : ['80px', {
        lineHeight: '106px'
      }],
      */
    },
    screens: {
      'sm': '600px',
      'smed': '700px',
      'md': '820px',
      'mlg': '975px',
      'lg': '1230px',
      'xl': '1300px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        'xxs': '0.55rem',
      },
      borderRadius : {
        '4xl' : '3rem',
      },
      colors: {
        green: {
            'DEFAULT' : '#00852E', //#00AC3E
            'light' : '#F0FAF3',
            'over-dark' : '#00AC3E',
            'dark' : '#006624' //#009435
        },
        blue: {
            'DEFAULT' : 'rgba(2, 99, 224, 0.7)'
        },
        charcoal: {
            'DEFAULT' : '#131716'
        }
      },
    },
  },
  variants: {
    aspectRatio: ['responsive'], // defaults to ['responsive']
    borderWidth: ['responsive', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    ring: ['hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
