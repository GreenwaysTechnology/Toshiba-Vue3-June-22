<script setup>
import { reactive } from 'vue';

const todos = reactive([])
//array mutation - add element into array
const addItem = () => todos.push({
    id: Math.random(),
    text: 'do this '
})
//this is non mutatating api we cant add item
const addItem2 = () => {
    todos = todos.concat({
        id: Math.random(),
        text: 'do this '
    })
}

</script>
<template>
    <ul>
        <li v-for="todo in todos">
            {{ todo }}
        </li>
    </ul>
    <button @click="addItem">Add New Item</button>
    <button @click="addItem2">Add New Item</button>

</template>
