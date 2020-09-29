<template>
    <header>
        <AppNav />
        <AppAbout />
        <AppTitle />
    </header>
</template>

<script>
    import AppNav from './AppNav';
    import AppAbout from './AppAbout';
    import AppTitle from './AppTitle';
    
    export default {
        name: 'AppHeader',
        components: {
            AppNav,
            AppAbout,
            AppTitle
        }
    }
</script>

<style scoped>
    header {
        border: 1px solid gold;
        text-align: center;
    }
</style>