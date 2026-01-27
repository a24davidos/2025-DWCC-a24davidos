<script>
export default {
  data() {
    return {
      mensaje: "ola mundo",
    };
  },
  methods: {
    toggleCase() {
      if (this.mensaje === this.mensaje.toUpperCase()) {
        this.mensaje = this.mensaje.toLowerCase();
      } else {
        this.mensaje = this.mensaje.toUpperCase();
      }
    },
    addExclamation() {
      this.mensaje += "!";
    },
  },
};
</script>
<template>
  <h1>{{ mensaje }}</h1>
  <button @click="toggleCase">Toggle Case</button>
  <button @click="addExclamation">Engadir Exclamacion</button>
</template>
<style></style>
