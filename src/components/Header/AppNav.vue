
<template>

  <nav class="navigation">
      <section class="inner_navi">

        <AppLink @open-contact-form="openContactForm" @scroll-to-projects="scrollToProjects" v-bind:data=
        '{ 
            projects: {
              href: "#projects",
              title: "Projects"
            }, 
            contact: {
              href: "#contact",
              title: "Contact"
            }, 
            resume: {
              href: "./resume.pdf",
              title: "Resume"              
            }
          }'
          ></AppLink>
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
        href="https://carolinenolasco.art/" 
         v-bind:icons="{
          type: 'fab',
          name: 'fa-artstation'
          }">
        </SocialMedia>

        <SocialMedia 
        title="Instagram" 
        href="https://www.instagram.com/carolnart/" 
         v-bind:icons="{
          type: 'fab',
          name: 'fa-instagram-square'
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
      method: { type: Function }
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

<style lang="scss">
    .navigation {
        width: 100%;
        font-size: 1em;
        background: $green-bg;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;

        @media screen and ( max-width: $lg-screen ) {
          font-size: 1.25em;
        }

        @media screen and ( max-width: $md-screen ) {
          font-size: .90em;
        }

        @media screen and ( max-width: $sm-screen ) {
          font-size: .75em;
          flex-flow: nowrap column;
        }

       .inner_navi {
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between; 
        
        @media screen and ( max-width: $sm-screen ) {
           justify-content: space-evenly;
           width: 100%;
        }
       }

       .inner_navi:last-of-type {
         @media screen and ( max-width: $sm-screen ) {
           background: $accent-font-color;
         }
       }
    }
</style>