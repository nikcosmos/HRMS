<script setup>
const store = useMainStore();
const { openBurger, closeBurger } = store;
const { burger } = storeToRefs(store);
</script>

<template>
   <button @click="burger ? closeBurger() : openBurger()" type="button" class="h-5 w-5">
      <IconClose v-if="burger" />
      <IconBurger v-else />
   </button>
</template>
