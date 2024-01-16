<script setup>
import { useRoute, RouterView, useRouter } from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const router = useRouter();

const carId = parseInt(route.params.id);

const car = cars.find((c) => c.id === carId);

const showContact = () => {
  if (carId === 4) return;
  router.push(`/cars/${carId}/contact`);
};
</script>

<template>
  <div v-if="car">
    <h1>Car View</h1>
    <p>car id = {{ car.id }}</p>
    <p>car id = {{ car.name }}</p>
    <p>car id = {{ car.price }}</p>
    <p>car id = {{ car.year }}</p>

    <button @click="showContact">Click for contact</button>

    <RouterView />
  </div>

  <div v-else>
    <h1>Car Not Found</h1>
  </div>
</template>
