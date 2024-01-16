<script setup>
import { useRoute } from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const car = cars.find((c) => c.id == route.params.id);
</script>

<template>
  <section>
    <h1>Contact Info</h1>
    <p>{{ car.contact.dealer }}</p>
    <p>{{ car.contact.number }}</p>
  </section>
</template>
