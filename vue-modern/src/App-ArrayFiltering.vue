<script setup>
import { ref } from 'vue';
import TODOS from './mock-data/todos';

const todos = ref(TODOS)

const filter = () => todos.value = todos.value.filter(todo => todo.completed)

</script>
<template>
    <button @click="filter">filter</button>

    <ul>
        <li v-for="todo in todos">
            {{ todo }}
        </li>
    </ul>

</template>
