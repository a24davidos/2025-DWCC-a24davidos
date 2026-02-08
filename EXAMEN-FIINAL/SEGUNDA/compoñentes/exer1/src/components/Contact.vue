<template>
    <div class="contactos">
        <div v-for="(contacto, index) in contactos" :key="index" class="borde">
            <p>Nome: {{ contacto.nome }}</p>
            <button @click="mostrar(contacto)">
                {{ contacto.visible ? 'Ocultar' : 'Mostrar' }}
            </button>
            <div v-show="contacto.visible" >
                <p>Telefono: {{ contacto.telefono }}</p>
                <p>Corro: {{ contacto.correo }}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contactos: [{
                nome: "David Otero",
                telefono: 698143320,
                correo: "a@a.com",
                visible: true
            }, {
                nome: "Pedro Otero",
                telefono: 698143320,
                correo: "b@b.com",
                visible: false
            }]
        }
    }, methods:{
        mostrar(contacto){
            contacto.visible = !contacto.visible
        }
    }
}
</script>

<style scoped>
.borde {
    border: 1px solid black;
    width: 300px;
}
</style>