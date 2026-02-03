<template>
	<NovoContacto @novoContacto="agregarContacto" />

	<Contact
		v-for="c in contactos"
		:nome="c.nome"
		:telefono="c.telefono"
		:correo="c.correo"
		:favorito="c.favorito"
		@make-fav="makeFav(c)"
		@borrar="borrar(c)"
	/>
</template>

<script>
export default {
	data() {
		return {
			contactos: [
				{
					nome: 'David',
					telefono: '698143320',
					correo: 'a@a.com',
					favorito: true,
				},
				{
					nome: 'Marga',
					telefono: '696383310',
					correo: 'b@b.com',
					favorito: false,
				},
			],
		};
	},
	methods: {
		makeFav(contacto) {
			contacto.favorito = !contacto.favorito;
		},

		borrar(contacto) {
			this.contactos = this.contactos.filter((c) => c.telefono != contacto.telefono);
		},

		agregarContacto(novoContacto) {
			this.contactos.push(novoContacto);
		},
	},
};
</script>

<style lang="scss" scoped></style>
