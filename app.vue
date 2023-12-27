<script setup>
// Global Head
useHead({
   title: 'HRMS',
   meta: [
      {
         name: 'viewport',
         content:
            'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
   ],
});
// OG
useSeoMeta({
   ogTitle: '',
   description: '',
   ogDescription: '',
   ogImage: '',
   twitterCard: '',
});
// Store
const store = useMainStore();
const { theme } = storeToRefs(store);
</script>

<template>
   <Html :class="{ dark: theme }">
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </Html>
</template>
