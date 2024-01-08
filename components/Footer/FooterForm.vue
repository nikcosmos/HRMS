<script setup></script>

<template>
   <div class="max-w-sx flex flex-col items-center gap-10 575:max-w-sm">
      <div class="space-y-5 text-center font-bold">
         <div class="flex items-center justify-center text-16 dark:text-stone-200 575:text-20">
            <IconLogo class="dark:fill-stone-200" />
         </div>
         <p class="text-20 575:text-24">Get started to up your business with effective HRMS</p>
      </div>
      <div>
         <form class="flex flex-wrap items-center justify-center gap-5">
            <div>
               <label for="email"></label>
               <input
                  class="focus:ring-primary-500 dark:focus:ring-primary-400 w-40 rounded-full border-0 bg-white px-3.5 py-2.5 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 invalid:ring-red-400 focus:outline-none focus:ring-2 dark:bg-gray-900 dark:text-white dark:placeholder-gray-300 dark:ring-gray-700 dark:invalid:ring-red-500 575:w-full"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
               />
            </div>
            <UIButton
               type="submit"
               class="rounded-full bg-cyan-700 px-2.5 py-3 text-14 font-semibold text-white shadow-md transition duration-300 hover:bg-cyan-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500 active:scale-95 dark:bg-cyan-100 dark:text-gray-900 dark:hover:bg-blue-200 dark:focus-visible:ring-orange-400 575:text-16"
               >Contact us
            </UIButton>
         </form>
      </div>
   </div>
</template>
