<script setup>
import { reactive } from 'vue';
import TODOS from './mock-data/todos';

const todos = reactive(TODOS)

</script>
<template>
    <div>
        <h1>Todo List</h1>
        <ul>
            <li v-for="todo in todos " :key="todo.id">
                <span>{{ todo.id }} {{ todo.title }}</span>
            </li>
        </ul>
    </div>
</template>