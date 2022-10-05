<template>
	<v-row justify="center" class="pt-9">
		<v-col cols="12" md="6">
			<v-card>
				<base-material-card>
					<v-form>
						<v-container class="py-0">
							<v-row>
								<v-col cols="12" md="4">
									<v-text-field label="Company" disabled />
								</v-col>

								<v-col cols="12" md="4">
									<v-text-field class="purple-input" label="User Name" />
								</v-col>

								<v-col cols="12" md="4">
									<v-text-field label="Email Address" class="purple-input" />
								</v-col>

								<v-col cols="12" md="6">
									<v-text-field label="First Name" class="purple-input" />
								</v-col>

								<v-col cols="12" md="6">
									<v-text-field label="Last Name" class="purple-input" />
								</v-col>

								<v-col cols="12">
									<v-text-field label="Adress" class="purple-input" />
								</v-col>

								<v-col cols="12" md="4">
									<v-text-field label="City" class="purple-input" />
								</v-col>

								<v-col cols="12" md="4">
									<v-text-field label="Country" class="purple-input" />
								</v-col>

								<v-col cols="12" md="4">
									<v-text-field class="purple-input" label="Postal Code" type="number" />
								</v-col>

								<v-col cols="12">
									<v-textarea
										class="purple-input"
										label="About Me"
										value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nam ab unde in quam accusamus laudantium ad aliquam officiis? Molestias pariatur sit dolorem delectus vitae est quas cum voluptatum laudantium!"
									/>
								</v-col>

								<v-col cols="12" class="text-right">
									<v-btn color="success" class="mr-0 rounded-xl"> Update Profile </v-btn>
								</v-col>
							</v-row>
						</v-container>
					</v-form>
				</base-material-card>
			</v-card>
		</v-col>

		<v-col cols="12" md="4">
			<v-card>
				<base-material-card class="v-card-profile">

					<v-sheet color="grey lighten-4" class="pa-4">
						<div class="text-center">
							<v-avatar class="mb-4" size="150"
								><v-img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
							/></v-avatar>
						</div>
					</v-sheet>

					<v-card-text class="text-center">
						<h4 class="display-2 font-weight-light mb-3 black--text">{{ login }}</h4>

						<p class="font-weight-light grey--text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, mollitia tenetur! Atque enim
							totam unde repudiandae molestias.
						</p>
					</v-card-text>
				</base-material-card>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
	import store from './../store'
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Profile',
	computed: {
		login() {
			return store.state.login
		},
	},
}
</script>

<style scoped></style>