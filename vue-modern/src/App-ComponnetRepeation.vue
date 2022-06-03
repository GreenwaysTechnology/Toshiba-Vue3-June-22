<script setup>
import { ref } from 'vue';
import Greeter from './components/greeter/Greeter.vue';

const start = ref(1)
</script>
<template>
    <Greeter v-for="start in 5"></Greeter>
</template>
