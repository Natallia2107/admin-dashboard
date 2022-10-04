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
