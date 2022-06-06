<script setup>
const props = defineProps({
    name: {
        type: String,
        default: 'name',
        required: true
    },
    age: {
        type: Number,
        default: 1
    },
    status: {
        type:Boolean
    }
})
</script>
<template>
    <h1>Property validation</h1>
    <div>
        <p>Name {{ props.name }} Age : {{ props.age }} Status : {{status}}</p>
    </div>
</template>