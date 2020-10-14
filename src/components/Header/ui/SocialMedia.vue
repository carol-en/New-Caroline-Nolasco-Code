<template>
  <a v-bind:href="href">{{title}}</a>
</template>

<script>

export default {
    name: 'SocialMedia',
    props: {
      title: String,
      href: String,
      icon: Array
    }
}
</script>

<style scoped lang="scss">
  a {
    color: $white-color;
    text-decoration: none;
  }

  a:hover, a:active, a:focus, a:focus-visible {
    text-decoration: underline;
    outline: none;
    color: $pink-bg;
  }
</style>