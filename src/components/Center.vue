<template>
	<section class="hero">
		<div class="circle-container">
			<svg
				width="730"
				height="730"
				viewBox="0 0 730 730"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="blurred-circle"
			>
				<g filter="url(#filter0_f_0_40)">
					<circle cx="365" cy="365" r="289" fill="#FFCB46" />
				</g>
				<defs>
					<filter
						id="filter0_f_0_40"
						x="0"
						y="0"
						width="730"
						height="730"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="38"
							result="effect1_foregroundBlur_0_40"
						/>
					</filter>
				</defs>
			</svg>
		</div>

		<h1 class="hero-title" ref="floatingTitle">FULL-CYCLE<br />EVENT AGENCY</h1>
	</section>

	<section class="showreel">
		<Showreel />
	</section>
</template>

<style scoped>
.hero {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 1;
	
}

.circle-container {
	position: relative;
	width: clamp(294px, 60vw, 578px);
	height: clamp(294px, 60vw, 578px);
}



.blurred-circle {
	position: relative;
	width: clamp(294px, 60vw, 578px);
	height: clamp(294px, 60vw, 578px);
}



#floating-title {
	transition: transform 0.1s ease-out;
	will-change: transform;
}

.showreel-position:hover .showreel-item,
.showreel-item:hover {
	animation: spin-counter 5s linear infinite;
}

@keyframes spin-counter {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(-360deg);
	}
}
</style>

<script setup>
import { onMounted, ref } from "vue";
import Showreel from "./Showreel.vue";

const floatingTitle = ref(null);

onMounted(() => {
	document.addEventListener("mousemove", (e) => {
		const x = (e.clientX / window.innerWidth - 0.5) * 20;
		const y = (e.clientY / window.innerHeight - 0.5) * 20;
		if (floatingTitle.value) {
			floatingTitle.value.style.transform = `translate(${x}px, ${y}px)`;
		}
	});
});
</script>
