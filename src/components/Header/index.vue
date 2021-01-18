<template>
    <header class="header">
    <AppNav @open-contact-form="openContactForm" @scroll-to-projects="scrollToProjects"/>
        <section class="inner-header">
            <AppAbout />
            <AppTitle />
            <ContactForm :modal="modal" :emailSent="emailSent" @open-contact-form="openContactForm" @email-sent="contactEmailSent"/>
        </section>
        
        <section class="tail"></section>
    </header>
</template>

<script>
    import AppNav from './AppNav';
    import AppAbout from './AppAbout';
    import AppTitle from './AppTitle';
    import ContactForm from './ContactForm';
    
    export default {
        name: 'AppHeader',
        components: {
            AppNav,
            AppAbout,
            AppTitle,
            ContactForm
        },
        data() {
            return {
                modal: false,
                emailSent: false
            }
        },
        methods: {
            openContactForm: function() { // Toggles pop up contact form open and close
                this.modal = !this.modal;

                // If contact form is open/active & email component is active, turn off
                if(this.emailSent && this.modal) this.emailSent = false;
            },
            contactEmailSent: function() { // If email is successfully sent, form gets switched from contact from to a 'thank you message'
                // If pop up contact component is active & emailSent is set to false, set emailSent to 'true' for successful 'thank you' message
                if(this.modal && !this.emailSent) this.emailSent = true;
            },
            scrollToProjects: function() {
                const element = document.querySelector(".projects");
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
</script>

<style scoped lang="scss">

    .inner-header {
        background: $pink-bg url('./assets/banner_default.png')no-repeat right;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        color: $accent-font-color;
        font-size: 1.15em;
        width: 100%;
        min-height: 300px;
        height: 50vh;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .about {
            order: 2;
            flex: 1;
            padding: 3rem 0 3rem 3rem;
        }

        .title {
            order: 3;
            flex: 1;
            padding: 3rem 3rem 3rem 0;
        }
    }

    .header {
        position: relative;
        z-index: 4;

        .tail {
                position: absolute;  
                border-color: $pink-bg transparent transparent transparent; 
                left: 50%;
                bottom: -2.5rem;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 2em 2em 0 2em;
        }
    }
</style>