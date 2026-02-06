<template>

<div v-if="usuario" class="persona">
    <p>Name: {{ usuario.name.first }}</p>
    <p>Surname: {{ usuario.name.last }}</p>
    <p>Gender: {{ usuario.gender }}</p>
    <img :src="usuario.picture.large" alt="Foto de perfil">
    <button @click="cargarInfo">Cargar usuario</button>
  </div>


</template>

<script>
export default {
  data() {
    return {
      usuario: null
    }
  },  mounted() {
    this.cargarInfo()

  },
  methods: {
    async cargarInfo(){
      try {
        const url = 'https://randomuser.me/api/'

        const response = await fetch(url)

        const data = await response.json()

        console.log(data.results);
        

        this.usuario = data.results[0]
        

        if (!response.ok){
          throw new Error("Request failed");
          
        }

      } catch (error) {
        console.log(error.message);
        
      }
    }
  }
  
}
</script>

<style scoped>

.persona {
  max-width: 350px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #eee;
}

/* Estilos para la imagen de perfil */
.persona img {
  border-radius: 50%; /* La hace circular */
  border: 4px solid #42b883; /* Verde color Vue */
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.persona img:hover {
  transform: scale(2.05);
}

</style>