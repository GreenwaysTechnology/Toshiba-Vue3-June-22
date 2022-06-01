<script>
// options object
export default {
    //state declaration 
    data() {
        //return object which is called as state object
        return {
            message: 'Hello'
        }
    }
}
</script>
<template>
    <div>
        <h1>Data Binding-Using Options Object</h1>
         <h2>{{message}}</h2>
    </div>
</template>