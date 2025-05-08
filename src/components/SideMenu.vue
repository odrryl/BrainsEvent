<template>
	<section class="side-menu" v-if="!isMobile">
		<a
			class="side-link left"
			v-if="route.path !== '/where'"
			@click="router.push('/where')"
		>
			where?
		</a>
		<a class="side-link left" v-else @click="router.push('/')"> home </a>

		<a
			class="side-link right"
			v-if="route.path !== '/what'"
			@click="router.push('/what')"
		>
			what?
		</a>
		<a class="side-link right" v-else @click="router.push('/')"> home </a>

		<a
			class="side-link bottom"
			v-if="route.path !== '/who'"
			@click="router.push('/who')"
		>
			who?
		</a>
		<a class="side-link bottom" v-else @click="router.push('/')"> home </a>
	</section>

	<section class="mobile-menu" v-if="isMobile">
		<button class="burger" @click="toggleMenu">
			<span></span>
			<span></span>
		</button>

		<div class="mobile-drawer" :class="{ open: menuOpen }">
			<a @click="goTo(route.path === '/where' ? '/' : '/where')">
				{{ route.path === "/where" ? "home" : "where?" }}
			</a>
			<a @click="goTo(route.path === '/what' ? '/' : '/what')">
				{{ route.path === "/what" ? "home" : "what?" }}
			</a>
			<a @click="goTo(route.path === '/who' ? '/' : '/who')">
				{{ route.path === "/who" ? "home" : "who?" }}
			</a>
		</div>
	</section>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const route = useRoute();

const isMobile = ref(false);
const menuOpen = ref(false);

const checkMobile = () => {
	isMobile.value = window.innerWidth <= 768;
};

const toggleMenu = () => {
	menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
	menuOpen.value = false;
};

onMounted(() => {
	checkMobile();
	window.addEventListener("resize", checkMobile);
});

const goTo = async (path) => {
	if (route.path !== path) {
		await router.push(path);
	}
	closeMenu();
};
</script>

<style scoped>
.side-menu {
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 3;
}

.side-link {
	position: absolute;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	font-weight: bold;
	color: var(--main);
	font-weight: 600;
	font-size: 16rem;
	line-height: 140%;
	text-decoration: none;
	cursor: pointer;
	transition: color 0.3s ease;
}

.side-link::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	height: 0;
	width: 2px;
	background: var(--white);
	transition: height 0.4s ease;
	transform-origin: left;
}

.side-link:hover::after {
	height: 100%;
}

.side-link:hover {
	color: var(--white);
}

.left {
	left: 19px;
	top: 42%;
	transform: translateY(-50%) rotate(180deg);
}

.right {
	right: 19px;
	top: 42%;
	transform: translateY(-50%) rotate(360deg);
}

.bottom {
	bottom: 69px;
	left: 50%;
	transform: translateX(-50%) rotate(-90deg);
}

.mobile-menu {
	position: fixed;
	top: 20px;
	right: 20px;
	z-index: 999;
}

.burger {
	display: flex;
	flex-direction: column;
	gap: 6px;
	background: transparent;
	border: none;
	cursor: pointer;
}

.burger span {
	width: 30px;
	height: 3px;
	background: var(--black);
	border-radius: 2px;
	z-index: 1000;
}

.mobile-drawer {
	position: fixed;
	top: 0;
	right: -100%;
	width: 100%;
	height: 100vh;
	background: var(--bg-color);
	display: flex;
	flex-direction: column;
	padding: 40px;
	transition: right 0.3s ease;
	box-shadow: var(--box-shadow);

	display: flex;
	flex-direction: column;
	gap: 30rem;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.mobile-drawer.open {
	right: 0;
}

.mobile-drawer a {
	position: relative;
	font-weight: bold;
	text-decoration: none;
	color: var(--black);
	cursor: pointer;
	transition: color 0.3s ease;
}

.mobile-drawer a::after {
	content: "";
	position: absolute;
	left: 0;
	bottom: -4px;
	width: 100%;
	height: 2px;
	background-color: var(--white);
	transform: scaleX(0);
	transform-origin: left;
	transition: transform 0.3s ease;
}

.mobile-drawer a:hover::after {
	transform: scaleX(1);
}

.mobile-drawer a:hover {
	color: var(--white);
}
</style>
