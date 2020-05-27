<template>
  <div id="app" style="width: 50%; margin-left: 25%">
    <navbar id="navbar"></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './views/Navbar'
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
}
#navbar {
  margin-bottom: 35px;
  background: olive;
  border-radius: 5px;
  padding: 10px;
  color: white;
}
#navbar a {
  color: white;
}
</style>
