<script setup>
import { ref, watch } from 'vue';
const x = ref(0)
const y = ref(0)
const z = ref(0)
//watch multiple sources
watch([x, y, z], ([tempX, tempY, tempZ]) => {
    console.log(`X ${tempX} Y ${tempY} Z ${tempZ}`)
})

</script>
<template>
    <button @click="x++">X</button>
    <button @click="y++">Y</button>

</template>