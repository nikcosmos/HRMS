// Config
const runtimeConfig = {
   public: {
      API: 'https://exampleAPI.com',
   },
};

// Modules
const modules = ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'nuxt-headlessui', '@pinia/nuxt'];

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
});
