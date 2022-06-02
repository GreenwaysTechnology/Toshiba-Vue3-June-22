<script>
//imort reactive apis
import { ref } from 'vue'

export default {
    setup() {
        //reactive state
        let counter = ref(0)
        console.log(counter.value)

        //listener
        function onIncrement() {
            console.log('onIncrement is called')
            //update the state
            counter.value++
            console.log(`Counter ${counter.value}`)
        }

        return {
            counter, onIncrement
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