<script setup>
//variables
const firstName = 'Subramanian'
const salary = 1000
const status = true
const address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
const skills = ['Javascript', 'Vue', 'React', 'Java']
const x = 10;
const y = 20;
function multiply() {
    return x * y
}
const foo = undefined;
</script>
<template>
    <div>
        <h1>Data Binding</h1>
        <h2>String</h2>
        <h3>Name : {{ firstName }}</h3>
        <h2>Number</h2>
        <h3>Salary: {{ salary }}</h3>
        <h2>Boolean</h2>
        <h3>Name : {{ status ? 'Available' : 'NotAvaiable' }}</h3>
        <h2>Object</h2>
        <h3>Address : {{ address.city }} {{ address.state }}</h3>
        <h2>Array</h2>
        <h3>Skills : {{ skills }}</h3>
        <h2>Java script Expression</h2>
        <h3>Computation: {{ x + y }} {{ multiply() }}</h3>
        <h2>undefined</h2>
        <h3>Result : {{ foo ? "Found" : "Not Found" }}</h3>


    </div>
</template>