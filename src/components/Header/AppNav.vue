
<template>

  <nav class="navigation">
      <section class="inner_navi">
        <!-- <a href="#projects" v-on:click="scrollToProjects">Projects</a>
        <a href="#contact" v-on:click="openContactForm">Contact</a>
        <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">Resumes</a> -->

        <!-- <AppLink href="#projects" title="Projects"/>
        <AppLink href="#contact" title="Contact"/>
        <AppLink href="./resume.pdf" title="Resumes"/> -->

        <AppLink v-bind:data='[
          { 
            href: "#projects",
            title: "Projects"
          }, 
          {
            href: "#contact",
            title: "Contact"
          }, 
          {
            href: "./resume.pdf",
            title: "Resume"
          }
        ]'></AppLink>
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
    props: {
      method: { type: Function },
    },

    methods: {
      openContactForm: function() {
        this.$emit('open-contact-form');
      },
      scrollToProjects: function() {
        this.$emit('scroll-to-projects');
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

           a, button {
            background: $green-bg;
            border: 0;
            color: $white-color;
            cursor: pointer;
            text-transform: uppercase;
            font-family: $header2-font;
            display: block;
            padding: .35rem 1.15rem;
        }

        a:hover, 
        a:active, 
        a:focus, 
        a:focus-visible, 
        button:hover,
        button:active, 
        button:focus, 
        button:focus-visible {
          text-decoration: underline;
          color: $pink-bg;
          outline: none;
        }
       }
    }
</style>