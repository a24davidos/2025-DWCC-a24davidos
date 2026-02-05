<template>
	<div>
		<label v-for="tab in tabs" :key="tab">
			<input type="radio" name="pestaña" :value="tab" v-model="currentTab" />
			{{ tab }}
		</label>
	</div>

	<keep-alive>
		<component :is="currentTab"></component>
	</keep-alive>
</template>
<script>
export default {
	data() {
		return {
			currentTab: 'Contador',
			tabs: ['Contador', 'Texto'],
		};
	},
};
</script>

<style lang="scss" scoped></style>
