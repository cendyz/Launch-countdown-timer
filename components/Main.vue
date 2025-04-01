<template>
	<main class="overflow-x-clip flex flex-col justify-center items-center h-[50rem] text-center px-[3rem]">
		<h1 class="text-neutral-white uppercase text-[2rem] tracking-[.6rem] leading-[1.3]">we're launching soon</h1>
		<div class="mt-[5rem] flex justify-between w-full">
			<div class="" v-for="(item, index) in timerData" :key="index">
				<div
					class="px-[1.5rem] py-[1rem] relative before:absolute before:top-0 before:left-0 before:w-full before:h-[50%] before:bg-primary-blue before:rounded-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] after:bg-primary-blue after:rounded-lg before:opacity-[10%] after:opacity-20">
					<p class="text-primary-red text-[3rem]">{{ item.time }}</p>
				</div>
				<p class="uppercase text-[.7rem] text-primary-blue tracking-[.4rem] mt-[1rem]">{{ item.whatTime }}</p>
			</div>
		</div>
		<img :src="stars" aria-hidden="true" alt="" class="absolute left-0 top-0 w-full h-full" />
	</main>
</template>

<script setup lang="ts">
import stars from 'assets/images/bg-stars.svg'
interface Timer {
	time: string
	whatTime: string
}

const timerData = ref<Timer[]>([
	{
		time: '08',
		whatTime: 'days',
	},
	{
		time: '23',
		whatTime: 'hours',
	},
	{
		time: '55',
		whatTime: 'minutes',
	},
	{
		time: '41',
		whatTime: 'seconds',
	},
])
</script>

<style scoped lang="scss">
.befAft {
	position: relative;
	&::before,
	&::after {
		position: absolute;
		content: '';
		left: 0;
	}

	&::before {
		top: 0;
		width: full;
		height: 50%;
		background: red;
		z-index: 100;
	}
}
</style>
