<template>
    <div class="'container-tarxetas'">
        <Tarxeta :class="'borde'"
        v-for="dato in datos"
        :key="dato.titulo"
        :titulo="dato.titulo"
        :desc="dato.desc"
        :ligazon="dato.ligazon"
        @delete="$emit('delete', $event)"
        />
    </div>
</template>

<script>
import Tarxeta from './Tarxeta.vue';

export default {
    props: ['datos'],
    data () {
        return {}
    }
}
</script>

<style scoped>

</style>