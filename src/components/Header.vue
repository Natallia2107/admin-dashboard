<template>
	<v-app-bar app color="white" elevate-on-scroll elevation="4">
		<!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
		<!-- dodaje odstep po prawej stronie -->
		<!-- <v-spacer></v-spacer> -->
		<v-col lg="6" cols="12">
			<v-form class="mt-6">
				<v-text-field rounded outlined dense placeholder="Search…" append-icon="mdi-magnify"></v-text-field>
			</v-form>
		</v-col>
		<v-toolbar-title>Title</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-heart</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Header',
}
</script>

<style scoped></style>
