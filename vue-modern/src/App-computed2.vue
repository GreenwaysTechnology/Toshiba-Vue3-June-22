<script setup>
import { computed, ref } from 'vue';
const firstName = ref('Subramanian')
const lastName = ref('Murugan')

const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`
})

</script>
<template>
    <h1>Name {{ fullName }}</h1>
</template>