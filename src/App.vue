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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //this is where we use the variable
  color: $primary;
  margin-top: 60px;
}
</style>
