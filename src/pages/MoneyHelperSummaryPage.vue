<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4 flex-grow flex items-center justify-center">
          <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div class="text-center mb-6">
              <span class="text-5xl">💡</span>
              <h2 class="text-3xl font-bold mt-2">Money Helper Complete!</h2>
            </div>
            <div class="mb-6 text-center">
              <h3 class="text-2xl font-semibold mb-2">Ranking</h3>
              <div class="text-4xl font-bold">{{ ranking }}</div>
            </div>
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-2">Investment Advice</h3>
              <p class="text-gray-700">{{ advice }}</p>
            </div>
            <button @click="backToHome" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Back to Home</button>
          </div>
        </div>
      </div>
    </template>

    <script>
    import { useMainStore } from '../store';
    export default {
      setup() {
        const mainStore = useMainStore();
        return {
          ranking: mainStore.ranking,
          advice: mainStore.advice
        };
      },
      methods: {
        backToHome() {
          const mainStore = useMainStore();
          mainStore.resetState();
          this.$router.push('/home');
        }
      }
    };
    </script>
