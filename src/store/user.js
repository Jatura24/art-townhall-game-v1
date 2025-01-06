import { defineStore } from 'pinia';

    export const useUserStore = defineStore('user', {
      state: () => ({
        currentPoints: 560,
        pointsHistory: [],
        userName: '',
        userEmoji: '😀',
        totalWinRounds: 0
      }),
      actions: {
        addPointsHistory(description, points) {
          this.pointsHistory.push({
            description,
            points,
            timestamp: new Date().toLocaleString()
          });
          this.currentPoints += points;
        },
        setUserName(name) {
          this.userName = name;
        },
        setUserEmoji(emoji) {
          this.userEmoji = emoji;
        },
        setTotalWinRounds(totalWinRounds) {
          this.totalWinRounds = totalWinRounds;
        }
      }
    });
