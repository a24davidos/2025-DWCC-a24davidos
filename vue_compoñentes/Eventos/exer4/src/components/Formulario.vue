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
		nacemento: {
			type: Number,
			required: true,
			validator: (value) => value > 0
		},
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
