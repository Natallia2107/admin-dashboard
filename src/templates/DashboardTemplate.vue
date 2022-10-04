<template>
	<v-app id="inspire">
		<Header></Header>
		<Sidebar></Sidebar>
		<v-main>
			<v-container class="py-8 px-6" fluid>
				<router-view> </router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
export default {
	data: () => ({
		cards: ['Today', 'Yesterday'],
		drawer: true,
	}),
	components: { Sidebar, Header },
}
</script>
