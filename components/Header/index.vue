<script setup>
// Store
const store = useMainStore();
const { setTheme } = store;
const { theme } = storeToRefs(store);
</script>

<template>
   <div class="container flex h-32 max-w-7xl items-center justify-around">
      <NuxtLink to="/" class="h-full w-auto">
         <IconLogo class="h-full object-contain" />
      </NuxtLink>
      <HeaderNavigation />
      <button
         class="text-sm flex gap-x-2 px-3 py-2 font-medium focus:outline-none focus-visible:outline-0"
      >
         <span class="">Log in</span>
         <span class="h-5 w-5 flex-shrink-0 object-contain"
            ><img src="/images/arrow-right.svg" alt="arrow-right"
         /></span>
      </button>
      <input :checked="theme" @change="setTheme" type="checkbox" name="theme" />

      <HeaderLanguage />
   </div>
</template>
