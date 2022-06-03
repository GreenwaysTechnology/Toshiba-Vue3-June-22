<script setup>
import { ref, watch, watchEffect } from 'vue'

// bind ref as a variable
let count = ref(0)

// watch(count, () => {
//     console.log(count.value)
// })
watchEffect(() => {
    console.log(count.value)
})

</script>
<template>
    <p>{{ count }}</p>
    <button @click="count++">+</button>
</template>