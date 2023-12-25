// Modules
const modules = ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'];

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

export default defineNuxtConfig({
   devtools: { enabled: false },
   googleFonts,
   modules,
   tailwindcss,
});
