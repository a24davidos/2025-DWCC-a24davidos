<template>
    <Contact v-for="c in contactos" :nome="c.nome" :telefono="c.telefono" :correo="c.correo" :favorito="c.favorito"/>
</template>

<script>
import Contact from './components/Contact.vue';

export default {
  components: {Contact},
  data () {
    return{
      contactos: [{
        nome: "David", telefono: "698143320", correo: "a@a.com", favorito: true
      },{
        nome: "Marga", telefono: "696383310", correo: "b@b.com", favorito: false

      }]
    }


  }
}
</script>

<style lang="scss" scoped>

</style>