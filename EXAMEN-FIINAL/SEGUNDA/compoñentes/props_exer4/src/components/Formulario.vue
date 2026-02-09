<template>
    <div>
        <form @submit.prevent>
            <input type="text" v-model="nomeForm" >
            <input type="number" v-model="anoForm" >
            <button @click="actualizar">Actualizar</button>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        nome: String,
        ano:{
            type: Number,
            required: true
        }
    },
    data () {
        return {
            nomeForm: this.nome,
            anoForm: this.ano
        }
    }, methods: {
        actualizar(){
            let data = {nome: this.nomeForm, ano: this.anoForm}

            this.$emit('update', data)
        }
    }
}
</script>

<style  scoped>

</style>