<template>
	<v-content>
		<v-container fluid class="height-center">
			<v-layout align-center class="justify-center">
				<v-flex xs12 sm8 md6>
					<v-card class="elevation-12">
						<v-tabs v-model="tab" fixed-tabs icons-and-text>
							<v-tabs-slider></v-tabs-slider>

							<v-tab href="#tab-1"
								>Login
								<v-icon>mdi-account</v-icon>
							</v-tab>

							<v-tab href="#tab-2"
								>Sign Up
								<v-icon>mdi-account-plus</v-icon>
							</v-tab>
						</v-tabs>

						<v-tabs-items v-model="tab">
							<v-tab-item value="tab-1">
								<v-card>
									<v-card-text>
										<v-form>
											<v-text-field
												id="username_login"
												label="Username"
												name="username_login"
												prepend-icon="mdi-account"
												type="text"
											></v-text-field>
											<v-text-field
												id="password_login"
												label="Password"
												name="password_login"
												prepend-icon="mdi-lock"
												type="password"
											></v-text-field>
										</v-form>
									</v-card-text>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="green" to="/">Login</v-btn>
									</v-card-actions>
								</v-card>
							</v-tab-item>

							<v-tab-item value="tab-2">
								<v-card>
									<v-card-text>
										<v-form>
											<v-text-field
												id="username"
												label="Username"
												name="username"
												prepend-icon="mdi-account"
												type="text"
											></v-text-field>
											<v-text-field
												id="name"
												label="Name"
												name="name"
												prepend-icon="mdi-account-box-outline"
												type="text"
											></v-text-field>
											<v-text-field
												id="email"
												label="Email"
												name="email"
												prepend-icon="mdi-email"
												type="text"
											></v-text-field>
											<v-text-field
												id="password"
												label="Password"
												name="password"
												prepend-icon="mdi-lock"
												type="password"
											></v-text-field>
											<v-text-field
												id="confpassword"
												label="Confirm Password"
												name="confpassword"
												prepend-icon="mdi-lock-outline"
												type="password"
											></v-text-field>
										</v-form>
									</v-card-text>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="green" dark to="/">Sign Up</v-btn>
									</v-card-actions>
								</v-card>
							</v-tab-item>
						</v-tabs-items>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Login',
	data() {
		return {
			tab: null,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}
	},
}
</script>

<style scoped>
.height-center {
	display: flex;
	height: 100vh;
	align-items: center;
}
.justify-center {
	justify-content: center;
}
</style>
