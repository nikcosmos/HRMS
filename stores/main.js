export const useMainStore = defineStore('main', () => {
   // Burger
   const burger = ref(false);
   const openBurger = () => (burger.value = true);
   const closeBurger = () => (burger.value = false);

   return { burger, openBurger, closeBurger };
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
