<template>
	<v-row>
		<!-- <v-card class="mt-4 mx-auto" max-width="500">
			<v-sheet class="v-sheet--offset mx-auto" color="pink" elevation="12" max-width="calc(100% - 32px)">
				<v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
			</v-sheet>

			<v-card-text class="pt-0">
				<div class="text-h6 font-weight-light mb-2">User Registrations</div>
				<div class="subheading font-weight-light grey--text">Lorem, ipsum dolor.</div>
				<v-divider class="my-2"></v-divider>
				<v-icon class="mr-2" small> mdi-clock </v-icon>
				<span class="text-caption grey--text font-weight-light">Lorem ipsum dolor sit amet.</span>
			</v-card-text>
		</v-card> -->

		<v-col xl="7" cols="12">
			<v-row>
				<v-col lg="6" cols="12" v-for="(item, index) in activities" :key="index">
					<v-card elevation="2" class="rounded-xl">
						<v-sheet class="v-sheet--offset mx-auto" color="green" elevation="12" max-width="calc(100% - 32px)">
							<v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
						</v-sheet>
						<v-card-text class="d-flex justify-space-between align-center">
							<div>
								<strong>{{ item.title }} </strong>
							</div>
							<div class="subheading font-weight-light grey--text">{{ item.subtitle }}</div>
							<v-divider class="my-2"></v-divider>
							<v-icon class="mr-2" small> mdi-clock </v-icon>
							<span class="text-caption grey--text font-weight-light"> {{ item.time }}</span>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Diagram',
	data() {
		return {
			activities: [
				{ title: 'Lorem, sit', subtitle: 'lorem ipsum', time: 'Lorem, ipsum 25 dolor.' },
				{ title: 'Lorem, ipsum', subtitle: 'lorem ipsum', time: 'Lorem, ipsum 55 dolor.' },
				{ title: 'Lorem, amet', subtitle: 'lorem ipsum', time: 'Lorem, ipsum 18 dolor.' },
			],
			labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
			value: [200, 675, 410, 390, 310, 460, 250, 240],
		}
	},
}
</script>

<style scoped>
/* .v-sheet--offset {
	top: -10px;
	position: relative;
} */
</style>
