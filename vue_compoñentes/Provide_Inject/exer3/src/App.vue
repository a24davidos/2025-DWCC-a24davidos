<template>
  <div id="app">
    <h1>Buscador de Commits de GitHub</h1>

    <div class="formulario">
      <input v-model="usuario" placeholder="Usuario (ej: vuejs)">
      <input v-model="repo" placeholder="Repositorio (ej: core)">
      <input v-model="rama" placeholder="Rama (ej: main)">
      <button @click="pillarDatos">Buscar Commits</button>
    </div>

    <hr>

    <div v-if="listaCommits.length > 0" class="commits-container">
      <div v-for="item in listaCommits" :key="item.sha" class="commit-card">
        
        <div class="autor-info">
          <img :src="item.author.avatar_url" alt="avatar" class="avatar">
          <strong>{{ item.author.login }}</strong>
        </div>

        <div class="commit-detalle">
          <p class="mensaje">{{ item.commit.message }}</p>
          <span class="fecha">{{ formatearFecha(item.commit.author.date) }}</span>
        </div>

        <a :href="item.html_url" target="_blank" class="link">Ver en GitHub</a>
      </div>
    </div>
    
    <p v-else>Cargando commits o no se encontraron resultados...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Datos del formulario
      usuario: 'vuejs',
      repo: 'core',
      rama: 'main',
      // Donde guardaremos la respuesta de la API
      listaCommits: []
    }
  },
  mounted() {
    // Se ejecuta automáticamente al abrir la página
    this.pillarDatos();
  },
  methods: {
    async pillarDatos() {
      try {
        const url = `https://api.github.com/repos/${this.usuario}/${this.repo}/commits?per_page=3&sha=${this.rama}`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error("No se encontró el repositorio");

        const datos = await response.json();
        this.listaCommits = datos;
      } catch (error) {
        alert(error.message);
        this.listaCommits = [];
      }
    },
    // Función extra para que la fecha no se vea fea
    formatearFecha(fechaRaw) {
      return new Date(fechaRaw).toLocaleString();
    }
  }
}
</script>

<style scoped>
.formulario { margin-bottom: 20px; display: flex; gap: 10px; }
.commit-card {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
}
.avatar { width: 40px; height: 40px; border-radius: 50%; }
.autor-info { width: 120px; text-align: center; }
.commit-detalle { flex-grow: 1; }
.mensaje { font-weight: bold; margin: 0; }
.fecha { font-size: 0.85em; color: #666; }
.link { text-decoration: none; color: #0366d6; font-size: 0.9em; }
</style>