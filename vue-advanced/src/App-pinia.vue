<script setup>
//how to use store
import { useCounterStore } from './store/useCounterStore.js';
const counter = useCounterStore()

//watch changes in the store
counter.$subscribe((mutation, state) => {
    console.log('Mutation=>', mutation, 'State=>', state)
})

</script>
<template>
    <div>
        <h1>Pinia State Management App</h1>
        <h2>Counter {{ counter.count }} Double Counter {{ counter.doubleIt }}</h2>
        <button @click="counter.increment">+</button>
        <button @click="counter.$reset">Reset</button>
        <button @click="counter.$patch({
            count: counter.count + 1
        })">Patch</button>
        <button @click="counter.incrementAsync">Async Increment</button>

    </div>
</template>
<style>
</style>