<script setup>
const route = useRoute()
const { toTitleCase } = useUtilities()
const { cars } = useCars()

useHead({
    title: toTitleCase(route.params.name)
})

const car = computed(() => {
    return cars.find((c) => {
        return c.id === parseInt(route.params.id)
    })
})

if (!car.value) {
    throw createError({
        statusCode: 404,
        message: `Car with id of ${route.params.id} does not exist`
    })
}

definePageMeta({
    layout: 'custom'
})
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