<script setup>
// const props = defineProps(['name', 'age', 'status'])
//literal syntax with default value
const props = defineProps({
    name: {
        default: 'default Name'
    },
    age: {
        default: 18
    },
    status: {
        default: false
    }
})
</script>
<template>
    <h2>Dynamic Prop Component</h2>
    <div>
        <p>Name {{ props.name }}</p>
        <p>Age {{ props.age }}</p>
        <p>Status {{ props.status }}</p>
    </div>
</template>