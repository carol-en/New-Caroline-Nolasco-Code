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

<style scoped lang="scss">
    nav {
        background: $green-bg;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
    }
</style>