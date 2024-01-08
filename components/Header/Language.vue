<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
   <div>
      <NuxtLink :to="switchLocalePath('ua')" class="language__btn"> Ua </NuxtLink>
      <NuxtLink :to="switchLocalePath('en')" class="language__btn"> En </NuxtLink>
   </div>
</template>
