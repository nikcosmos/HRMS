export const useMainStore = defineStore('main', () => {
   // Burger
   const burger = ref(false);
   const openBurger = () => (burger.value = true);
   const closeBurger = () => (burger.value = false);
   // DarkTheme
   const theme = ref(true);
   const setTheme = (val) => (theme.value = val);
   return { burger, openBurger, closeBurger, theme, setTheme };
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot));
}
