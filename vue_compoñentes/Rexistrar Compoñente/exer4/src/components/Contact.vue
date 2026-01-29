<template>
  <div class="contact">
    <h2>{{ nome }} <span v-if="favorito">(Favorito) ★ </span></h2>
    <button @click="toggleDetalles">
      {{ mostrarInterno ? "Ocultar detalles" : "Mostrar Detalles" }}
    </button>
    <div v-if="mostrarInterno">
      <p>Teléfono: {{ telefono }}</p>
      <p>Correo: {{ correo }}</p>
      <button @click="$emit('make-fav')">Fav</button>
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
    };
  },
  methods: {
    toggleDetalles() {
      this.mostrarInterno = !this.mostrarInterno;
    },
  },
};
</script>
