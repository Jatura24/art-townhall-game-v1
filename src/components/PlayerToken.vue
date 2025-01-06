<template>
      <div :class="['player-token', color]"></div>
    </template>

    <script>
    export default {
      props: {
        isAI: {
          type: Boolean,
          required: true
        },
        color: {
          type: String,
          required: true
        }
      }
    };
    </script>
    <style scoped>
    .player-token {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .token-ai {
      background-color: #6b7280;
    }
    .token-player {
      background-color: #3b82f6;
    }
    </style>
