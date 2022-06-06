<script setup>
import ChildSlot from './ChildSlot.vue';
import Header from './Header.vue';
</script>
<template>
    <h1>Parent - Slot</h1>
    <!-- we send html elements as prop -->
    <ChildSlot>
        <h1>Hello</h1>
    </ChildSlot>
    <!-- another component as prop -->
    <ChildSlot>
        <Header />
    </ChildSlot>
</template>