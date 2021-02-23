<template>
<section>
<transition-group name="fading">
  <aside class="contact" v-show="modal" key="form">

    <span class="close-form" v-on:click="$emit('open-contact-form')">X</span>    

    <h2 v-if="emailSent">Thank You For Your Email!</h2>

    <form class="form" @submit.prevent="sendEmail" v-else>
        <h2>Contact Me!</h2>

        <div class="form-control">
            <p>Looking for my illustrations? Visit me at <a href="https://carolinenolasco.art" target="_blank" rel="noopener noreferrer">carolinenolasco.art</a>!</p>
        </div>      

        <div class="form-control">
            <span class="form-label"><label for="name">Name</label></span>
            <input v-model="name" type="text" id="name" name="name" required placeholder="John Smith" />        
        </div>

        <div class="form-control">
            <span class="form-label"><label for="email">Email</label></span>
            <input v-model="email" type="email" id="email" name="email" required placeholder="you@me.com"/>        
        </div>

        <div class="form-control">
            <span class="form-label"><label for="message">Message</label></span>
            <textarea v-model="message" name="message" id="message" required placeholder="Hello there!"></textarea>        
        </div>

        <div class="form-control">
            <button type="submit" class="form-btn">Send!</button>
            <button class="form-btn" v-on:click="resetForm">Reset</button>
        </div>
    </form>
  </aside>
</transition-group>

  <transition name="fading">
    <div class="fixed" v-show="modal" v-on:click="$emit('open-contact-form')"></div>
  </transition>
  
</section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactForm',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    props: {
        modal: Boolean,
        emailSent: Boolean
    },
    methods: {
        contactEmailSent: function() {
            this.$emit('email-sent');
        },
        sendEmail: function(e) {
            emailjs.sendForm('service_6w3urpt', 'template_tmd0fes', e.target, 'user_6yh7gv0e3ksC61YIxijVT')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    this.contactEmailSent();
                }, (error) => {
                    console.log('FAILED...', error);
                });
        },
        resetForm: function(e) {
            e.preventDefault();           
            this.name = '';
            this.email = '';
            this.message = '';
        }
    }
}
</script>

<style scoped lang="scss">
.fading-enter-active, .fading-leave-active {
    transition: all .75s ease;
}
.fading-enter, .fading-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
.fixed {
    width: 100%;
    height: 100%;
    background: rgba($white-color, .3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
}

.contact {
    background: $light-bg;
    color: $accent-font-color;
    width: 45%;
    font-size: 1em;
    padding: 1.5rem;
    position: fixed;
    margin: 10% 28%;
    top: 0;
    left: 0;
    z-index: 6;
    -webkit-box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.51);
    -moz-box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.51);
    box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.51);

    p {
        color: $primary-font-color;
        font-size: .60em;
        word-spacing: .1em;
        line-height: 1.75em;

        a {
            color: $pink-bg;
        }
        
        a:hover, a:active, a:focus {
            color: $green-bg;
        }
    }

    @media screen and ( max-width: $lg-screen ) {
        font-size: .75em;
        padding: 1.25rem;
        margin: 5% 28%;
    }    

    @media screen and ( max-width: $md-screen ) {
        font-size: .60em;
        padding: 1.1rem;
        width: 75%;
        margin: 5% 15%;
    }

    @media screen and ( max-width: $sm-screen ) {
        position: absolute;
        width: 90%;
        margin: 5% 5%;
        padding: 1rem;
    }

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-family: $header-font;
        color: $green-bg;
    }

    .close-form {
        color: $green-bg;
        background: $white-color;
        cursor: pointer;
        font-weight: bold;
        padding: .35em .85em;
        font-size: .5em;
        float: right;
        border-radius: 100%; 
        border: .10em solid $light-gray;

    }

    .close-form:hover {
        background: $pink-bg;
        color: $white-color;
        border: .10em solid $pink-bg;
    }

    .form {
        .form-control {
            padding: .5rem;

            .form-label {
                color: $primary-font-color;
                font-size: .75em;
                font-weight: bold;
                margin-bottom: .05em;
            }
        }

        input, textarea, button {
            width: 100%;
            background: $white-color;
            border: 0;
            border: .10em solid $light-gray;
            padding: .5rem;
            outline: none;
            color: $green-bg;
            border-radius: .25em;
            font-size: .65em;
        }

        textarea {
            resize: vertical;
            height: 10em;
        }

        button.form-btn {
            cursor: pointer;
            text-align: center;
            width: initial;
            text-transform: uppercase;
            font-weight: bold;
            font-size: .85em;
            letter-spacing: .05em;
            display: inline-block;
        }
        button.form-btn:nth-child(1) {
            margin-right: .5em;
        }

        .form-btn:hover {
            background: $pink-bg;
            color: $white-color;
            border: .10em solid $pink-bg;
        }

        input:hover, 
        textarea:hover, 
        input:active, 
        textarea:active, 
        input:focus, 
        textarea:focus {
            border: .10em solid $pink-bg;
            border-right: 1em solid $pink-bg;
        }
    }
}

</style>