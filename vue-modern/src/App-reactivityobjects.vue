<script setup>
import { reactive } from 'vue';

//reactive object
const counter = reactive({
    count: 0
})
console.log(counter.count)
const onIncrement = () => counter.count++

</script>
<template>
    <div>
        <h1>Counter Application</h1>
        <h1>Counter {{ counter.count }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>
<style>
</style>