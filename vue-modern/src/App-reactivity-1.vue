<script setup>
//imort reactive apis
import { ref } from 'vue'

//reactive state
let counter = ref(0)
//listener
const onIncrement = () => counter.value++
</script>
<template>
    <div>
        <h1>State Application -Non Reactive</h1>
        <h1>Counter : {{ counter }}</h1>
        <!-- <button v-on:click="onIncrement">increment</button> -->
        <button @click="onIncrement">increment</button>
    </div>
</template>