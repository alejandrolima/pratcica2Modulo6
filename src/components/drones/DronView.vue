<template>
  <div class="dron">
    <h1>Pagina de Dron</h1>

    <ProductoView/>

    <TarjetaView/>
  </div>
</template>

<script>
import ProductoView from './ProductoView.vue'
import TarjetaView from './TarjetaView.vue'

export default {
  name: 'DronView',
  components: {
    ProductoView,
    TarjetaView
  }
}
</script>