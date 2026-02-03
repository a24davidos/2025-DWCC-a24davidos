<template>
	<div>
		<input type="text" placeholder="Nome" v-model="nomeInput" />
		<input type="text" placeholder="correo" v-model="nacementoInput" />
		<button @click="modificar">Gardar</button>
	</div>
</template>

<script>
export default {
	props: {
		nome: String,
		nacemento: String,
	},
	data() {
		return {
			nomeInput: this.nome,
			nacementoInput: this.nacemento,
		};
	},
	methods: {
		modificar() {
			const cambio = {
				nome: this.nomeInput,
				nacemento: this.nacementoInput,
			};

			this.$emit('cambio', cambio);
		},
	},
};
</script>

<style lang="scss" scoped></style>
