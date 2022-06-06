<script setup>
import { ref } from 'vue'
import CounterProp from './CounterProp.vue';
import StateAsProp from './StateAsProp.vue';

const counter = ref(10)

</script >
<template>
    <h1>Parent</h1>
    <CounterProp :initalCounter="10"></CounterProp>
    <StateAsProp :counter="counter"></StateAsProp>
    <button @click="counter++">+</button>
</template>