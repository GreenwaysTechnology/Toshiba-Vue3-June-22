<script setup>
const props = defineProps(['counter'])
</script>
<template>
    <h1>State As Prop {{ props.counter }}</h1>
</template>