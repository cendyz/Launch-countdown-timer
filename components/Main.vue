<template>
	<main class="overflow-x-clip flex flex-col justify-center items-center h-[50rem] text-center px-[3rem]">
		<h1 class="text-neutral-white uppercase text-[2rem] tracking-[.6rem] leading-[1.3] md:text-[2.7rem] lg:text-[2rem]">
			we're launching soon
		</h1>
		<div class="mt-[5rem] flex justify-center gap-x-[1.8rem] w-full">
			<div v-for="(item, index) in timerData" :key="index">
				<div
					class="w-[6.5rem] h-[6.5rem] inline-flex flex-col place-items-center gap-y-[.15rem] md:w-[7.5rem] md:h-[7.5rem] lg:w-[13rem] lg:h-[13rem]">
					<div
						class="bg-[#2d2c45] leading-[2.1] md:leading-[1.9] lg:leading-[1.6] before:top-0 before:bg-[#2d2c45] checkA"
						:class="topBottomCardStyles"
						:data-time="`${item.time < 10 ? `${zero}${item.time}` : item.time}`"
						:key="item.time">
						<p :class="numColorStyles">
							{{ item.time < 10 ? `${zero}${item.time}` : item.time }}
						</p>
					</div>
					<div
						class="bg-[#35354e] leading-[0] xl:leading-[0] before:bottom-0 before:bg-[#35354e] checkB"
						:class="topBottomCardStyles"
						:key="item.time"
						:data-time="`${item.time < 10 ? `${zero}${item.time}` : item.time}`">
						<p :class="numColorStyles">
							{{ item.time < 10 ? `${zero}${item.time}` : item.time }}
						</p>
					</div>
				</div>
				<p class="uppercase text-[.7rem] md:text-[.8rem] lg:text-[.9rem] text-primary-blue tracking-[.4rem] mt-[1rem]">
					{{ item.whatTime }}
				</p>
			</div>
		</div>
		<img :src="stars" aria-hidden="true" alt="" class="absolute left-0 top-0 w-full h-full z-[-1]" />
	</main>
</template>

<script setup lang="ts">
import stars from 'assets/images/bg-stars.svg'
interface Timer {
	time: Ref<number>
	whatTime: string
}

const topBottomCardStyles =
	'rounded-xl w-full h-full overflow-hidden relative before:w-full before:h-full before:absolute before:left-0 before:text-primary-red before:text-[3rem] before:md:text-[4rem] before:lg:text-[8rem] before:content-[attr(data-time)]  before:rounded-xl before:border-transparent perspective-distant'
const numColorStyles = 'text-primary-red text-[3rem] md:text-[4rem] lg:text-[8rem] relative'
let seconds = ref<number>(41)
let minutes = ref<number>(5)
let hours = ref<number>(23)
let days = ref<number>(8)
const zero = 0
const isZero = computed(() => seconds.value + minutes.value + hours.value + days.value === 0)
let intervalId: ReturnType<typeof setInterval> | null = null

const handleCount = (): void => {
	if (intervalId) return
	if (isZero) {
		clearInterval(intervalId!)
		intervalId = null
	}
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

onMounted(() => {
	handleCount()
})

watch(isZero, newValue => {
	if (newValue) {
		handleCount()
	}
})
</script>

<style scoped lang="scss">
.checkA {
	&::before {
		transform-origin: bottom;
		animation: topFlip 0.5s ease-in;
	}
}

.checkB {
	&::before {
		transform-origin: top;
		transform: rotateX(-90deg);
		animation: botFlip 0.5s 0.5s ease-out;
	}
}

@keyframes topFlip {
	0% {
		scale: 1;
	}

	80% {
		background-color: #35354e;
	}

	100% {
		scale: 1.1;
		transform: rotateX(-90deg);
		border-color: #20202f;
		background-color: #2d2c45;
	}
}

@keyframes botFlip {
	0% {
		scale: 1.1;
		background-color: #2d2c45;
	}

	100% {
		transform: rotateX(0deg);
		border-color: #20202f;
		scale: 1;
		background-color: #35354e;
	}
}
</style>
