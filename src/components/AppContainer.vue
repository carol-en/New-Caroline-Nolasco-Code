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
}
</style>