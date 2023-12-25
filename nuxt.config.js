// Modules
const modules = ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', 'nuxt-headlessui'];

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

// Config
const runtimeConfig = {
   public: {
      API: 'https://exampleAPI.com',
   },
};

export default defineNuxtConfig({
   devtools: { enabled: false },
   googleFonts,
   modules,
   tailwindcss,
   runtimeConfig,
   headlessui,
});
