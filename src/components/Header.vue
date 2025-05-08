<script setup>
import Logo from "./Logo.vue";
import Language from "./Language.vue";

</script>

<template>
	<header class="header">
		<div class="container header__container">
			<Language />
			<Logo />
			<div></div>
		</div>
	</header>
</template>

<style scoped>

.header__container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 24rem;
}

 
</style>
