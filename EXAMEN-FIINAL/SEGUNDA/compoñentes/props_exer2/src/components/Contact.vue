<template>
    <div>
        <div class="borde">
            <p>Nome: {{ nome }} <span>{{ favorito ? "★" : "" }}</span> </p>
            <button @click="$emit('cambiar')">
                {{ visible ? "Ocultar" : "Mostrar" }}
            </button>
            <div v-show="visible">
                <p>Telefono: {{ telefono }}</p>
                <p>Correo: {{ correo }}</p>
            </div>
            <button @click="this.$emit('add')">
                {{ favorito ? "Quitar Fav" : "Facer Fav" }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['nome', 'telefono', 'correo', 'visible', "favorito"],

}
</script>

<style scoped>
.borde {
    border: 1px solid black;
    width: 300px;
}
</style>