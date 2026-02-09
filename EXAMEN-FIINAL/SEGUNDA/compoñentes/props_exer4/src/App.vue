<template>
  <Info
    :nome="persoa.nome"
    :ano="persoa.ano"
  />
  <br>
  <br>

  <Formulario 
    :nome="persoa.nome"
    :ano="persoa.ano"
    @update="updatearPersoa"
  />

</template>

<script>

export default {
  data() {
    return {
     persoa:{
      nome: 'David',
      ano: 1998
     }
    }
  }, methods: {
    updatearPersoa(data){
      this.persoa.nome = data.nome
      this.persoa.ano = data.ano
    }
  }
}
</script>

<style scoped></style>