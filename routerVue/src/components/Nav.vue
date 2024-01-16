<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
}

nav a {
  text-decoration: none;
}

.active {
  font-weight: 900;
  color: blueviolet;
}
</style>
