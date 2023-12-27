<script setup>
// Store
const store = useMainStore();
const { setTheme } = store;
const { theme } = storeToRefs(store);
</script>

<template>
   <div class="container max-w-7xl">
      <input :checked="theme" @change="setTheme" type="checkbox" name="theme" />
   </div>
</template>
