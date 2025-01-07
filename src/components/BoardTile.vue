<template>
      <div
        class="board-tile"
        :class="[getTileColor(tile.type), isActive ? 'ring-2 ring-indigo-500' : '']"
      >
        <div class="flex items-center justify-between mb-1 px-1">
          <span class="font-bold text-xs">{{ tile.name }}</span>
          <span v-html="getTileIcon(tile.type)"></span>
        </div>
        <p class="text-[10px] text-gray-600 mb-1 line-clamp-2 px-1">{{ tile.description }}</p>
        <p class="text-xs font-semibold px-1">${{ Math.abs(tile.value).toLocaleString() }}</p>

        <div v-if="players.length > 0" class="absolute -top-2 -right-2 flex gap-1">
          <PlayerToken
            v-for="player in players"
            :key="player.id"
            :isAI="player.isAI"
            :color="player.isAI ? 'token-ai' : 'token-player'"
          />
        </div>
      </div>
    </template>

    <script>
    import PlayerToken from './PlayerToken.vue';
    // import { DollarSign, TrendingUp, AlertCircle, Gift } from 'lucide-vue';

    export default {
      components: {
        PlayerToken,
        // DollarSign,
        // TrendingUp,
        // AlertCircle,
        // Gift
      },
      props: {
        tile: {
          type: Object,
          required: true
        },
        players: {
          type: Array,
          required: true
        },
        isActive: {
          type: Boolean,
          default: false
        }
      },
      methods: {
        getTileIcon(type) {
          switch (type) {
            case 'invest':
              return '<TrendingUp class="w-4 h-4" />';
            case 'earn':
              return '<DollarSign class="w-4 h-4" />';
            case 'lose':
              return '<AlertCircle class="w-4 h-4" />';
            case 'bonus':
              return '<Gift class="w-4 h-4" />';
            default:
              return null;
          }
        },
        getTileColor(type) {
          switch (type) {
            case 'invest':
              return 'text-blue-500';
            case 'earn':
              return 'text-green-500';
            case 'lose':
              return 'text-red-500';
            case 'bonus':
              return 'text-purple-500';
            default:
              return '';
          }
        }
      }
    };
    </script>
    <style scoped>
    .board-tile {
      border: 1px solid #e2e8f0;
      position: relative;
    }
    </style>
