<script setup>
import cars from "../data/cars.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <h1>Home View</h1>
    <section class="cars">
      <RouterLink v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`">
        {{ car.name }}
      </RouterLink>
    </section>
  </section>
</template>

<style scoped>
.cars {
  display: flex;
}

.cars a {
  text-decoration: none;
  color: black;
  width: 100%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  margin: 10px;
  text-align: center;
}
</style>
