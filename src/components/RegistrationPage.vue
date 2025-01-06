<template>
      <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h1 class="text-2xl font-bold mb-4 text-center">Register</h1>
          <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" v-model="name" placeholder="Enter your name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div class="mb-4">
            <label for="emoji" class="block text-gray-700 text-sm font-bold mb-2">Select Emoji:</label>
            <select id="emoji" v-model="selectedEmoji" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option v-for="emoji in emojis" :key="emoji" :value="emoji">{{ emoji }}</option>
            </select>
          </div>
          <button @click="register" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Register</button>
        </div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          name: '',
          selectedEmoji: '😀',
          emojis: ['😀', '😎', '🚀', '🌟', '🎉']
        };
      },
      methods: {
        register() {
          if (this.name.trim() !== '') {
            this.$router.push({
              name: 'Home',
              params: {
                name: this.name,
                emoji: this.selectedEmoji,
                points: 560,
                ranking: 12
              }
            });
          } else {
            alert('Please enter your name.');
          }
        }
      }
    };
    </script>
