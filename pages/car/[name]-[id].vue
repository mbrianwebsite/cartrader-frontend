<script setup>
const route = useRoute()

const { data: car } = await useFetchCar(route.params.id)

const { toTitleCase } = useUtilities()
// const { cars } = useCars()

useHead({
    title: toTitleCase(route.params.name)
})

definePageMeta({
    layout: 'custom',
    // validate({ params }) {
    //     const { cars } = useCars()
    //     const car = cars.find((c) => c.id === parseInt(params))
    //     if (!car) {
    //         throw createError({
    //             statusCode: 404,
    //             message: `Car with id of ${route.params.id} does not exist`
    //         })
    //     }
    // }
})

// const car = computed(() => {
//     return cars.find((c) => {
//         return c.id === parseInt(route.params.id)
//     })
// })


</script>
<template>
    <div v-if="car">
        <!-- CAR HERO -->
        <CarDetailHero :car="car" />
        <!-- CAR HERO -->
        <!-- CAR ATTRIBUTES -->
        <CarDetailAttributes :features="car.features" />
        <!-- CAR ATTRIBUTES -->
        <!-- CAR DESCRISPTION -->
        <CarDetailDescription :description="car.description" />
        <!-- CAR DESCRISPTION -->
        <!-- CAR CONTACT -->
        <CarDetailContact />
        <!-- CAR CONTACT -->
    </div>
</template>