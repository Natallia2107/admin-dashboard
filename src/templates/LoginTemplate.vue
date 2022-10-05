<template>
	<v-app id="inspire">
		<v-main>
			<v-container class="py-8 px-6" fluid>
				<router-view> </router-view>
				<v-content>
					<v-container fluid fill-height>
						<v-layout align-center justify-center>
							<v-flex xs12 sm8 md4>
								<v-card class="elevation-12">
									<v-toolbar dark color="green">
										<v-toolbar-title>Login form</v-toolbar-title>
									</v-toolbar>
									<v-card-text>
										<v-form>
											<v-icon>mdi-account</v-icon>
											<v-text-field name="login" label="Login" type="text"> </v-text-field>
											<v-icon>mdi-lock</v-icon>
											<v-text-field id="password" name="password" label="Password" type="password"></v-text-field>
										</v-form>
									</v-card-text>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn color="green white--text" to="/">Login</v-btn>
									</v-card-actions>
								</v-card>
							</v-flex>
						</v-layout>
					</v-container>
				</v-content>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	props: {
		source: String,
	},
}
</script>
