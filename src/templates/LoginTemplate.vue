<template>
	<v-app id="inspire">
		<v-main>
			<v-container class="py-8 px-6" fluid>
				gunwoooo
				<router-view> </router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		cards: ['Today', 'Yesterday'],
		drawer: true,
	}),
}
</script>
