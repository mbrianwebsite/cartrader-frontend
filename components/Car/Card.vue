<script setup>
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";
const prop = defineProps({
    car: Object,
    favored: Boolean,

})
const emit = defineEmits(['favor'])
const config = useRuntimeConfig()

</script>

<template>
    <div class="shadow border w-[800px] overflow-hidden mb-5 cursor-pointer h-[200px]">
        <img @click="$emit('favor', car.id)" class="absolute ml-5 mt-5 w-10 h-fit z-20"
            :src="favored ? heartFilled : heartOutline" alt="" />
        <div class="flex h-full" @click="navigateTo(`/car/${car.name}-${car.id}`)">
            <nuxt-img loading="lazy" :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"
                alt="" class="w-[300px] h-full" />
            <div class="p-4 flex flex-col">
                <div>
                    <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
                    <p class="text-gray-700">
                        {{ car.description }}
                    </p>
                </div>
                <h1 class="mt-auto text-xl">${{ car.price }}</h1>
            </div>
        </div>
    </div>
</template>