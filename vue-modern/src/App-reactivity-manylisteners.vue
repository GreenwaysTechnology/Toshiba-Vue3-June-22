<script setup>
import { ref } from 'vue';
const counter = ref(0)

//two listeners
const onIncrement = () => counter.value++
const onDecrement = () => counter.value--

</script>
<template>
    <div>
        <h1>Counter Application</h1>
        <h1>Counter {{ counter }}</h1>
        <button @click="onIncrement">+</button>
        <button @click="onDecrement">-</button>
    </div>
</template>
<style>
</style>