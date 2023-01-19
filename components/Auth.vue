<template>
    <form class="flex flex-row items-center gap-4" @submit.prevent="handleLogin">
        <div>
            <input class="px-4 py-2 ring-2 ring-blue-400 font-bold" type="email" placeholder="Your email"
                v-model="email" />
        </div>
        <div>
            <input type="submit" class="px-4 py-2 bg-blue-400 text-white font-bold"
                :value="loading ? 'Loading' : 'Send magic link'" :disabled="loading" />
        </div>
    </form>
</template>

<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')
const handleLogin = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signInWithOtp({ email: email.value })
        if (error) throw error
        alert('Check your email for the login link!')
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
}
</script>