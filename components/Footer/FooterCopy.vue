<template>
   <div
      class="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-x-3 gap-y-5 px-6 py-8 575:flex-row"
   >
      <div class="flex items-center justify-center gap-x-1.5 575:justify-start">
         <p class="text-center text-14 text-black dark:text-gray-400">
            {{ $t('footer.copy') }}
         </p>
      </div>
      <div class="flex items-center justify-center gap-x-1.5 575:justify-end">
         <UIThemeSwitch />
      </div>
   </div>
</template>
