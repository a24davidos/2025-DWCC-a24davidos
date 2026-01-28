<template>
  <div class="contact">
    <h2>{{ nome }} <span v-if="favorito">(Favorito) ★ </span></h2>
    <button @click="toggleDetalles">{{ textoBotonInterno }}</button>
    <div v-if="mostrarInterno">
      <p>Teléfono: {{ telefono }}</p>
      <p>Correo: {{ correo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nome: String,
    telefono: String, 
    correo: String,
    favorito: Boolean,
  },
  data() {
    return {
      mostrarInterno: false,
    }
  },
  computed: {
    textoBotonInterno() {
      return this.mostrarInterno ? "Ocultar detalles" : "Mostrar detalles";
    }
  },
  methods: {
    toggleDetalles() {
      this.mostrarInterno = !this.mostrarInterno;
    }
  }
}
</script>
