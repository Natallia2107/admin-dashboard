<template>
	<v-app-bar app color="white" elevate-on-scroll elevation="4">
		<v-spacer></v-spacer>
		<v-col lg="6" cols="12">
			<v-form class="mt-6">
				<v-text-field rounded outlined dense placeholder="Search…" append-icon="mdi-magnify"></v-text-field>
			</v-form>
		</v-col>
		<v-spacer></v-spacer>
		<v-menu offset-y>
			<template v-slot:activator="{ on, attrs }">
				<span v-bind="attrs" v-on="on" style="cursor: pointer" class="mx-5 mr-10">
					<v-badge offset-x="10" offset-y="10" color="red" content="3">
						<v-icon>mdi-bell</v-icon>
					</v-badge>
				</span>
			</template>
			<v-list three-line width="250">
				<template v-for="(item, index) in items">
					<v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
					<v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
					<v-list-item v-else :key="item.title">
						<v-list-item-avatar>
							<v-img :src="item.avatar"></v-img>
						</v-list-item-avatar>

						<v-list-item-content>
							<v-list-item-title v-html="item.title"></v-list-item-title>
							<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-list>
		</v-menu>
		<v-menu offset-y>
			<template v-slot:activator="{ attrs, on }">
				<span style="cursor: pointer" v-bind="attrs" v-on="on">
					<v-chip link>
						<v-badge dot bottom color="green" offset-y="10" offset-x="10">
							<v-avatar size="30">
								<v-img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
							</v-avatar>
						</v-badge>
						<span class="ml-3">{{ login }}</span>
					</v-chip>
				</span>
			</template>
			<v-list width="250" class="py-0">
				<v-list-item two-line>
					<v-list-item-avatar>
						<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title>{{ login }}</v-list-item-title>
						<v-list-item-subtitle>Logged In</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-divider />
				<v-list-item to="/profile">
					<v-list-item-icon>
						<v-icon>mdi-account</v-icon>
					</v-list-item-icon>
					<v-list-item-title> Profile </v-list-item-title>
				</v-list-item>

				<v-list-item link v-for="(menu, index) in menus" :key="index">
					<v-list-item-icon>
						<v-icon>{{ menu.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>
						{{ menu.title }}
					</v-list-item-title>
				</v-list-item>

				<v-list-item to="/">
					<v-list-item-icon>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-icon>
					<v-list-item-title> Logout </v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-app-bar>
</template>

<script>
import store from './../store'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Header',
	data() {
		return {
			menus: [
				{ title: 'Change Password', icon: 'mdi-key' },
				{ title: 'Settings', icon: 'mdi-cog' },
			],
			items: [
				{ header: 'Today' },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
					title: 'Recipe to try',
					subtitle:
						'<span class="text--primary">Britta Holt</span> &mdash; Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
					title: 'Birthday gift',
					subtitle:
						'<span class="text--primary">Trevor Hansen</span> &mdash; Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
				},
				{ divider: true, inset: true },
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
					title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
					subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
				},
				{ divider: true, inset: true },
			],
		}
	},
	computed: {
		login() {
			return store.state.login
		},
	},
}
</script>

<style scoped></style>
