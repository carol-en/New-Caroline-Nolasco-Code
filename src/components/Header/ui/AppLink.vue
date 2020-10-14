<template>
  <a class="navi-links" v-bind:href="href">{{title}}</a>
</template>

<script>
export default {
    name: 'AppLink',
    props: {
      title: String,
      href: String
    }
}
</script>

<style scoped lang="scss">
  a.navi-links {
    color: $white-color;
    font-size: .85em;
    text-decoration: none;
  }

  a.navi-links:hover, 
  a.navi-links:active, 
  a.navi-links:focus, 
  a.navi-links:focus-visible {
    text-decoration: underline;
    outline: none;
    color: $pink-bg;
  }
</style>