<script setup>
import { ref, watch } from 'vue';
const x = ref(0)

//watcher
watch(x, (newX) => {
    console.log(` X value is ${newX}`)
})

</script>
<template>
    <button @click="x++">+</button>
</template>