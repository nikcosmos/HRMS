<script setup>
// Store
const store = useMainStore();
const { setTheme } = store;
const { theme } = storeToRefs(store);
</script>

<template>
   <div class="container max-w-7xl h-32 flex items-center justify-around">
      <NuxtLink to="/" class="h-full w-auto"><img src="/images/hrms-green.svg" alt="logo" class="h-full object-contain"/></NuxtLink>
      <HeaderNavigation/>
      <input :checked="theme" @change="setTheme" type="checkbox" name="theme" />
      <button class="focus:outline-none focus-visible:outline-0 flex font-medium gap-x-2 px-3 py-2 text-sm">
         <span class="">Log in</span>
         <span class=" flex-shrink-0 h-5 w-5"><img src="/images/arrow-right.svg" alt="arrow-right" class="h-full object-contain"></span>
      </button>
   </div>
</template>
