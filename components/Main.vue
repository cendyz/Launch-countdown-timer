<template>
	<main class="overflow-x-clip">
		<h1>we're launching soon</h1>
		<div>
			<div>
				<div class="bg-rose-400">
					<p>23</p>
				</div>
                <p>days</p>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
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

<style scoped></style>
