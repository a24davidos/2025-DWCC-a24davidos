<script>
export default {
  props: {
    name: String,
    message: String,
  },
};
</script>

<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
/* CSS opcional */
</style>
