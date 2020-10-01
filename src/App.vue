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
  //this is where we use the variable
  color: $primary;
}
</style>
