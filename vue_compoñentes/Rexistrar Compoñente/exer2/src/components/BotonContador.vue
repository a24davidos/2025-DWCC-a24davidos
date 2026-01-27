<script>
export default {
  data() {
    return {
      contador: 0,
      mensaje: "Pulsouse o contador",
    };
  },
  methods: {
    sumar() {
      this.contador++;
    },
  },
};
</script>
<template>
  <button @click="sumar">{{ mensaje }} {{ contador }}</button>
</template>
<style></style>
