<template>
  <ul>
    <li>
      <button 
        type="button" 
        :class="{ seleccionado: modelValue === 'baixo' }" 
        @click="$emit('update:modelValue', 'baixo')"
      >Baixo</button>
    </li>
    <li>
      <button 
        type="button" 
        :class="{ seleccionado: modelValue === 'medio' }" 
        @click="$emit('update:modelValue', 'medio')"
      >Medio</button>
    </li>
    <li>
      <button 
        type="button" 
        :class="{ seleccionado: modelValue === 'alto' }" 
        @click="$emit('update:modelValue', 'alto')"
      >Alto</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"]
}
</script>

<style scoped>
ul { list-style: none; display: flex; gap: 10px; padding: 0; }

/* Estilo por defecto de los botones */
button {
  padding: 10px 20px;
  border: 2px solid #ccc;
  background-color: white;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Estilo que se aplica SOLO cuando el botón coincide con el v-model */
.seleccionado {
  border-color: #42b883;
  color: #42b883;
  background-color: #f0fff8;
  font-weight: bold;
  transform: scale(1.05);
}
</style>