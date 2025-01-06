import { defineStore } from 'pinia';

    export const useQuizStore = defineStore('quiz', {
      state: () => ({
        correctAnswers: 0,
        totalQuestions: 0,
      }),
      getters: {
        accuracy: (state) => {
          return state.totalQuestions > 0 ? Math.round((state.correctAnswers / state.totalQuestions) * 100) : 0;
        },
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
