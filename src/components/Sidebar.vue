<template>
	<v-navigation-drawer v-model="drawer" app>
		<v-sheet color="grey lighten-4" class="pa-4">
			<div class="text-center">
				<v-avatar class="mb-4" size="64"
					><v-img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
				/></v-avatar>

				<h2 class="black--text">Admin Panel</h2>
			</div>
		</v-sheet>

		<v-divider></v-divider>

		<v-list>
			<router-link v-for="[icon, text, path] in links" :key="icon" :to="path" >
				<v-list-item  link>
					<v-list-item-icon>
						<v-icon>{{ icon }}</v-icon>
					</v-list-item-icon>
	
					<v-list-item-content>
						<v-list-item-title>{{ text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</router-link>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Sidebar',
	data() {
		return {
			links: [
				['mdi-home-analytics', 'Dashboard', '/'],
				['mdi-account', 'Profile', '/about'],
				['mdi-emoticon', 'Icons', '/icon'],
				['mdi-email', 'Message','dupa1'],
				['mdi-help-circle', 'Help', 'dupa2'],
				['mdi-cog', 'Settings', 'dupa3'],
			],
		}
	},
}
</script>

<style scoped></style>
