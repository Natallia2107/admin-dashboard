<template>
	<div class="dashboard">
		<v-subheader class="d-flex justify-space-between align-center">
			<h3>Dashboard</h3>
			<v-btn color="success" class="rounded-xl"> View orders… </v-btn>
		</v-subheader>
		<v-row class="pt-5">
			<v-col cols="12" lg="5">
				<v-card>
					<v-card-title>Lorem ipsum!</v-card-title>
					<v-card-text class="py-0" v-for="(item, index) in text" :key="index">
						<v-timeline align-top dense>
							<v-timeline-item color="green" small>
								<strong>{{ item.title }}</strong>
								<div class="text-caption">{{ item.subtitle }}</div>
							</v-timeline-item>
						</v-timeline>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col lg="7" cols="12">
				<v-row>
					<v-col lg="6" cols="12" v-for="(item, index) in activities" :key="index">
						<v-card elevation="2" class="rounded-xl">
							<v-card-text class="d-flex justify-space-between align-center">
								<div>
									<strong>{{ item.title }} </strong>
									<small>Lorem, ipsum!</small>
								</div>
								<v-avatar :color="item.color">
									<span class="white--text">{{ item.amounts }}</span>
								</v-avatar>
							</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Dashboard',
	data() {
		return {
			activities: [
				{ title: 'Lorem, ipsum', color: 'red', amounts: 2107 },
				{ title: 'Lorem, dolor', color: 'teal', amounts: 1307 },
				{ title: 'Lorem, amet', color: 'purple', amounts: 3110 },
				{ title: 'Lorem, sit', color: 'indigo', amounts: 2808 },
				{ title: 'Lorem, ipsum', color: 'teal', amounts: 28 },
				{ title: 'Lorem, amet', color: 'red', amounts: 31 },
			],
			text: [
				{ title: 'Lorem 5', subtitle: 'Lorem ipsum dolor sit amet.' },
				{ title: 'Lorem 40', subtitle: 'Lorem, ipsum dolor.' },
				{ title: 'Lorem 18', subtitle: 'Lorem ipsum dolor sit amet cons.' },
				{ title: 'Lorem 68', subtitle: 'Lorem ipsum dolor consectetur.' },
				{ title: 'Lorem 21', subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing.' },
			],
		}
	},
}
</script>

<style scoped></style>