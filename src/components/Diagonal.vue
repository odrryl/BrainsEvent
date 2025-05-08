<template>
	<section class="running-message diagonal-container" ref="diagonal">
		<h3 class="running-span running-span1">
			FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
			FULL-CYCLE EVENT AGENCY
		</h3>
		<h3 class="running-span running-span2">
			FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
			FULL-CYCLE EVENT AGENCY
		</h3>
	</section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const diagonal = ref(null);

const updateDiagonal = () => {
	const container = diagonal.value;
	const w = window.innerWidth;
	const h = window.innerHeight;
	const angle = Math.atan(h / w) * (180 / Math.PI);
	container.style.transform = `rotate(-${angle}deg)`;
	container.style.width = `${Math.hypot(w, h)}px`;
	container.style.left = `-${(Math.hypot(w, h) - w) / 2}px`;
};

onMounted(() => {
	updateDiagonal();
	window.addEventListener("resize", updateDiagonal);
});

onUnmounted(() => window.removeEventListener("resize", updateDiagonal));
</script>

<style lang="scss">
.running-message {
	position: absolute;
	top: 50%;
	left: 0;
	min-width: calc(hypot(100vw, 100vh));
	min-height: 1px;
	-webkit-transform: translateY(50%);
	transform: translateY(50%);
}

.running-span {
	opacity: 0.1;
	width: calc(hypot(100vmax, 100vmin) * 4);
	text-shadow: none;
	color: transparent;
	-webkit-text-stroke: 2px rgba(0, 0, 0, 0.5);
	font-style: italic;
	font-weight: 700;
	font-size: 42rem;
	line-height: 110%;
	text-transform: uppercase;
	text-align: center;
}

@keyframes running-span1 {
	from {
		-webkit-transform: translateX(-75%) translateY(-8px) rotate(180deg);
		transform: translateX(-75%) translateY(-8px) rotate(180deg);
	}
	to {
		-webkit-transform: translateX(0) translateY(-8px) rotate(180deg);
		transform: translateX(0) translateY(-8px) rotate(180deg);
	}
}

@-webkit-keyframes running-span1 {
	from {
		-webkit-transform: translateX(-75%) translateY(-8px) rotate(180deg);
		transform: translateX(-75%) translateY(-8px) rotate(180deg);
	}
	to {
		-webkit-transform: translateX(0) translateY(-8px) rotate(180deg);
		transform: translateX(0) translateY(-8px) rotate(180deg);
	}
}

@keyframes running-span2 {
	from {
		-webkit-transform: translateX(75%) translateY(8px) rotate(0);
		transform: translateX(75%) translateY(8px) rotate(0);
	}
	to {
		-webkit-transform: translateX(0) translateY(8px) rotate(0);
		transform: translateX(0) translateY(8px) rotate(0);
	}
}

@-webkit-keyframes running-span2 {
	from {
		-webkit-transform: translateX(75%) translateY(8px) rotate(0);
		transform: translateX(75%) translateY(8px) rotate(0);
	}
	to {
		-webkit-transform: translateX(0) translateY(8px) rotate(0);
		transform: translateX(0) translateY(8px) rotate(0);
	}
}

.running-span1 {
	position: absolute;
	bottom: 0;
	left: 0;
	-webkit-transform: translate(0, -8px) rotate(180deg);
	transform: translate(0, -8px) rotate(180deg);
	-webkit-animation: running-span1 25s -2s linear infinite;
	-moz-animation: running-span1 25s -2s linear infinite;
	-o-animation: running-span1 25s -2s linear infinite;
	animation: running-span1 25s -2s linear infinite;
}

.running-span2 {
	position: absolute;
	top: 0;
	right: 0;
	-webkit-transform: translat(0, 8px) rotate(0);
	transform: translate(0, 8px) rotate(0);
	-webkit-animation: running-span2 25s -2s linear infinite;
	-moz-animation: running-span2 25s -2s linear infinite;
	-o-animation: running-span2 25s -2s linear infinite;
	animation: running-span2 25s -2s linear infinite;
}
</style>
