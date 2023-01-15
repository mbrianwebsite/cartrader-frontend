<script setup>
const route = useRoute()

useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)} `
})

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

definePageMeta({
    layout: 'custom'
})
</script>

<template>
    <!-- CARS PAGE -->

    <div class="mt-32 flex">
        <!-- CAR SIDE BAR -->
        <CarSideBar />
        <!-- CAR SIDE BAR -->

        <NuxtPage />
    </div>

    <!-- CARS PAGE -->
</template>