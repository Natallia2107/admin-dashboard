<template>
	<v-row justify="center">
		<v-col cols="12" sm="10">
			<v-card>
				<v-list two-line>
					<template v-for="(item, index) in items">
						<v-subheader class="green--text" v-if="item.header" :key="item.header" inset>
							{{ item.header }}
						</v-subheader>

						<v-divider v-else-if="item.divider" :key="index" inset></v-divider>

						<v-list-item v-else :key="item.title" ripple>
							<v-list-item-avatar>
								<img :src="item.avatar" />
							</v-list-item-avatar>
							<v-list-item-content>
								<v-list-item-title v-html="item.title"></v-list-item-title>
								<v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</template>
				</v-list>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Settings',
	data() {
		return {
			items: [
				{
					header: 'Today',
				},
				{ divider: true },
				{
					avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
					title: 'Lorem, ipsum dolor.',
					subtitle: `<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci et vero unde voluptas aliquid a cum, distinctio molestiae incidunt harum?`,
				},
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
					title: 'Recipe to try <span class="grey--text text--lighten-1"></span>',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut impedit aut rem, quam cum numquam.',
				},
				{
					avatar: 'https://picsum.photos/250/300?image=783',
					title: 'Lorem, ipsum dolor.',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum dolor sit amet consectetur!',
				},
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
					title: 'Birthday gift',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis molestiae enim illo quam fugiat reiciendis iste qui.',
				},
				{
					header: 'Yesterday',
				},
				{ divider: true },
				{
					avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
					title: 'Lorem, ipsum dolor.',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magnam.',
				},
				{
					avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
					title: 'Summer BBQ',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam accusantium obcaecati aperiam.',
				},
				{
					header: 'Last Week',
				},
				{ divider: true },
				{
					avatar: 'https://picsum.photos/250/300?image=839',
					title: 'Lorem, ipsum dolor. <span class="grey--text text--lighten-1"></span>',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci et vero unde voluptas aliquid a cum.',
				},
				{
					avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
					title: 'Lorem, ipsum dolor.',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aliquam accusantium obcaecati aperiam.',
				},
				{
					avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
					title: 'Lorem, ipsum dolor.',
					subtitle: '<span class="font-weight-bold">Lorem, ipsum.</span> &mdash; Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, magnam.',
				},
			],
		}
	},
}
</script>

<style scoped></style>