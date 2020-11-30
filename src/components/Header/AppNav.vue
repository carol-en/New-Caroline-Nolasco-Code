
<template>

  <nav class="navigation">
      <section class="inner_navi">

        <AppLink  @open-contact-form="open-contact-form" @scroll-to-projects="scroll-to-projects" v-bind:data=
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
    }
}
</script>

<style lang="scss">
    .navigation {
        background: $green-bg;
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-between;
        align-items: center;

       .inner_navi {
        display: flex;
        flex-flow: nowrap row;
        justify-content: space-evenly;
       }
    }
</style>