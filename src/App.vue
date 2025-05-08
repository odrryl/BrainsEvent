<template>
	<Header />
	<main>
	<SideMenu />

	
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
	</main>
</template>

<script setup>
import Header from "./components/Header.vue";
import SideMenu from "./components/SideMenu.vue";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
