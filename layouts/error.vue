<template>
	<v-container fluid fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md6 lg3>
				<v-card class="pt-3">
					<v-img aspect-ratio="1" contain height="75" src="/images/logo.png"></v-img>
					<v-card-text>
						<div class="text-xs-center">
							<h1 class="headline mr-1">{{ error.statusCode }}</h1>
							<p>{{ error.message }}</p>
						</div>
					</v-card-text>
					<!-- <v-card-actions v-if="!$auth.user">
						<v-btn flat color="primary" nuxt router to="/">Back Home</v-btn>
						<v-spacer></v-spacer>
						<v-btn flat color="accent" nuxt router to="/contact_us">
							Contact Us
						</v-btn>
					</v-card-actions> -->
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	head () {
		return {
			title: 'Error'
		}
	},
	props: ['error']
}
</script>
