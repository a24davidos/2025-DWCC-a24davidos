<template>
  <Contact
    v-for="c in contactos"
    :nome="c.nome"
    :telefono="c.telefono"
    :correo="c.correo"
    :favorito="c.favorito"
    @make-fav="makeFav(c)"
  />
</template>

<script>
import Contact from "./components/Contact.vue";

export default {
  components: { Contact },
  data() {
    return {
      contactos: [
        {
          nome: "David",
          telefono: "698143320",
          correo: "a@a.com",
          favorito: true,
        },
        {
          nome: "Marga",
          telefono: "696383310",
          correo: "b@b.com",
          favorito: false,
        },
      ],
    };
  },
  methods: {
    makeFav(contacto) {
      contacto.favorito = !contacto.favorito;
    },
  },
};
</script>

<style lang="scss" scoped></style>
