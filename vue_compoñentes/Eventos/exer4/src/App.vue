<template>
	<MostrarInfo :key="c.nome" :nome="c.nome" :nacemento="c.nacemento" />

	<Formulario :key="c.nome" :nome="c.nome" :nacemento="c.nacemento" @cambio="gardar"></Formulario>
</template>

<script>
export default {
	data() {
		return {
			c: {
				nome: 'Xacobo',
				nacemento: 2005,
			},
		};
	},
	methods: {
		gardar(contacto) {
			this.c.nome = contacto.nome;
			this.c.nacemento = contacto.nacemento;
		},
	},
};
</script>

<style></style>
