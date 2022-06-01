<script setup>
//variable declarations
const message = "Hello"
//function declarations
function sayHai() {
    return 'Hai'
}
</script>
<template>
    <h1>Data Binding :Using Composition App with Setup attribute</h1>
    <h1>{{ message }} {{ sayHai() }}</h1>
</template>