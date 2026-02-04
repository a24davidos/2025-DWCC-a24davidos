<template>
<button @click="show">Mostrar</button>
<!-- <Modal :visible="visible" @close="closeModal"/> -->


<!-- Esta versión para ver como sobrescribir -->
<Modal :visible="visible" @close="closeModal">
      <!-- Slot header -->
      <template #header>
        <h3>Encabezado personalizado</h3>
      </template>

      <!-- Slot body -->
      <template #body>
        <p>Este es el contenido personalizado del cuerpo de la modal.</p>
      </template>

      <!-- Slot footer -->
      <template #footer>
       <p>Contenido personalizado para el footer</p>
      </template>
    </Modal>

</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  }, methods:{
    show(){
      this.visible = true
    },
    closeModal(){
      this.visible = false
    }
  }
};
</script>

<style lang="scss" scoped></style>
