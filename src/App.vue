<template>
	<router-view> </router-view>
</template>

<script>
export default {
	data: () => ({
		cards: ['Today', 'Yesterday'],
		drawer: true,
	}),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap');
</style>
