<script setup>
import { ref } from 'vue';
const message = ref('From Child')
</script>
<template>
    <div>
        <!-- Send data to the parent compoent -->
        <slot :message="message"></slot>
    </div>
</template>