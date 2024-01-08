<template>
   <div class="container py-36 text-center">
      <div class="mb-3 flex justify-center">
         <span class="max-w-fit rounded-full px-2 py-1 text-12 font-bold ring-2">
            {{ $t('welcome.label') }}
         </span>
      </div>
      <h1 class="mx-auto mb-5 max-w-3xl text-24 font-semibold 575:text-36 768:text-52">
         {{ $t('welcome.title') }}
      </h1>
      <p class="text-14 italic">{{ $t('welcome.descr') }}</p>
      <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
         <button
            type="button"
            class="group flex items-center gap-2 rounded-full bg-blue-300 px-4 py-3 text-14 font-bold transition-colors hover:bg-blue-200 dark:text-stone-800"
         >
            {{ $t('welcome.button') }}
            <IconArrowRight
               class="flex h-5 w-5 font-bold transition-transform group-hover:translate-x-0.5"
            />
         </button>
      </div>
   </div>
</template>
