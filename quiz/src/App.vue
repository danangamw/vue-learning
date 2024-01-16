<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <section class="container">
    <RouterView />
  </section>
</template>

<style scoped>
.container {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
