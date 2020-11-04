<template>
<section>
  <aside class="contact" v-bind:class="{ active: modal }">
      <h2>Contact Me!</h2>
      
    <form class="form" @submit.prevent="sendEmail">
        <div class="form-control">
            <span class="form-label"><label for="name">Name</label></span>
            <input type="text" id="name" name="name" required placeholder="John Smith" />        
        </div>

        <div class="form-control">
            <span class="form-label"><label for="email">Email</label></span>
            <input type="email" id="email" name="email" required placeholder="you@me.com"/>        
        </div>

        <div class="form-control">
            <span class="form-label"><label for="message">Message</label></span>
            <textarea name="message" id="message" required placeholder="Hello there!"></textarea>        
        </div>

        <div class="form-control">
            <button type="submit" class="form-btn">Send!</button>
            <button class="form-btn">Reset</button>
        </div>
    </form>
  </aside>
  <div class="fixed" v-bind:class="{ active: modal }" v-on:click="$emit('open-contact-form')"></div>
</section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    name: 'ContactForm',
    data() {
        return {
            emailSent: false
        }
    },
    props: {
        modal: Boolean
    },
    methods: {
        contactEmailSent: function() {
            // this.$emit('emailSubmitted');
            console.log('fgkjrsglrlksgkl')
        },
        sendEmail: (e) => {
            this.contactEmailSent();
            emailjs.sendForm('service_6w3urpt', 'template_tmd0fes', e.target, 'user_6yh7gv0e3ksC61YIxijVT')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                }, (error) => {
                    console.log('FAILED...', error);
                });
        }
    }
}
</script>

<style scoped lang="scss">
.fixed {
    width: 100%;
    height: 100%;
    background: rgba($white-color, .3);
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
}

.contact {
    background: $light-bg;
    color: $accent-font-color;
    display: none;
    width: 45%;
    padding: 1.5rem;
    position: fixed;
    margin: 10% 28%;
    top: 0;
    left: 0;
    z-index: 6;
    -webkit-box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.51);
    -moz-box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.51);
    box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.51);

    h2 {
        text-align: center;
        text-transform: uppercase;
        font-family: $header-font;
        color: $green-bg;
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

.active {
    display: block;
}

</style>