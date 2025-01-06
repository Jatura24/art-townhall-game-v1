<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4">
          <h1 class="text-3xl font-bold mb-4">Quizzess</h1>
          <div class="flex justify-between items-center mb-4">
            <div class="text-gray-600">Question {{ currentQuestion + 1 }} of {{ questions.length }}</div>
            <div class="flex items-center text-green-500">
              <span class="mr-1">⏱️</span>
              <span>{{ timeLeft }}s</span>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div class="bg-green-500 h-2.5 rounded-full" :style="{ width: progress + '%' }"></div>
            </div>
            <h2 class="text-2xl font-semibold mb-4">{{ questions[currentQuestion].question }}</h2>
            <div class="flex flex-col gap-2">
              <button v-for="(option, index) in questions[currentQuestion].options" :key="index" class="bg-gray-100 p-3 rounded-md border border-gray-300 hover:bg-gray-200" @click="selectAnswer(option)">
                {{ option }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import { useQuizStore } from '../store/quiz';
    import { useUserStore } from '../store/user';

    export default {
      data() {
        return {
          questions: [
            {
              question: 'What is the capital of France?',
              options: ['London', 'Berlin', 'Paris', 'Madrid'],
              answer: 'Paris'
            },
            {
              question: 'What is the largest planet in our solar system?',
              options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
              answer: 'Jupiter'
            },
            {
              question: 'What is the chemical symbol for water?',
              options: ['H2O', 'CO2', 'O2', 'NaCl'],
              answer: 'H2O'
            },
             {
              question: 'Who painted the Mona Lisa?',
              options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
              answer: 'Leonardo da Vinci'
            },
             {
              question: 'What is the highest mountain in the world?',
              options: ['K2', 'Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji'],
              answer: 'Mount Everest'
            }
          ],
          currentQuestion: 0,
          timeLeft: 50,
          progress: 0,
          timer: null,
        };
      },
      mounted() {
        this.startTimer();
      },
      beforeUnmount() {
        clearInterval(this.timer);
      },
      methods: {
        startTimer() {
          this.timer = setInterval(() => {
            if (this.timeLeft > 0) {
              this.timeLeft--;
            } else {
              this.goToSummary();
            }
          }, 1000);
        },
        selectAnswer(selectedOption) {
          const quizStore = useQuizStore();
          if (selectedOption === this.questions[this.currentQuestion].answer) {
            quizStore.setCorrectAnswers(quizStore.correctAnswers + 1);
          }
          this.nextQuestion();
        },
        nextQuestion() {
          this.timeLeft = 50;
          clearInterval(this.timer);
          if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.startTimer();
          } else {
            this.goToSummary();
          }
          this.updateProgress();
        },
        updateProgress() {
          this.progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        },
        goToSummary() {
          clearInterval(this.timer);
          const quizStore = useQuizStore();
          const userStore = useUserStore();
          quizStore.setTotalQuestions(this.questions.length);
          userStore.addPointsHistory('Quiz completed', quizStore.correctAnswers * 10);
          this.$router.push('/summary');
        }
      }
    };
    </script>
