<template>
  <div class="contador-hijo">
    <h3>Contador Personalizado</h3>
    <p>Valor actual: {{ modelValue }}</p>
    
    <button @click="$emit('update:modelValue', modelValue + 1)">aumentar +</button>
    <button @click="$emit('update:modelValue', modelValue - 1)">disminuir -</button>
  </div>
</template>

<script>
export default {
  // El nombre 'modelValue' es el que Vue busca por defecto para v-model
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<style scoped>
.contador-hijo { border: 2px solid #42b883; padding: 15px; border-radius: 10px; }
button { margin: 5px; cursor: pointer; }
</style>