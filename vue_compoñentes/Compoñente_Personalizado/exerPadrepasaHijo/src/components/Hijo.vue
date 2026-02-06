<template>
  <div class="contador-hijo">
    <h3>Chisme Personalizado</h3>
    <p>Valor nombre: {{ nombre }}</p>
    <p>Valor apellido: {{ apellido }}</p>
    
    <input type="text" :value="nombre" @input="$emit('update:nombre', $event.target.value)" >
    
  </div>
</template>

<script>
export default {
  // El nombre 'modelValue' es el que Vue busca por defecto para v-model
  props: ['nombre', "apellido"],
  emits: ['update:nombre']
}
</script>

<style scoped>
.contador-hijo { border: 2px solid #42b883; padding: 15px; border-radius: 10px; }
button { margin: 5px; cursor: pointer; }
</style>