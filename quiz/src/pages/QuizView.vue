<script setup>
import { computed, ref, watch } from "vue";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import { useRoute } from "vue-router";
import quizes from "../data/data.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const currentQuestionIndex = ref(0);
const quiz = quizes.find((q) => q.id === quizId);
const numberOfCorrectAnswer = ref(0);
const showResult = ref(false);

// const questionStatus = ref(
//   `${currentQuestionIndex.value}/${quiz.questions.length}`
// );

// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`;
//   }
// );
const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswer.value++;
  }

  if (quiz.questions.length === currentQuestionIndex.value + 1) {
    showResult.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />

  <section>
    <Question
      v-if="!showResult"
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"
    />
    <Result
      v-else
      :quizQuestionLength="quiz.questions.length"
      :numberOfCorrectAnswer="numberOfCorrectAnswer"
    />
  </section>
</template>
