<script setup>
const props = defineProps({
    name: String
})
//update the prop
props.name = "Foo"
</script>
<template>
    <h1>Prop Mutation {{props.name}}</h1>
</template>