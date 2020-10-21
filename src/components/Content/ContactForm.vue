<template>
  <section class="contact">
      <h2>Contact Me!</h2>
      
    <form class="form">
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
            <button type="submit" class="submit-btn">Send!</button>
        </div>
    </form>

  </section>
</template>

<script>
export default {
    name: 'ContactForm'
}
</script>

<style scoped lang="scss">
    .contact {
        background: $light-bg;
        color: $accent-font-color;
        width: 45%;
        margin: 0 auto;
        padding: 1.5rem;

        h2 {
            text-align: center;
            text-transform: uppercase;
            font-family: $header-font;
            color: $green-bg;
        }

        // https://www.emailjs.com/docs/examples/vuejs/
        //  Finish styling form
        //  Make sending more functional
        // Make click to show/hide form

        .form {

            input, textarea, button {
                width: 100%;
                background: $white-color;
                border: 0;
                border: .10em dotted $pink-bg;
                padding: .15rem;
                outline: none;
                color: $green-bg;
            }

            button:hover {
                background: $pink-bg;
                color: $white-color;
            }

            input:hover, 
            textarea:hover, 
            input:active, 
            textarea:active, 
            input:focus, 
            textarea:focus {
                border: .10em solid $pink-bg;
                border-left: 1em solid $pink-bg;
            }
        }
    }
</style>