<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
console.log(router)

const goToPage = () => {
    //redirect to HelloWorld Page
    router.push({ path: 'hello' })
}
</script>
<template>
    <button @click="goToPage">Go to HelloWorld</button>
    <button @click="$router.back">Back</button>

</template>