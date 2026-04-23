// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  features: {
    inlineStyles: true
  },

  compatibilityDate: '2025-01-15',

  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  googleFonts: {
    families: {
      Fraunces: {
        wght: '100..900',
        ital: '100..900'
      },
      Inter: {
        wght: '300..700'
      },
      'Instrument Serif': {
        wght: '400',
        ital: '400'
      },
      'Great Vibes': {
        wght: '400'
      }
    },
    display: 'swap',
    preload: false,
    preconnect: false,
    download: true,
    inject: true
  },

  image: {
    screens: {
      xs: 320,
      sm: 480,
      md: 640,
      lg: 800,
      xl: 1200
    },
    quality: 80
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
