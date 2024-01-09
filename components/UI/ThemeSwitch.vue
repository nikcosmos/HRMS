<script setup>
import { Switch } from '@headlessui/vue';

const store = useMainStore();
const { setTheme } = store;
const { theme } = storeToRefs(store);
</script>

<template>
   <Switch
      id="themeSwitch"
      v-model="theme"
      class="relative inline-flex h-6 w-11 items-center rounded-full"
      @change="setTheme"
   >
      <span class="rounded-full p-1.5 hover:bg-gray-200 dark:hover:bg-gray-800">
         <IconSun v-if="!theme" />
         <IconMoon v-else />
      </span>
   </Switch>
</template>
