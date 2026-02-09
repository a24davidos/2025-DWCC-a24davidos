<template>
  <div class="container">

    <input type="text" v-model="filtroInput" placeholder="Filtrar por apelido">

    <select v-model="referencia" @change="mostrar" size="20" name="seleccion">
      <option :value="contacto" v-for="contacto in contactosFiltrados">{{ contacto.apelido }}, {{ contacto.nome }}
      </option>
    </select>
    <br>

    <label for="nombre">Nome:
      <input type="text" id="nombre" v-model="nomeInput">
    </label>
    <label for="apelido">Apelido:
      <input type="text" id="apelido" v-model="apelidoInput">
    </label>

    <button @click="add">Engadir</button>
    <button @click="update">Actualizar</button>
    <button @click="borrar">Borrar</button>

    <button @click="getInfo">Coger Api</button>
  </div>
</template>


<script>

export default {
  data() {
    return {
      referencia: {},
      nomeInput: "",
      apelidoInput: "",
      filtroInput: "",
      contactos: [{
        id: 1,
        nome: "David",
        apelido: "Otero",
        esVisible: true
      }, {
        id: 2,
        nome: "Margarita",
        apelido: "Souto",
        esVisible: true
      }, {
        id: 3,
        nome: "Pedro",
        apelido: "Otero",
        esVisible: true
      }]
    }
  }, methods: {
    mostrar() {
      console.log(this.referencia);
      this.nomeInput = this.referencia.nome
      this.apelidoInput = this.referencia.apelido
    }, add() {
      let datos = { id: Date.now(), nome: this.nomeInput, apelido: this.apelidoInput }
      this.contactos.push(datos)
      this.referencia = {}
      this.nomeInput = ""
      this.apelidoInput = ""
    }, update() {
      let persona = this.contactos.find((p) => p.id == this.referencia.id)
      persona.nome = this.nomeInput;
      persona.apelido = this.apelidoInput;

      this.referencia = {}
      this.apelidoInput = ""
      this.nomeInput = ""
    }, borrar() {
      console.log("lega");

      this.contactos = this.contactos.filter((p) => p.id != this.referencia.id)
      this.referencia = {}
      this.apelidoInput = ""
      this.nomeInput = ""
    }, async getInfo() {
      try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) throw new Error('Request Failed');
        const data = await response.json();
        console.log(data.results[0]);
      } catch (error) {
        console.log(error);
      }
    }
  }, computed: {
    contactosFiltrados() {
      return this.contactos.filter(contacto =>
        contacto.apelido.toLowerCase().includes(this.filtroInput.toLowerCase())
      );
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 50px auto;
}

input {
  margin: 5px;
  width: 100%;
}
</style>