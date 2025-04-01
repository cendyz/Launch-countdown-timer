<template>
	<footer class="pt-[5rem] fixed bottom-0 left-0 w-full text-primary-blue overflow-visible">
		<div
			class="flex justify-center items-center gap-x-[2.3rem] text-[2.7rem] pb-[4rem] mt-[4rem] md:text-[3rem] lg:text-[3.3rem]">
			<Icon
				:name="item.link"
				:alt="`${item.alt} icon`"
				v-for="(item, index) in linksData"
				:key="index"
				class="z-[100]" />
		</div>
		<img :src="hills" alt="" class="absolute bottom-0 w-full h-[17rem]" />
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
