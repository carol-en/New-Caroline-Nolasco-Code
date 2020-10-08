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

// Add bg image

    header {
        background: $pink-bg;
        color: $accent-font-color;
        display: flex;
        flex-flow: row wrap;
    }

    nav {
        width: 100%;
        order: 1;
    }

    section.about {
        order: 2;
        flex: 1;
        padding: 3rem 0 3rem 3rem;
    }

    section.title {
        order: 3;
        flex: 1;
        padding: 3rem 3rem 3rem 0;
    }
</style>