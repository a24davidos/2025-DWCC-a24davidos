<template>

  <fieldset>
    <legend>Please select: </legend>

    <label for="tab" v-for="tab in tabs">
      <input type="radio" id="tab" v-model="currentTab" :value="tab">
      {{ tab }}
    </label>
  </fieldset>

  <keep-alive>
    <component :is="currentTab"></component>
  
  </keep-alive>


</template>


<script>
import Texto from './components/Texto.vue';

export default {
  data() {
    return {
      currentTab: 'Contador',
      tabs: ['Contador', 'Texto']
    }
  }
}
</script>

<style></style>