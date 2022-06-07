 <script setup>
//import composable api
import { useMouseTracker } from './composables/mousetracker.js'
//invoke composable apis
const { x, y } = useMouseTracker()

</script>
<template>
    <h1>Mouse Position x: {{ x }} y: {{ y }}</h1>
</template>