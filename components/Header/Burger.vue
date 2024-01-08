<script setup>
    // Burger
    const store = useMainStore();
    const { openBurger, closeBurger } = store;
    const { burger } = storeToRefs(store);
    console.log(burger)
</script>

<template>
    <div @click="burger ? closeBurger : openBurger">
        <div  class="h-5 w-5">
            <img :src="burger ? '/images/x-mark.svg' : '/images/burger-menu.svg'" alt="burger" class="object-contain h-full"/>
        </div>
        <p>{{ burger }}</p>
    </div>
</template>