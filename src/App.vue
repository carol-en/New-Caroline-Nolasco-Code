<template>
  <div id="app">
    <AppContainer />
  </div>
</template>

<script>
import AppContainer from './components/AppContainer';

export default {
  name: 'App',
  components: {
    AppContainer
  }
}
</script>

<style lang="scss">
#app {
font-family: $content-font;
font-size: 1rem;
width: 100%;
min-height: 100vh;
background: $app-bg;
}
</style>
