<template>
    <main>
        <ContactForm />   
        <AppProjects />
    </main>
</template>

<script>
import ContactForm from './ContactForm';
import AppProjects from './AppProjects';

export default {
    name: 'AppContent',
    components: {
        ContactForm,
        AppProjects
    }
}
</script>

<style scoped lang="scss">
    main {
        background: $app-bg;
    }
</style>