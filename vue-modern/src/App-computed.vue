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

const stockInfo = computed(() => {
    return products.items.length > 0 ? 'InStock' : 'OutofStock'
})
</script>
<template>
    <div>
        <h3>Product Id {{ products.id }} Name {{ products.name }} Stock {{ products.items.length > 0 ? 'InStock' :
                'OutofStock'
        }}</h3>

        <h3>Product Id {{ products.id }} Name {{ products.name }} Stock {{ stockInfo }}</h3>
    </div>
</template>