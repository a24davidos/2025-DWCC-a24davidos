<template>
    <div>
        <h3>Formulario</h3>
        <label for="'titulo'">Titulo: </label>
        <input type="text" placeholder="Titulo" id="'titulo'" v-model="titulo">
        <label for="'decripcion'">Descripcion: </label>
        <input type="text" placeholder="Descripcion" id="'decripcion'" v-model="desc">
        <label for="'ligazon'">Ligazon:</label>
        <input type="text" placeholder="Ligazon" id="'ligazon'" v-model="ligazon">
        <button @click="enviarForm"> + Add new</button>

        <!-- Modal -->
        <teleport to="body">
            <div v-if="showModal" class="modal-overlay">
                <div class="modal-content">
                    <p>{{ modalMessage }}</p>
                    <button @click="cerrarModal">Cerrar</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titulo: "",
            desc: "",
            ligazon: "",
            showModal: false,
            modalMessage: ""
        }
    }, methods: {
        enviarForm() {

            // Validad la informacion
            if (!this.titulo || !this.desc || !this.ligazon) {
                this.modalMessage = "Todos los campos son obligatorios";
                this.showModal = true;
                return;
            }

            // Si todo esta correcto mando los datos al padre
            this.$emit('add', this.titulo, this.desc, this.ligazon)
            // Limpio
            this.titulo = ""
            this.desc = ""
            this.ligazon = ""

        },
        cerrarModal() {
            this.showModal = false
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    width: 15%;
    gap: 10px;
}

.modal-content {
    border: 1px solid black;
    background-color: white;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>