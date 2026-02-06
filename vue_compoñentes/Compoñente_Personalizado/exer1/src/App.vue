<template>
  <div>
    <h1>Padre - Mi número es: {{ miNumero }}</h1>
    <hr>
    <ContadorComponent v-model="miNumero" />
  </div>
</template>

<script>
import ContadorComponent from './components/ContadorComponent.vue'

export default {
  components: { ContadorComponent },
  data() {
    return {
      miNumero: 10 // Valor inicial
    }
  }
}
</script>