<script setup></script>

<template>
   <div class="max-w-sx 575:max-w-sm flex flex-col items-center gap-10">
      <div class="text-center font-bold space-y-5">
         <h2 class="flex justify-center items-center text-16 575:text-20">
            <span><IconCircles /></span>HRMS
         </h2>

         <p class="text-20 575:text-24">Get started to up your business with effective HRMS</p>
      </div>
      <div>
         <form class="flex flex-wrap justify-center items-center gap-5">
            <div>
               <label for="email"></label>
               <input
                  class="w-40 575:w-full focus:outline-none border-0 rounded-full placeholder-gray-400 dark:placeholder-gray-300 px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 invalid:ring-red-400 dark:invalid:ring-red-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
               />
            </div>
            <UIButton
               type="submit"
               class="transition duration-300 active:scale-95 focus:outline-none font-semibold rounded-full text-14 575:text-16 px-2.5 py-3 shadow-md text-white dark:text-gray-900 bg-cyan-700 hover:bg-cyan-900 dark:bg-cyan-100 dark:hover:bg-blue-200 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-orange-500 dark:focus-visible:ring-orange-400"
               >Contact us</UIButton
            >
         </form>
      </div>
   </div>
</template>
