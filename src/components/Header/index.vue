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

<style scoped lang="scss">
    header {
        background: $pink-bg;
        color: $accent-font-color;
    }
</style>