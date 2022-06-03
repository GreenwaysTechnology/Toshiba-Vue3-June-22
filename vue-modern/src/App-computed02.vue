<script setup>
import { computed, reactive } from 'vue';

const products = reactive({
    id: 1,
    name: 'books',
    items: [
        "Vue in Action",
        "Vue Master Class"
    ]
})

const update = () => products.items.push("Demo")

const update1 = () => {
    products.id = 2
}

const stockInfo = computed(() => {
    console.log('computed is called')
    return products.items.length > 0 ? 'InStock' : 'OutofStock'
})
//regular /normal javascript method
const stockInfoRegular = () => {
    console.log('regular method is called')
    return products.items.length > 0 ? 'InStock' : 'OutofStock'
}

</script>
<template>
    <div>
        <h1>Javascript Expression inside Template</h1>
        <h3>Product Id {{ products.id }} Name {{ products.name }} Stock {{ products.items.length > 0 ? 'InStock' :
                'OutofStock'
        }}</h3>

        <h1>Javascript Expression as ComputedProperty</h1>

        <h3>Product Id {{ products.id }} Name {{ products.name }} Stock {{ stockInfo }}</h3>

        <h1>Javascript Expression as Regular Method</h1>

        <h3>Product Id {{ products.id }} Name {{ products.name }} Stock {{ stockInfoRegular() }}</h3>

        <button @click="update">Render1</button>
        <button @click="update1">Render2</button>

    </div>
</template>