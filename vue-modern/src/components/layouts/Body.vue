<script setup>
import Greeter from '../greeter/Greeter.vue';
</script>
<template>
    <div>
        <Greeter></Greeter>
        <p>
            What is the best way to structure a Vue.js application so that it scales and remains maintainable and
            extendable the more it grows? This is a question that I've heard on numerous occasions and I think one
            answer to that question lies in the principle of predictability. When it comes to creating a scalable
            project you want everything about it to be as predictable as possible.

            What exactly do I mean by predictability? At it's simplest, it's the ability to intuitively go from a
            feature request or bug report to the location in the codebase where said task can be addressed. Furthermore,
            it's the ability to quickly know what tools you have access to at that location in the codebase in order to
            complete the task at hand.

            Why is this important? Well, like me, you've probably had the experience of inheriting or being introduced
            to an existing project and then on that first task, opening up the codebase and thinking: "I don't even know
            where to start!"
        </p>
    </div>
</template>