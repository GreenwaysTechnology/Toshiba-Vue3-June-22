<script setup>
import Child from './Child.vue';
</script>
<template>
    <h1>Slot Parent</h1>
 <Child>
        <h1>From the parent</h1>
 </Child>
 <Child/>
</template>