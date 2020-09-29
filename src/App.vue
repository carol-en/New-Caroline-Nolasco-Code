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

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size: 1.5em;
  }
</style>
