<script setup>
import { reactive } from 'vue';

//reactive  deep nested objects
const app = reactive({
    counter: {
        inc: {
            count: 0
        }
    }
})
const onIncrement = () => app.counter.inc.count++

</script>
<template>
    <div>
        <h1>Counter Application</h1>
        <h1>Counter {{ app.counter.inc.count }}</h1>
        <button @click="onIncrement">+</button>
    </div>
</template>
<style>
</style>