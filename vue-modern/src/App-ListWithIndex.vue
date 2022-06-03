<script setup>
import { reactive } from 'vue';

const list = reactive([
    {
        id: 1,
        name: 'A'
    },
    {
        id: 2,
        name: 'B'
    },
    {
        id: 3,
        name: 'A'
    }
])
</script>
<template>
    <div>
        <h1>List- with Index</h1>
        <ul>
            <li v-for="(item, index) in list">
                <span>{{index}} - {{ item }}</span>
            </li>
        </ul>
    </div>
</template>