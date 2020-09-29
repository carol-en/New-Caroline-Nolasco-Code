<template>
    <div>
        <h2>Hello from NewComponent!!</h2>
        <p>{{msg}}</p>
        <p>{{sidebar}}</p>
    </div>
</template>

<script>
    export default {
        name: 'NewComponent',
        data: function() {
            return {
                msg: "Hello from New Component!!!",
                sidebar: "check why in Vue components that 'data' needs to be a function?¿?"
            }
        }
    }
</script>

<style>
    h2 {
        text-transform: uppercase;
    }
</style>