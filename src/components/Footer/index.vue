<template>
    <footer>
        <BackToTopBtn />
        <h1>Footer Component Begins Here</h1>
    </footer>
</template>

<script>
import BackToTopBtn from './ui/BackToTopBtn';

    export default {
        name: 'AppFooter',
        components: {
            BackToTopBtn
        }
    }
</script>

<style scoped>
    footer {
        border: 1px solid gold;
        text-align: center;
    }
</style>