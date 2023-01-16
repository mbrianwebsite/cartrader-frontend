<script setup>
const error = useError()

const handleEror = () => {
    clearError({
        redirect: "/"
    })
}

</script>

<template>
    <div class=" flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl font-sans font-bold">{{ error.statusCode }}</h1>
        <p class="mt-7 text-4xl font-sans font-bold">{{ error.message }}</p>
        <button @click="handleEror"
            class="mt-7 px-6 py-3 rounded-md bg-blue-400 text-white text-xl font-sans font-medium">Go
            Back</button>
    </div>
</template>