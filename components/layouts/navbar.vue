<template>
	<div>
		<v-toolbar app class="white px-3" clipped-right dense fixed light>
			<v-btn class="hidden-md-and-down" color="primary" exact flat :key="i" nuxt router :to="link.to" v-for="(link, i) in links">
				{{ link.name }}
			</v-btn>
			<v-spacer></v-spacer>
			<nuxt-link class="mt-1" to="/">
				<img alt="Sarah's Cookbook Logo" height="30" src="/images/logo.png" width="30">
			</nuxt-link>
			<v-toolbar-title>Sarah's Cookbook</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn class="hidden-md-and-down" color="primary" exact flat :key="link.name" nuxt router :to="link.to" v-for="link in linksTwo">
				{{ link.name }}
			</v-btn>
			<v-toolbar-side-icon class="hidden-lg-and-up" @click.native.stop="drawer = !drawer" />
		</v-toolbar>
		<v-navigation-drawer app class="hidden-lg-and-up" clipped fixed right v-model="drawer">
			<v-list>
				<v-list-tile exact :key="link.name" nuxt router :to="link.to" v-for="link in allLinks">
					<v-list-tile-title>{{ link.name }}</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	computed: {
		allLinks () {
			return this.links.concat(this.linksTwo)
		}
	},
	data () {
		return {
			drawer: false,
			links: [
				{ name: 'Home', to: '/' },
				{ name: 'About Us', to: '/about' },
			],
			linksTwo: [
				{ name: 'Login', to: '/login' },
			],
		}
	}
}
</script>
