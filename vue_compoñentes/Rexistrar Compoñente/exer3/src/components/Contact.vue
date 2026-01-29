<template>
  <div class="contact">
    <h2>{{ contacto.nome }}</h2>
    <button @click="toggleDetalles">{{ textoBoton }}</button>
    <!-- ella lo hace así -->
    <!-- {{ mostrar ? "Ocultar":"Mostrar" }} -->
    <div v-if="mostrar">
      <p>Teléfono: {{ contacto.telefono }}</p>
      <p>Correo: {{ contacto.correo }}</p>
    </div>
  </div>
</template>

<!-- hacer este otra vez, poniendo una estrellita vacia y luego que se rellene al clickarle y ponga favorito o no -->

<script>
export default {
  name: "Contact",
  data() {
    return {
      contacto: {
        nome: "David",
        telefono: "698143320",
        correo: "a@a.com",
      },
      mostrar: false,
      textoBoton: "Mostrar detalles",
    };
  },
  methods: {
    toggleDetalles() {
      this.mostrar = !this.mostrar;
      this.textoBoton = this.mostrar ? "Ocultar detalles" : "Mostrar detalles";
    },
  },
};
</script>
