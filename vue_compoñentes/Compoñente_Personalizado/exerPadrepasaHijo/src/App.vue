<template>
  <div>
    <h1>Padre - Mi nombre es: {{ nombre }} {{ apellido }}</h1>
    <hr>
    <Hijo v-model:nombre="nombre" v-model:apellido="apellido"/>
  </div>
</template>

<script>
import Hijo from './components/Hijo.vue';


export default {
  components: { Hijo },
  data() {
    return {
      nombre: "David",
      apellido: "Otero"
    }
  }
}
</script>