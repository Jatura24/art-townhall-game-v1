<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4 flex justify-between items-start">
          <div class="flex flex-col items-start">
            <div class="bg-blue-200 rounded-full px-4 py-2 flex items-center">
              <span class="text-xl mr-2">🏆</span>
              <span class="text-xl font-bold text-gray-800">{{ points }} point</span>
            </div>
            <span class="text-gray-600 mt-1">{{ name }}</span>
          </div>
          <div class="text-4xl self-start">{{ emoji }}</div>
        </div>
        <div class="flex-grow flex flex-col items-center justify-center">
          <div class="bg-white p-6 rounded shadow-md text-center mb-8">
            <h2 class="text-2xl text-pink-500 mb-2">Current Ranking</h2>
            <div class="text-4xl font-bold">{{ ranking }}</div>
          </div>
          <h1 class="text-4xl font-bold mb-4">Challenge</h1>
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="challenge in challenges" :key="challenge.id" class="bg-white p-4 rounded-lg shadow-md w-40 text-center cursor-pointer" @click="goToChallenge(challenge.title)">
              <div class="text-4xl mb-2">{{ challenge.icon }}</div>
              <h3 class="font-bold text-gray-700">{{ challenge.title }}</h3>
              <p class="text-gray-500">{{ challenge.gameCount }} Game</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      props: {
        name: {
          type: String,
          required: true
        },
        emoji: {
          type: String,
          required: true
        },
        points: {
          type: Number,
          required: true
        },
        ranking: {
          type: Number,
          required: true
        }
      },
      data() {
        return {
          challenges: [
            {
              id: 1,
              icon: '📚',
              title: 'Quizzes',
              gameCount: 120
            },
            {
              id: 2,
              icon: '💰',
              title: 'Monopoly',
              gameCount: 60
            },
            {
              id: 3,
              icon: '💡',
              title: 'Money Helper',
              gameCount: 90
            },
            {
              id: 4,
              icon: '🔄',
              title: 'Swap',
              gameCount: 75
            }
          ]
        };
      },
      methods: {
        goToChallenge(challengeTitle) {
          if (challengeTitle === 'Quizzes') {
            this.$router.push('/quizzes');
          } else if (challengeTitle === 'Money Helper') {
            this.$router.push('/money-helper');
          } else if (challengeTitle === 'Swap') {
            this.$router.push('/swap');
          }
        }
      }
    };
    </script>
