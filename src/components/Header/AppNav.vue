
<template>
<!-- https://vuejs.org/v2/guide/state-management.html 
https://forum.vuejs.org/t/how-to-add-a-open-an-another-component-when-a-button-is-clicked/26959/2 
-->
  <nav class="navigation">
      <section class="inner_navi">
        <span v-on:click="test()">Contact Me!</span>
        <AppLink title="contact" href="#contact"></AppLink>
        <AppLink title="projects" href="#projects"></AppLink>
        <AppLink title="resume" href="#resume"></AppLink>
      </section>
      
      <section class="inner_navi"> 
        <SocialMedia 
        title="LinkedIn" 
        href="https://www.linkedin.com/in/carolinenolasco/" 
         v-bind:icons="{
          type: 'fab',
          name: 'fa-linkedin'
          }">
        </SocialMedia>

        <SocialMedia 
        title="Git Hub" 
        href="https://github.com/carol-en" 
         v-bind:icons="{
          type: 'fab',
          name: 'fa-github-square'
          }">
        </SocialMedia>

        <SocialMedia 
        title="Art Station" 
        href="https://www.artstation.com/carolen" 
         v-bind:icons="{
          type: 'fab',
          name: 'fa-artstation'
          }">
        </SocialMedia>
      </section>



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
    },

    data() {
      return {
        isActive: false
      }
    },
    methods: {
      test: function() {
        this.isActive = !this.isActive;
        alert(this.isActive);
      }
    }
}
</script>

<style scoped lang="scss">
    .navigation {
        background: $green-bg;
        display: flex;
        justify-content: space-between;
        align-items: center;

       .inner_navi {
        display: flex;
        justify-content: space-evenly;

           a, span {
            text-transform: uppercase;
            font-family: $header2-font;
            display: block;
            padding: .35rem 1.15rem;
        }

        span {
          cursor: pointer;
          color: $white-color;
        }
       }
    }
</style>