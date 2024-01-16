<script setup>
import { ref } from "vue";

let count = ref(0);

const add = () => {
  count.value += 1;
};

const subtract = () => {
  count.value -= 1;
};

/* export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
    subtract() {
      this.count -= 1;
    },
  },
}; */
</script>

<template>
  <main>
    <section>
      <h4>Current count is ...</h4>
      <h1>{{ count }}</h1>
      <button @click="subtract()">-</button>
      <button @click="add()">+</button>
    </section>
  </main>
</template>

<style scoped>
section {
  text-align: center;
}
</style>
