<template>
    <div class="datos">
        <h1>Datos</h1>
        <p>Nome: {{ nome }}</p>
        <p>Ano: {{ ano }}</p>
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
        
    }
}
</script>

<style scoped>
    .datos{
        border: 1px solid black;
        max-width: 300px;
    }
</style>