<template>
  <Contact
  v-for="(contacto) in contactos" 
  :key="contacto.telefono"
  :nome="contacto.nome"
  :telefono="contacto.telefono"
  :correo="contacto.correo"
  :visible="contacto.visible"
  :favorito="contacto.favorito"
  @cambiar="visualizacion(contacto)"
  @add="fav(contacto)"
  @delete="deleteContact"
  />

  <Formulario @crear="crearContacto"/>

</template>

<script>
import Contact from './components/Contact.vue';
import Formulario from './components/Formulario.vue';

export default {
  data() {
    return {
      contactos: [{
        nome: "David Otero",
        telefono: 698143320,
        correo: "a@a.com",
        visible: true,
        favorito: true
      }, {
        nome: "Pedro Otero",
        telefono: 698143420,
        correo: "b@b.com",
        visible: false,
        favorito: false
      }]
    }
  }, methods:{
    visualizacion(contacto){
      contacto.visible = !contacto.visible
    },
    fav(contacto){
      contacto.favorito = !contacto.favorito
    },
    crearContacto(contacto){
      console.log("llega aqui tb");
      
      let data = {
        nome: contacto.nome,
        telefono: contacto.telefono,
        correo: contacto.correo,
        visible: true,
        favorito: true
      }

      this.contactos.push(data)

    },
    deleteContact(telefono){
      console.log(telefono);
      this.contactos = this.contactos.filter((x) => x.telefono != telefono)
    }
  }
}
</script>

<style scoped></style>