<script setup>
import { onMounted, ref } from 'vue'
//ref is poniter to dom elements
const myheader = ref(null);

//we can access any element once it is mounted inside browser
onMounted(() => {
    //this hook is called once the dom is ready
    console.dir(myheader.value)

})

</script>
<template>
    <h1 ref="myheader">Hello</h1>
</template>