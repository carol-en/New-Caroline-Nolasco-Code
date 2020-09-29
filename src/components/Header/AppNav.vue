<template>
  <nav>
      <AppLink />
      <SocialMedia />
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

<style scoped>
    nav {
        background: lightgray;
    }
</style>