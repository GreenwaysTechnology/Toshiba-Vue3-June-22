import { defineStore } from "pinia";


export const useTodosStore = defineStore('todos', {
    state: () => {
        return {
            todos: []
        }
    },
    actions: {
        async fetchTodos() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await response.json()
                this.todos = data

            }
            catch (err) {
                console.log(err)
            }
        }
    }
})