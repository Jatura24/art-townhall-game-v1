<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4 flex-grow flex items-center justify-center">
          <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div class="text-center mb-6">
              <span class="text-5xl">💪</span>
              <h2 class="text-3xl font-bold mt-2">Quiz Complete!</h2>
              <p class="text-gray-600">Keep trying! Practice makes perfect!</p>
            </div>
            <div class="mb-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-700">Correct Answers</span>
                <span class="text-gray-700">{{ quizStore.correctAnswers }}/{{ quizStore.totalQuestions }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div class="bg-green-500 h-2.5 rounded-full" :style="{ width: quizStore.accuracy + '%' }"></div>
              </div>
            </div>
            <div class="mb-4 flex justify-between items-center">
              <span class="text-gray-700">Accuracy</span>
              <span class="text-gray-700">{{ quizStore.accuracy }}%</span>
            </div>
            <div class="mb-6 flex justify-between items-center">
              <span class="text-gray-700">Tokens Earned</span>
              <span class="text-gray-700">🪙 {{ tokensEarned }}</span>
            </div>
            <button @click="backToHome" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Back to Home</button>
          </div>
        </div>
      </div>
    </template>

    <script>
    import { useQuizStore } from '../store/quiz';
    import { useUserStore } from '../store/user';
    export default {
      setup() {
        const quizStore = useQuizStore();
        const userStore = useUserStore();
        return { quizStore, userStore };
      },
      computed: {
        tokensEarned() {
          return this.quizStore.correctAnswers * 10;
        }
      },
      methods: {
        backToHome() {
          this.quizStore.resetState();
          this.$router.push('/home');
        }
      }
    };
    </script>
