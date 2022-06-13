<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodosStore } from './store/useTodos.js'

const TodosStore = useTodosStore();
//destructure of reactive
const { todos } = storeToRefs(TodosStore)

//action destructure
const { fetchTodos } = TodosStore

//after dom ready
onMounted(() => {
    //TodosStore.fetchTodos()
    fetchTodos()
})

</script>
<template>
    <h1>Todo App using Pinia</h1>
    <ul>
        <li v-for="todo of todos">
            <span>{{ todo.title }}</span>
        </li>
    </ul>
</template>