<script>
export default {
    data() {
        //reactive state
        return {
            counter: 0
        }
    },
    //listeners
    methods: {
        onIncrement() {
            this.counter++
        }
    }

}
</script>
<template>
    <div>
        <h1>State Application -Non Reactive</h1>
        <h1>Counter : {{ counter }}</h1>
        <!-- <button v-on:click="onIncrement">increment</button> -->
        <button @click="onIncrement">increment</button>
    </div>
</template>