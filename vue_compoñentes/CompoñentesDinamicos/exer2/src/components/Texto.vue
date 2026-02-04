<template>
    <div>
        <input type="text" v-model="texto" placeholder="Escribe aquí!">
        <p>Resultado: {{ texto }} </p>
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

<style lang="scss" scoped>

</style>