<script setup>
import { ref } from "vue";

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);
const errorMessage = ref("");

const addNote = () => {
  errorMessage.value = "";
  if (newNote.value.length <= 9) {
    errorMessage.value = "Minimal 10 karakter";
  }
  if (newNote.value.trim.length > 9) {
    showModal.value = false;
    notes.value.push({
      id: Math.floor(Math.random() * 100000000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 75%)`,
    });
    newNote.value = "";
  }
};
</script>

<template>
  <main>
    <section class="overlay" v-show="showModal">
      <div class="modal">
        <textarea name="note" id="note" v-model="newNote"></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote()">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </section>

    <section class="container">
      <header>
        <h1>Notes</h1>
        <button class="button-header" @click="showModal = true">+</button>
      </header>

      <section class="card-container">
        <div
          v-for="note in notes"
          :key="note.id"
          class="card"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{ note.date.toLocaleDateString("ID-id") }}</p>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 1080px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

h1 {
  font-weight: bold;
  font-size: 75px;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 25px;
  margin-bottom: 25px;
}
.date {
  font-size: 13px;
  font-weight: bold;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  position: relative;
}

.modal p {
  color: red;
}

.modal textarea {
  width: 100%;
  height: 100px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 10px;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 10px;
}

.modal .close {
  background-color: red;
}

@media only screen and (max-width: 600px) {
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
