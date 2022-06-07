<script setup>
import { ref, provide } from 'vue';
import Child1 from './propsdrilling/Child1.vue';

const message = ref('Hello')
//dynamic provider
const counter = ref(0)
//provider data
// provide('name', 'Subramanian')
// provide('counter', counter)
//short cut
provide('info', {
    counter, message
})
</script>
<template>
    <h1>Root</h1>
    <Child1 :message="message" />
    <button @click="counter++">+</button>
</template>