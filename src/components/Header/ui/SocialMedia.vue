<template>
  <Fragment>
      <a class="social-media-links"
      v-bind:href="href" v-bind:title="title"
      target="_blank" rel="noopener noreferrer"> 
        <i v-bind:class="[icons.type, icons.name]"></i>
      </a>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
export default {
    name: 'SocialMedia',
    components: { Fragment },
    props: {
      title: String,
      href: String,
      icons: Object
    }
}
</script>

<style scoped lang="scss">
  a.social-media-links {
    color: $white-color;
    text-decoration: none;
    font-size: 2em;
    padding: .35rem 1.15rem;

    @media screen and ( max-width: $sm-screen ) {
      padding: 0 .5em .35em .5em;
    }    
  }

  a:hover.social-media-links, 
  a:active.social-media-links, 
  a:focus.social-media-links, 
  a:focus-visible.social-media-links {
    text-decoration: underline;
    outline: none;
    color: $pink-bg;
  }
</style>