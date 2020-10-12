<template>
  <nav class="navigation">
      <section class="inner_navi">
        <AppLink title="contact" href="#contact"/>
        <AppLink title="projects" href="#projects"/>
        <AppLink title="resume" href="#resume"/>
      </section>
      <section class="inner_navi"> 
        <SocialMedia title="linked in" href="linked in site"/>
        <SocialMedia title="github" href="github site"/>
        <SocialMedia title="general assembly" href="general assembly site"/>
      </section>

    <!-- https://medium.com/front-end-weekly/how-to-use-fon-awesome-5-on-vuejs-project-ff0f28310821 -->

  </nav>
</template>

<script>

import AppLink from './ui/AppLink';
import SocialMedia from './ui/SocialMedia';
export default {
    name: 'AppNav',
    components: {
        AppLink,
        SocialMedia
    }
}
</script>

<style scoped lang="scss">
    .navigation {
        background: $green-bg;
        padding: 1rem;
        display: flex;
        justify-content: space-between;

       .inner_navi {
        display: flex;
        justify-content: space-evenly;

           a {
            text-transform: uppercase;
            font-family: $header2-font;
            font-size: .75em;
            display: block;
            padding: .25rem 1.15rem;
        }
       }
    }
</style>