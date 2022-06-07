<script setup>
import { ref } from 'vue';
import SlotScope from './slots/SlotScope.vue';
import ScopeSlot from './slots/ScopeSlot.vue';
const name = ref('Subramanian')


</script>
<template>
    <h1>Vue Application</h1>
    <hr />
    <SlotScope>
        <!-- Render scope : insert state of parent compoent -->
        {{ name }}
    </SlotScope>

    <!--Scoped Slots : Sending data from the child to Parent  -->
    <ScopeSlot v-slot="slotProps">
        {{ slotProps.message }}
    </ScopeSlot>

</template>