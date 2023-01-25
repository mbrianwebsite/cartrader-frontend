<script setup>
const props = defineProps({
    cars: Array
})

const favorite = useLocalStorage("favorite", {})

const handleFavorite = (id) => {
    if (id in favorite.value) {
        delete favorite.value[id]
    } else {
        favorite.value = {
            ...favorite.value,
            [id]: true,
        }
    }
}

</script>
<template>
    <div class="w-full">
        <!-- CAR CARD -->
        <CarCard v-if="cars.length" v-for="car in cars" :key="car.id" :car="car" @favor="handleFavorite"
            :favored="car.id in favorite" />
        <!-- CAR CARD -->
        <h1 v-else class="px-8 py-4 bg-red-400 text-white font-bold text-4xl">No Cars Found!</h1>
    </div>
</template>