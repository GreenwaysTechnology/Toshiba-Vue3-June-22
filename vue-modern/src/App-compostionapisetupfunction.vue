<script>
//composition api with setup function
export default {
    setup() {
        console.log('setup is called')
        const message = 'Hello!!'
        //variables or any thing if you want to access inside template, must be returned via an object
        return {
            //message:message
            message
        }
    }
}
</script>
<template>
    <h1>Data Binding :Using Composition App with Setup Function</h1>
    <h1>{{ message }}</h1>
</template>