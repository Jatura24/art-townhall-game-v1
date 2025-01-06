<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4 flex-grow">
          <h1 class="text-3xl font-bold mb-4">History</h1>
          <div v-if="userStore.pointsHistory.length === 0" class="text-center text-gray-500">
            No history yet.
          </div>
          <div v-else class="space-y-4">
            <div v-for="(item, index) in userStore.pointsHistory" :key="index" class="bg-white p-4 rounded-lg shadow-md">
              <div class="flex justify-between items-center">
                <span class="font-semibold">{{ item.description }}</span>
                <span :class="{'text-green-500': item.points > 0, 'text-red-500': item.points < 0}">{{ item.points > 0 ? '+' : '' }}{{ item.points }}</span>
              </div>
              <div class="text-gray-500 text-sm">{{ item.timestamp }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import { useUserStore } from '../store/user';

    export default {
      setup() {
        const userStore = useUserStore();
        return { userStore };
      }
    };
    </script>
