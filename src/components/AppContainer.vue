<template>
    <div class="container">
        <AppHeader />
        <h1>My New Web Site Starts Here!</h1>
        <p>I will start building my website from here. :^)</p>
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

<style scoped>
.container {
    border: 1px solid gold;
    width: 75%;
    margin: 0 auto;
}
</style>