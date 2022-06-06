<script setup>
import { ref } from 'vue';
import Child from './Child.vue';
import DyamicProp from './DynamicProp.vue';
import PropValidation from './PropValidation.vue';
import ChildPropMutation from './ChildPropMutation.vue';

const name = ref('Subramanian')
const age = ref(18)
const status = ref(true)
</script>
<template>
    <h1>Parent Component</h1>
    <hr />
    <Child message="Hello"></Child>
    <hr />
    <!-- With props -->
    <DyamicProp :name="name" :age="age" :status="status"></DyamicProp>
    <!-- Without props -->
    <DyamicProp></DyamicProp>
<hr/>
<PropValidation></PropValidation>
<PropValidation status></PropValidation>
<PropValidation ></PropValidation>
<hr/>
<ChildPropMutation name="Subramanian"></ChildPropMutation>
</template>