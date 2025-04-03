<template>
	<main class="overflow-x-clip flex flex-col justify-center items-center h-[50rem] text-center px-[3rem]">
		<h1 class="text-neutral-white uppercase text-[2rem] tracking-[.6rem] leading-[1.3] md:text-[2.7rem] lg:text-[2rem]">
			we're launching soon
		</h1>
		<div class="mt-[5rem] flex justify-center gap-x-[1.8rem] w-full">
			<div class="" v-for="(item, index) in timerData" :key="index">
				<div
					class="w-[6.5rem] h-[6.5rem] grid place-items-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-[50%] before:bg-primary-blue before:rounded-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] after:bg-primary-blue after:rounded-lg before:opacity-[10%] after:opacity-20 md:w-[7.5rem] md:h-[7.5rem] lg:w-[13rem] lg:h-[13rem]">
					<p class="text-primary-red text-[3rem] md:text-[4rem] lg:text-[6.5rem]">
						{{ item.time < 10 ? `${zero}${item.time}` : item.time }}
					</p>
				</div>
				<p class="uppercase text-[.7rem] md:text-[.8rem] lg:text-[.9rem] text-primary-blue tracking-[.4rem] mt-[1rem]">
					{{ item.whatTime }}
				</p>
			</div>
		</div>
		<img :src="stars" aria-hidden="true" alt="" class="absolute left-0 top-0 w-full h-full" />
	</main>
</template>

<script setup lang="ts">
import stars from 'assets/images/bg-stars.svg'
interface Timer {
	time: Ref<number>
	whatTime: string
}

let seconds = ref<number>(41)
let minutes = ref<number>(55)
let hours = ref<number>(23)
let days = ref<number>(8)
const zero = 0
const isZero = computed(() => seconds.value + minutes.value + hours.value + days.value === 0)
let intervalId: ReturnType<typeof setInterval> | null = null

const timerData = ref<Timer[]>([
	{
		time: days,
		whatTime: 'days',
	},
	{
		time: hours,
		whatTime: 'hours',
	},
	{
		time: minutes,
		whatTime: 'minutes',
	},
	{
		time: seconds,
		whatTime: 'seconds',
	},
])

const countTime = (): void => {
	if (intervalId) return
	intervalId = setInterval(() => {
		if (seconds.value === 0) {
			if (minutes.value > 0) {
				seconds.value = 59
				minutes.value--
			} else if (hours.value > 0) {
				seconds.value = 59
				minutes.value = 59
				hours.value--
			} else if (days.value > 0) {
				seconds.value = 59
				minutes.value = 59
				hours.value = 23
				days.value--
			}
		} else {
			seconds.value--
		}
	}, 1000)
}

watch(isZero, newValue => {
	if (newValue) {
		clearInterval(intervalId!)
		intervalId = null
	}
})

onMounted(() => {
	countTime()
})
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
