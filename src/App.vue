<template>
  <div id="app">
    <h1>Hello there!</h1>
    <p>Please add a new component :)</p>
    <NewComponent />
  </div>
</template>

<script>
import NewComponent from './components/NewComponent';

export default {
  name: 'App',
  components: {
    NewComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  font-size: 1.5em;
}
</style>
