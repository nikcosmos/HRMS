// Config
const runtimeConfig = {
   public: {
      // baseUrl: 'http://localhost:3000/',
      API: 'https://exampleAPI.com',
   },
};

// Modules
const modules = [
   '@nuxtjs/google-fonts',
   '@nuxtjs/tailwindcss',
   'nuxt-headlessui',
   '@pinia/nuxt',
   '@nuxtjs/i18n',
];

// Fonts
const googleFonts = {
   families: {
      Inter: [400, 500, 600, 700],
   },
   download: true,
   display: 'swap',
};

// Tailwindcss
const tailwindcss = {
   exposeConfig: true,
};

// HeadlessUI
const headlessui = {
   prefix: 'UI',
};

// Store
const pinia = {
   autoImports: ['defineStore', 'storeToRefs', 'acceptHMRUpdate'],
   storesDirs: ['./stores/**'],
};

// AutoImporst
const imports = {
   dirs: ['stores'],
};

// Vue
const vue = {
   // compilerOptions: {
   //    isCustomElement: (tag) => {
   //       return tag.startsWith('swiper-');
   //    },
   // },
};

// Render Ruls
const routeRules = {};

// Locales
const i18n = {
   locales: [
      {
         code: 'ua',
         iso: 'ua',
      },
      {
         code: 'en',
         iso: 'en',
      },
   ],
   defaultLocale: 'ua',
   baseUrl: runtimeConfig.public.baseUrl,
   detectBrowserLanguage: false,
   vueI18n: './i18n.config.js',
   strategy: 'prefix_except_default',
};

export default defineNuxtConfig({
   devtools: { enabled: false },
   googleFonts,
   modules,
   tailwindcss,
   runtimeConfig,
   headlessui,
   pinia,
   imports,
   vue,
   routeRules,
   i18n,
});
