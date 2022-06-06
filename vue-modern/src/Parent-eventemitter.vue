<script setup>
import { ref } from 'vue';
import ChildEventEmitter from './ChildEventEmitter.vue';

const message = ref('')
const counter = ref(0)

//listener 
function update(data) {
    console.log(data)
    message.value = data
}
function onCounterUpdate(count) {
    counter.value = count;
}
</script>
<template>
    <h1>Custom Events- Parent Component {{ message }} {{ counter }}</h1>
    <hr />
    <ChildEventEmitter @on-request="update" @on-counter="onCounterUpdate"></ChildEventEmitter>
</template>