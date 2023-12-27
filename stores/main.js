export const useMainStore = defineStore('main', () => {
   // Burger
   const burger = ref(false);
   const openBurger = () => (burger.value = true);
   const closeBurger = () => (burger.value = false);
   // Theme
   const theme = useCookie('theme');
   const setTheme = (val) => {
      theme.value = val.target.checked;
   };
   return { burger, openBurger, closeBurger, theme, setTheme };
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
