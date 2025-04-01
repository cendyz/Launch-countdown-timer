<template>
	<footer >
		<div class="container">
			<Icon :name="item.link" :alt="`${item.alt} icon`" v-for="(item, index) in linksData" :key="index" />
		</div>
	</footer>
</template>

<script setup lang="ts">
import hills from 'assets/images/pattern-hills.svg'
interface Links {
	link: string
	alt: string
}

const linksData = ref<Links[]>([
	{
		link: 'f7:logo-facebook',
		alt: 'facebook',
	},
	{
		link: 'cib:pinterest',
		alt: 'pinterest',
	},
	{
		link: 'lineicons:instagram-original',
		alt: 'instagram',
	},
])
</script>

<style scoped></style>
