<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4 flex justify-between items-center">
          <div class="flex items-center">
            <div class="rounded-full border-2 border-blue-500 w-14 h-14 flex items-center justify-center mr-4">
              <span class="text-3xl">{{ userStore.userEmoji }}</span>
            </div>
            <div class="flex flex-col items-start">
              <span class="text-gray-600 text-sm">Good Afternoon!</span>
              <span class="text-xl font-bold text-gray-800">{{ userStore.userName }}</span>
            </div>
          </div>
          <div class="bg-blue-500 text-white rounded-full px-4 py-2 flex items-center">
            <span class="text-xl mr-2">⭐</span>
            <span class="text-xl font-bold">{{ userStore.currentPoints }}</span>
          </div>
        </div>
        <div class="flex-grow flex flex-col items-center justify-center">
          <div class="relative bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-3xl shadow-md text-center mb-8 w-full max-w-sm">
            <div class="bg-white text-blue-500 rounded-full px-2 py-1 absolute top-2 left-2 text-xs">
              #{{ ranking }}
            </div>
            <h2 class="text-white text-sm mb-1">Total Win</h2>
            <div class="text-white text-3xl font-bold">100 Rounds</div>
          </div>
          <h1 class="text-4xl font-bold mb-4">Challenge</h1>
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="challenge in challenges" :key="challenge.id" class="bg-white p-4 rounded-lg shadow-md w-40 text-center cursor-pointer" @click="goToChallenge(challenge.title)">
              <div class="text-4xl mb-2">{{ challenge.icon }}</div>
              <h3 class="font-bold text-gray-700">{{ challenge.title }}</h3>
              <p class="text-gray-500">{{ challenge.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import { useUserStore } from '../store/user';
    export default {
      props: {
        ranking: {
          type: Number,
          required: true
        }
      },
      setup() {
        const userStore = useUserStore();
        return { userStore };
      },
      data() {
        return {
          challenges: [
            {
              id: 1,
              icon: '📚',
              title: 'Quizzes',
              description: 'Get free points'
            },
            {
              id: 2,
              icon: '💰',
              title: 'Monopoly',
              description: 'Play to Earn'
            },
            {
              id: 3,
              icon: '💡',
              title: 'Money Helper',
              description: 'Check your Credits'
            },
            {
              id: 4,
              icon: '🔄',
              title: 'Swap',
              description: 'Point to Snack'
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
