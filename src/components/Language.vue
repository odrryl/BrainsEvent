<template>
	<div
		class="outer-circle"
		@mouseenter="show = true"
		@mouseleave="show = false"
	>
		<div class="circle">
			<img src="/public/assets/language.png" alt="Emoji" class="emoji" />
		</div>
		<transition name="fade">
			<div v-if="show" class="language-overlay">
				<span class="lang lang1">ENG</span>
				<span class="lang lang2">UA</span>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
</script>

<style scoped>
.outer-circle {
	position: relative;
	display: inline-block;
	z-index: 2;
}

.circle {
	width: 34px;
	height: 34px;
	border: 1px solid var(--grey);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
}

.emoji {
	width: 100%;
	max-width: 14rem;
}



.lang {
	color: var(--main);
	font-weight: 600;
	font-size: 12rem;
	line-height: 140%;
	opacity: 0;
	animation-fill-mode: forwards;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
}

.lang:hover {
	color: var(--yellow);
}

.lang1,
.lang2 {
	animation: fadeIn 0.3s ease-in forwards;
}

.lang2 {
	animation-name: fadeIn;
    animation-delay: 0.2s;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateX(10px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
