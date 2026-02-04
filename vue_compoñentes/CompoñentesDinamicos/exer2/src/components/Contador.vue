<template>
    <div>
        <p>Contador: {{ contador }} </p>
        <button @click="sumar" >+ 1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    }, methods: {
        sumar() {
            this.contador ++
        }
    }
}
</script>

<style lang="scss" scoped>

</style>