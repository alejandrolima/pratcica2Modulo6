<template>
  <div class="row">
      <h4>Productos relacionados</h4>
  </div>
  <div class="row">
      <div class="col" v-for="producto of productos" :key="producto">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">{{ producto.nombre }}</h5>
                  <img v-bind:src="producto.imagen" alt=""  style="width: 100%;">
                  <p class="card-text">{{ producto.descripcion }}</p>
                      <div v-bind:style="configuracionPagina.precioEstilos">{{ producto.precio}} BOB</div>
                  <div>
          <div>
              <div v-for="color of producto.colores" :key="color" class="color-box" v-bind:style="`background: ${color}`"></div>
          </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'productoView',
  data() {      
    return{
     productos: [],
     configuracionPagina: Object
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:5000/Productos`);
      this.productos = res.data;
    } catch (error) {
      console.log(error);
    }
    
    try {
      const res = await axios.get(`http://localhost:5000/ConfiguracionPagina`);
      this.configuracionPagina = res.data;
    } catch (error) {
      console.log(error);
    }
    
  }
}
</script>

<style>
  .color-box {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 7px;
      display: inline-block;
  }       

  .quantity button{
      border-radius: 50%;
      display: inline-block;
      width: 30px;
  }
  .quantity div{
      text-align: center;
      min-width: 30px;
      display: inline-block;
      font-weight: bold;
  }
  .buy-box{
      margin: 20px;
  }
  .container{
      margin-top: 50px;
  }
  .producto-relacionado-precio{
      background: orangered;
      color: white;
      text-align: center;
      padding: 10px; 
  }
           
</style>