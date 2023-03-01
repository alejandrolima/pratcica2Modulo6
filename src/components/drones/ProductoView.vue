<template>
  <div class="row">
      <h3>{{ producto.nombre }}</h3>
  </div>
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 ">
      <img v-bind:src="producto.imagen" alt="" style="width: 100%;">
    </div>
    <div class="col-12 col-sm-6  col-md-8">
        <h6>{{producto.descripcion}}</h6>
        <div class="presentacion" style="presentacion background-color: gray;">
            Precio: {{ producto.precio }} BOB
        </div>
        <h5>Color</h5>
        <div>
            <div v-for="color of producto.colores" :key="color" class="color-box"             
            v-bind:style="`background: ${color}`" 
            v-on:click="pedido.color = color">
     
            </div>
        </div>
        <h5>Cantidad</h5>
        <div class="quantity">
            <button v-on:click="disminuir(pedido.cantidad)">-</button> 
            <div>{{ pedido.cantidad }}</div> 
            <button v-on:click="aumentar(pedido.cantidad)">+</button>
        </div>
        
        <div class="buy-box">
                <button 
                type="button" 
                class="btn btn-primary"
                :disabled="pedido.cantidad <= 0 || pedido.color===null"
                v-on:click="reservarPedido(pedido,producto.precio)">Comprar</button>
        </div>

        <div class="buy-box text-success" v-if="mostrar"> 
          {{pedido || json}}
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
     producto: Object,
     pedido: Object,
     mostrar: false

    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:5000/Producto`);
      this.producto = res.data;
    } catch (error) {
      console.log(error);
    }

    try {
      const res = await axios.get(`http://localhost:5000/Pedido`);
      this.pedido = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    aumentar(cantidad) {
      this.pedido.cantidad = cantidad + 1 ;
    },

    disminuir(cantidad) {
      this.pedido.cantidad = cantidad - 1 ;
    },

    reservarPedido(pedido, precio) {
      let total = pedido.cantidad * precio;
      this.pedido.precio =  total ;
      console.log(pedido)
      this.mostrar = true;
      
    }
  }
}
</script>

<style>
  .presentacion {
    background: orangered; 
    color: white; 
    font-weight: bold; 
    display: flex; justify-content: left;
  }
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
           
</style>
