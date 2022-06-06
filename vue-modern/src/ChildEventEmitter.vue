<script setup>
import { ref } from 'vue'
//define events 
const emit = defineEmits(['onRequest', 'onCounter'])

const data = ref('Hello,I am From Child Listener')
const counter = ref(0)
const sendToParent = () => {
    //emit event
    emit('onRequest', data.value)
}
const onIncrement = () => {
    //emit event
    emit('onCounter', counter.value++)
}

</script>
<template>
    <h1>Custom Events- Child Component</h1>
    <div>
        <button @click="$emit('onRequest', 'Hello,I am from Child')">Send Data To Parent</button>
    </div>
    <div>
        <button @click="sendToParent">Send Data To Parent</button>
    </div>
    <div>
        <button @click="onIncrement">Send Counter To Parent</button>
    </div>
    <hr />
</template>