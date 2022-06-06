<script setup>
import { computed, ref } from 'vue'
const name = ref('admin')

const isAdmin = computed(() => name.value === 'admin')

</script>
<template>
    <div>
        <!-- <h1 v-if="name === 'admin'">You are Admin</h1>
        <h1 v-else>You are guest</h1> -->
        <h1 v-if="isAdmin">You are Admin</h1>
        <h1 v-else>You are guest</h1>
    </div>
    <template v-if="isAdmin">
        <h1>You are admin</h1>
        <p>This is admin </p>
        <p>This is admin </p>
        <p>This is admin </p>
    </template>
    <template v-else>
        <h1>You are Guest</h1>
        <p>This is Guest </p>
        <p>This is Guest </p>
        <p>This is Guest </p>
        <p>This is Guest </p>

    </template>
    <h1 v-show="isAdmin">Admin Show</h1>
</template>