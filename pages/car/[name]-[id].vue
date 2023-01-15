<script setup>
const route = useRoute()
const { toTitleCase } = useUtilities()

useHead({
    title: toTitleCase(route.params.name)
})

definePageMeta({
    layout: 'custom'
})
</script>
<template>
    <!-- CAR DETAIL PAGE -->
    <CarDetail />
    <!-- CAR DETAIL PAGE   -->
</template>