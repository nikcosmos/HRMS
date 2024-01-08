<script setup>
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
   <div class="flex gap-2">
      <NuxtLink :to="switchLocalePath('ua')" class="group">
         <span class="font-bold group-[.router-link-active]:text-red-500">Ua</span>
      </NuxtLink>
      <NuxtLink :to="switchLocalePath('en')" class="group">
         <span class="font-bold group-[.router-link-active]:text-red-500">En</span>
      </NuxtLink>
   </div>
</template>
