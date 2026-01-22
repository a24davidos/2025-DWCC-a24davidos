<script>
import FoodItem from "./components/FoodItem.vue";

export default {
  components: {
    FoodItem,
  },
  data() {
    return {
      message: "Ola mundo",
      count: 0,
      name: "Apples",
      foodMessage: "I like apples",
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="count++">You clicked me {{ count }} times.</button>

    <FoodItem :name="name" :message="foodMessage" />
  </div>
</template>

<style scoped>
/* tu CSS */
</style>
