import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
  presets: [
    presetMini({ dark: 'media' }),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        opensans: [
          {
            name: 'Open Sans',
            weights: ['700'],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#EC0B2B',
        light: '#FF295F',
      },
      secondary: {
        DEFAULT: '#2C9BEB',
        light: '#37A6F6',
        dark: '#0776C6',
      },

      active: {
        DEFAULT: '#F66C42',
        light: '#FD8E3E',
      },
      info: '#4468E7',
      success: {
        DEFAULT: '#289038',
        light: '#04AB5B',
      },

      gray: {
        100: '#D9D9D9',
        200: '#909090',
        300: '#7B7B7B',
        400: '#262626',
      },

      white: '#FFF',
      black: '#1D1D1D',
      transparent: 'transparent',
    },
    boxShadow: {
      none: '0px 0px 0px rgba(0, 0, 0, 0)',

      'black-xl': '0px 1px 2px rgba(120, 120, 120, 0.15)',
      'black-2xl': '0px 4px 6px rgba(120, 120, 120, 0.15)',
      'black-3xl': '0px 6px 8px rgba(120, 120, 120, 0.15)',
      'black-4xl': '0px 8px 10px rgba(120, 120, 120, 0.15)',
      'black-5xl': '0px 14px 12px rgba(120, 120, 120, 0.15)',
      'black-6xl': '0px 16px 16px rgba(120, 120, 120, 0.15)',

      'red-xl': '0px 1px 4px rgba(210, 34, 34, 0.3)',
      'red-2xl': '0px 4px 8px rgba(210, 34, 34, 0.3)',
      'red-3xl': '0px 6px 12px rgba(210, 34, 34, 0.3)',
      'red-4xl': '0px 8px 16px rgba(210, 34, 34, 0.3)',
      'red-5xl': '0px 14px 16px rgba(210, 34, 34, 0.3)',
      'red-6xl': '0px 16px 20px rgba(210, 34, 34, 0.3)',

      'blue-xl': '0px 1px 4px rgba(44, 155, 235, 0.3)',
      'blue-2xl': '0px 4px 8px rgba(44, 155, 235, 0.3)',
      'blue-3xl': '0px 6px 12px rgba(44, 155, 235, 0.3)',
      'blue-4xl': '0px 8px 16px rgba(44, 155, 235, 0.3)',
      'blue-5xl': '0px 14px 16px rgba(44, 155, 235, 0.3)',
      'blue-6xl': '0px 16px 20px rgba(44, 155, 235, 0.3)',

      'inset-none': 'inset 0px 0px 0px rgba(0, 0, 0, 0)',
      'inset-full': 'inset 0px 8px 3px rgba(29, 29, 29, 0.5)',
    },
  },
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
