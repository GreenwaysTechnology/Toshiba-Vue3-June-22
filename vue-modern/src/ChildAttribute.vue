<script>
export default {
    inheritAttrs: false
}
</script>
<script setup>
const props = defineProps(['label'])
</script>
<template>
    <button>{{ props.label }}</button>
</template>
<style>
.large {
    color: rgb(228, 7, 7);
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
}
</style>