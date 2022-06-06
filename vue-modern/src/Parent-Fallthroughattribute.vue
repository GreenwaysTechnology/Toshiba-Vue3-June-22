<script setup>
import ChildAttribute from './ChildAttribute.vue';

//parent listener
const onUpdate = () => {
    alert('Parent listner')
}

</script>
<template>
    <h1>Parent Component</h1>
    <ChildAttribute  @click="onUpdate"    class="fancy-btn " label="ClickMe"></ChildAttribute>
</template>
<style>
.fancy-btn {
    color: rgb(228, 7, 7);
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
}
</style>