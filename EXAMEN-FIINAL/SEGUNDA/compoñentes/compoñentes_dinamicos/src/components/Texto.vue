<template>
    <div>
        <label for="entrada">Entrada: </label>
        <input type="text" id="entrada" v-model="texto">
        <p><strong>Texto: </strong>{{ texto }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            texto: ""
        }
    }
}
</script>

<style scoped>

</style>