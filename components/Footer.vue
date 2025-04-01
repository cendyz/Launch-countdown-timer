<template>
	<footer class="relative pt-[5rem] pb-[15rem] text-primary-blue">
		<div
			class="bg-cover bg-[87.3%] w-full absolute h-[13rem]"
			:style="{ backgroundImage: `url(&quot;${hills}&quot;)` }"></div>
		<div class="flex justify-center items-center gap-x-[2.3rem] text-[2.7rem] h-[15rem] bg-[#30243c] mt-[4rem]">
			<Icon
				:name="item.link"
				:alt="`${item.alt} icon`"
				v-for="(item, index) in linksData"
				:key="index"
				class="z-[100]" />
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
