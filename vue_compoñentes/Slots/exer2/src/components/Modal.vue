<template>
  <div v-if="visible" class="modal-mask">
    <div class="modal-container">
      <slot name="header">
        <h3>Default Header</h3>
      </slot>
      <slot name="body">
        <p>Default body</p>
      </slot>
      <slot name="footer" >
        <p>Default footer</p>
      </slot>
      <button @click="$emit('close')">Ok</button>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>

<script>
export default {
  props:{
    visible:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  }
};
</script>
