<script setup>
import Card from "../components/Card.vue";
import q from "../data/data.json";
import { ref, watch } from "vue";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  if (search != "") {
    quizes.value = q.filter((quiz) =>
      quiz.name.toLowerCase().includes(search.value.toLowerCase())
    );
  }
});
</script>

<template>
  <header>
    <h1>Quizes</h1>
    <input v-model.trim="search" type="text" placeholder="Search..." />
  </header>

  <section class="options-container">
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
  </section>
</template>

<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
}
</style>
