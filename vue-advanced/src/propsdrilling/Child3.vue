<script setup>
import { inject } from 'vue'
const props = defineProps(['message'])

// const name = inject('name', 'default Name')
// const counter = inject('counter', 0)
const { name, counter } = inject('info')
const company = inject('company')
</script>
<template>
    <h1>Child 3 {{ props.message }}</h1>
    <h1>Tree level Global Data {{ name }} {{ counter }}</h1>
    <h1>App level Global Data {{ company }}</h1>

</template>