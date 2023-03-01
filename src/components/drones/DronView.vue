<template>

  <div class="container">
    <ProductoView />
  </div>

  <div class="container">
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

<style>
  .container{
      margin-top: 50px;
  }
</style>