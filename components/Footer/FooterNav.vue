<template>
   <div>
      <ul
         class="flex flex-wrap justify-center gap-5 text-16 575:gap-10 575:text-18 [&>*:hover]:text-gray-500 dark:[&>*:hover]:text-neutral-400"
      >
         <li>
            <NuxtLink to="#" class="font-medium">{{ $t('footer.welcome') }}</NuxtLink>
         </li>
         <li>
            <NuxtLink to="#" class="font-medium">{{ $t('footer.benefits') }}</NuxtLink>
         </li>
         <li>
            <NuxtLink to="#" class="font-medium">{{ $t('footer.pricing') }}</NuxtLink>
         </li>
         <li>
            <NuxtLink to="#" class="font-medium">{{ $t('footer.review') }}</NuxtLink>
         </li>
         <li>
            <NuxtLink to="#" class="font-medium">{{ $t('footer.faq') }}</NuxtLink>
         </li>
      </ul>
   </div>
</template>
