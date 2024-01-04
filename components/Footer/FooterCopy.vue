<script setup>
import { Switch } from '@headlessui/vue';

const store = useMainStore();
const { setTheme } = store;
const { theme } = storeToRefs(store);

const year = ref(new Date().getFullYear());
</script>

<template>
   <div
      class="mx-auto px-4 575:px-6 1200:px-8 max-w-7xl py-8 1200:py-4 flex flex-col-reverse 575:flex-row items-center justify-between gap-x-3 gap-y-5"
   >
      <div class="flex items-center justify-center 575:justify-start flex-1 gap-x-1.5">
         <p class="text-center text-black dark:text-gray-400 text-16">
            Copyright © {{ year }}. All rights reserved.
         </p>
      </div>
      <div class="575:flex-1 flex items-center justify-center 575:justify-end gap-x-1.5">
         <Switch
            v-model="theme"
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            @change="setTheme"
         >
            <span class="rounded-full p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800">
               <IconSun v-if="!theme" />
               <IconMoon v-if="theme" />
            </span>
         </Switch>
      </div>
   </div>
</template>
