<template>
   <div class="container flex h-32 max-w-7xl items-center justify-around">
      <NuxtLink to="/" class="h-full w-auto">
         <IconLogo class="h-full object-contain dark:fill-stone-200" />
      </NuxtLink>
      <HeaderNavigation />
      <button
         class="text-sm flex items-center gap-x-2 px-3 py-2 font-medium focus:outline-none focus-visible:outline-0"
      >
         Log in
         <IconArrowRight class="h-5 w-5 flex-shrink-0 object-contain" />
      </button>
      <UIThemeSwitch />
      <HeaderLanguage />
   </div>
</template>
