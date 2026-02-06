<template>
  <form @submit.prevent="enviarFormulario">
    <h1>Selector de Nivel</h1>
    
    <Personalizado v-model="pulsado" />

    <p>Opción actual: <strong>{{ pulsado }}</strong></p>
    
    <button type="submit">Enviar Formulario</button>
  </form>
</template>

<script>
import Personalizado from './components/Personalizado.vue';

export default {
  components: { Personalizado },
  data() {
    return {
      pulsado: "" // Podemos darle un valor inicial
    } 
  },
  methods: {
    enviarFormulario() {
      console.log("Formulario enviado. Opción seleccionada:", this.pulsado);
      alert("Seleccionaste: " + this.pulsado);
    }
  }
}
</script>