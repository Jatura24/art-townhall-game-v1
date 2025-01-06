import { defineStore } from 'pinia';

    export const useMainStore = defineStore('main', {
      state: () => ({
        correctAnswers: 0,
        totalQuestions: 0
      }),
      getters: {
        accuracy: (state) => {
          return state.totalQuestions > 0 ? Math.round((state.correctAnswers / state.totalQuestions) * 100) : 0;
        },
        ranking: (state) => {
          const accuracy = state.totalQuestions > 0 ? Math.round((state.correctAnswers / state.totalQuestions) * 100) : 0;
          if (accuracy >= 90) {
            return 'A';
          } else if (accuracy >= 70) {
            return 'B';
          } else if (accuracy >= 50) {
            return 'C';
          } else {
            return 'D';
          }
        },
        advice: (state) => {
          const ranking =  state.totalQuestions > 0 ?  ( () => {
            const accuracy = state.totalQuestions > 0 ? Math.round((state.correctAnswers / state.totalQuestions) * 100) : 0;
            if (accuracy >= 90) {
              return 'A';
            } else if (accuracy >= 70) {
              return 'B';
            } else if (accuracy >= 50) {
              return 'C';
            } else {
              return 'D';
            }
          })() : 'D';
          if (ranking === 'A') {
            return 'You have a strong understanding of financial principles. Consider diversifying your investments into stocks, bonds, and real estate for long-term growth.';
          } else if (ranking === 'B') {
            return 'You have a good grasp of financial concepts. Focus on building a balanced portfolio with a mix of growth and income-generating assets like mutual funds and ETFs.';
          } else if (ranking === 'C') {
            return 'You have a basic understanding of financial concepts. Start with low-risk investments like high-yield savings accounts and certificates of deposit (CDs) while learning more about investing.';
          } else {
            return 'It seems you need to improve your financial knowledge. Focus on building an emergency fund and paying off high-interest debt before considering any investments. Seek financial advice to create a personalized plan.';
          }
        }
      },
      actions: {
        setCorrectAnswers(correctAnswers) {
          this.correctAnswers = correctAnswers;
        },
        setTotalQuestions(totalQuestions) {
          this.totalQuestions = totalQuestions;
        },
        resetState() {
          this.correctAnswers = 0;
          this.totalQuestions = 0;
        }
      }
    });
