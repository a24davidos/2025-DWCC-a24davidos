<template>
    <div>
        <h1>Formulario</h1>
        <form @submit.prevent class="formato">
            <input type="text" v-model="nome" placeholder="Nome">
            <input type="text"
            placeholder="Telefono" v-model="telefono">
            <input type="text"
            placeholder="Email" v-model="correo">
            <button @click="enviar">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            nome: "",
            telefono: "",
            correo: "",            
        }
    } , methods: {
        enviar(){

            let contacto = {nome: this.nome, telefono: this.telefono, correo:this.correo}
            console.log("hola");
            
            this.nome = ""
            this.telefono = ""
            this.correo = ""

            this.$emit('crear', contacto)
        }
    }
}
</script>

<style scoped>
    .formato{
        display: flex;
        flex-direction: column;
        max-width: 300px;
    }
</style>