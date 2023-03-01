<template>

  <nav class="navbar navbar-expand-lg " v-bind:style="`background-color: ${configuracionPagina.menuColor}`">
    <div class="container-fluid">
        <a class="navbar-brand" >{{ configuracionPagina.marca }}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" @click="$router.push('/')">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" @click="$router.push('/about')"> | Acerca de Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" @click="$router.push('/dron')"> | Drones</a>
                </li>
            </ul>
        </div>
    </div>
  </nav>

  <div class="container">
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
  },
  data() {
    return {
      configuracionPagina:
      {
          marca: "MegaDron",
          menuColor: "lightblue",
          footerColor: "slategrey"         
      }
    }

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
