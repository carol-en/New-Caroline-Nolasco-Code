
<template>
  <Fragment>
    <a class="navi-links" v-bind:href="resume.href" target="_blank" rel="noopener noreferrer">{{resume.title}}</a>
    <a class="navi-links" v-bind:href="projects.href" v-on:click="scrollToProjects">{{projects.title}}</a>
    <a class="navi-links" v-bind:href="contact.href" v-on:click="openContactForm">{{contact.title}}</a>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
export default {
    name: 'AppLink',
    components: { Fragment },
    props: {
      data: Object,
      method: { type: Function }
    },
    data() {
      return {
        projects: this.data.projects,
        contact: this.data.contact,
        resume: this.data.resume
      }
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
  a.navi-links {
    background: $green-bg;
    border: 0;
    color: $white-color;
    cursor: pointer;
    text-transform: uppercase;
    font-family: $header2-font;
    padding: .35rem 1.15rem;

    @media screen and ( max-width: $sm-screen ) {
      padding: 1em .5em .5em .5em;
    }
  }

  a.navi-links:hover, 
  a.navi-links:active, 
  a.navi-links:focus, 
  a.navi-links:focus-visible {
    text-decoration: underline;
    color: $pink-bg;
    outline: none;
  }
</style>