<template>
    <div class="container">
        <AppHeader />
        <AppContent />
        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from './Header';
    import AppFooter from './Footer';
    import AppContent from './Content';

    export default {
        name: 'AppContainer',
        components: {
            AppHeader,
            AppContent,
            AppFooter
        }
    }
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    margin: 0 auto;
    background: $app-bg;
    font-size: 1.25em;
    box-shadow: 0;


    @media screen and ( min-width: $lg-screen ) {
        width: 75%;
        font-size: 1.45em;
        box-shadow: 0 1em 1em 0 rgba($primary-font-color, .4);
    }

    @media screen and ( min-width: $xlg-screen ) {
        width: 80%;
        font-size: 1.75em;
    }    
}
</style>