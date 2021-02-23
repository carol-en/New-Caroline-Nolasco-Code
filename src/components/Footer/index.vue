<template>
<Fragment>
    <BackToTopBtn />
    <footer>
        <p>Copyright <a href="mailto:carolinenolasco.code@gmail.com">Caroline Nolasco</a> 2021</p>
    </footer>
</Fragment>    
</template>

<script>
import BackToTopBtn from './ui/BackToTopBtn';
import { Fragment } from 'vue-fragment';
    export default {
        name: 'AppFooter',
        components: {
            BackToTopBtn,
            Fragment
        }
    }
</script>

<style scoped lang="scss">
    footer {
        font-size: .60em;
        text-align: center;
        font-family: $header2-font;
        color: $accent-font-color;
        background: $green-bg;
        padding: 1.5rem;

        a {
            color: $pink-bg;
        }

  a:hover, 
  a:active, 
  a:focus, 
  a:focus-visible {
      text-decoration: none;
      color: $light-bg;
  }

         @media screen and ( max-width: $sm-screen ) {
             padding: 1em;
         }
    }
</style>