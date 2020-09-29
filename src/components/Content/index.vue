<template>
    <main>
        <h1>Content Component!</h1> 
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

<style scoped>
    main {
        border: 1px solid gold;
    }
</style>