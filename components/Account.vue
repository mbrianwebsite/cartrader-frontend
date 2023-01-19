<template>
    <div class="flex flex-row gap-4 items-center">
        <div>
            <NuxtLink class="px-4 py-2 bg-blue-400 text-white font-bold" to="/profile/listings">{{
                user.email
            }} Profile
            </NuxtLink>
        </div>

        <div>
            <div class="px-4 py-2 bg-red-400 text-white font-bold" @click="signOut" :disabled="loading">Sign
                Out</div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const loading = ref(true)

const user = useSupabaseUser();

const signOut = async () => {
    const { error } = supabase.auth.signOut()
    try {
        loading.value = true
        await $fetch('/api/_supabase/session', {
            method: "POST",
            body: { event: "SIGNED_OUT", session: null }
        })
    } catch (error) {
        return console.log(error)
    } finally {
        loading.value = false
    }

    user.value = null
    navigateTo('/')
}
</script>