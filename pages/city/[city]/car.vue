<script setup>
const route = useRoute()
const { toTitleCase } = useUtilities()

useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)} `
})



definePageMeta({
    layout: 'custom'
})
</script>

<template>
    <!-- CARS PAGE -->

    <div class="mt-32 flex justify-center">
        <NuxtErrorBoundary>

            <!-- CAR SIDE BAR -->
            <CarSideBar />
            <!-- CAR SIDE BAR -->

            <NuxtPage />
            <template #error="{ error }">
                <div class=" flex h-screen justify-center items-center flex-col">
                    <h1 class="text-5xl font-sans font-bold">Sorry, something went wrong</h1>
                    <code class="mt-7 text-4xl font-sans font-bold">{{ error }}</code>
                    <button @click="error.value = null"
                        class="mt-7 px-6 py-3 rounded-md bg-blue-400 text-white text-xl font-sans font-medium">Go
                        Back</button>
                </div>
            </template>
        </NuxtErrorBoundary>
    </div>

    <!-- CARS PAGE -->
</template>