<script setup>
import counterStore from './store/counterstore.js'
import Counter from './components/Counter.vue'

</script>
<template>
    <!-- View -->
    <div>
        <h1>Counter {{ counterStore.state.counterStore }}</h1>
        <!-- User interacts  -->
        <button @click="counterStore.actions.onIncrement">+</button>
    </div>
    <h1>Counter Component</h1>
    <Counter></Counter>
</template>
<style scoped>
</style>