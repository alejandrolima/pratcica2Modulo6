<template>

  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about"> | About</router-link>
    <router-link to="/dron"> | Drones</router-link>
  </nav>

  <div class="container" style="max-width: 800px; margin: auto">
    <router-view/>
  </div>

  <FooterView/>
</template>

<script>
import FooterView from './components/FooterView.vue'

export default {
  name: 'AppView',
  components: {
    FooterView
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
</style>
