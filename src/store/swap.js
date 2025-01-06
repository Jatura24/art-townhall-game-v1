import { defineStore } from 'pinia';

    export const useSwapStore = defineStore('swap', {
      state: () => ({
        pointsHistory: [],
      }),
      actions: {
        addPointsHistory(description, points) {
          this.pointsHistory.push({
            description,
            points,
            timestamp: new Date().toLocaleString()
          });
        },
      }
    });
