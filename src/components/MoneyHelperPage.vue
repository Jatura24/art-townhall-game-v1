<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4">
          <h1 class="text-3xl font-bold mb-4">Money Helper</h1>
          <div class="text-gray-600 mb-4">Question {{ currentQuestion + 1 }} of {{ questions.length }}</div>
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
    import { useMainStore } from '../store';

    export default {
      data() {
        return {
          questions: [
            {
              question: 'What is the first step in creating a budget?',
              options: ['Track your spending', 'Set financial goals', 'Reduce expenses', 'Increase income'],
              answer: 'Set financial goals'
            },
            {
              question: 'What is the best way to pay off high-interest debt?',
              options: ['Pay minimum amount', 'Balance transfer', 'Debt consolidation', 'Snowball method'],
              answer: 'Snowball method'
            },
            {
              question: 'What is the purpose of an emergency fund?',
              options: ['To invest in stocks', 'To pay for unexpected expenses', 'To buy luxury items', 'To save for retirement'],
              answer: 'To pay for unexpected expenses'
            },
            {
              question: 'What is the difference between saving and investing?',
              options: ['Saving is for short-term goals, investing is for long-term goals', 'Saving is riskier than investing', 'Investing is for short-term goals, saving is for long-term goals', 'There is no difference'],
              answer: 'Saving is for short-term goals, investing is for long-term goals'
            },
            {
              question: 'What is compound interest?',
              options: ['Interest earned on the principal amount', 'Interest earned on the interest', 'Interest earned on the loan', 'Interest earned on the credit card'],
              answer: 'Interest earned on the interest'
            },
            {
              question: 'What is diversification in investing?',
              options: ['Investing in a single stock', 'Investing in a variety of assets', 'Investing in high-risk assets', 'Investing in low-risk assets'],
              answer: 'Investing in a variety of assets'
            },
            {
              question: 'What is the rule of 72?',
              options: ['A rule to calculate the interest rate', 'A rule to calculate the time it takes to double your money', 'A rule to calculate the tax rate', 'A rule to calculate the inflation rate'],
              answer: 'A rule to calculate the time it takes to double your money'
            },
            {
              question: 'What is the importance of having a good credit score?',
              options: ['To get a better job', 'To get a better loan rate', 'To get a better car', 'To get a better house'],
              answer: 'To get a better loan rate'
            },
            {
              question: 'What is the difference between a Roth IRA and a Traditional IRA?',
              options: ['Roth IRA is tax-deductible, Traditional IRA is not', 'Traditional IRA is tax-deductible, Roth IRA is not', 'Both are tax-deductible', 'Both are not tax-deductible'],
              answer: 'Traditional IRA is tax-deductible, Roth IRA is not'
            },
            {
              question: 'What is the best way to reduce your tax liability?',
              options: ['Increase your spending', 'Increase your income', 'Take advantage of tax deductions and credits', 'Avoid paying taxes'],
              answer: 'Take advantage of tax deductions and credits'
            }
          ],
          currentQuestion: 0,
          progress: 0,
        };
      },
      methods: {
        selectAnswer(selectedOption) {
          const store = useMainStore();
          if (selectedOption === this.questions[this.currentQuestion].answer) {
            store.setCorrectAnswers(store.correctAnswers + 1);
          }
          this.nextQuestion();
        },
        nextQuestion() {
          if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
          } else {
            this.goToSummary();
          }
          this.updateProgress();
        },
        updateProgress() {
          this.progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        },
        goToSummary() {
          const store = useMainStore();
          store.setTotalQuestions(this.questions.length);
          this.$router.push('/money-helper-summary');
        }
      }
    };
    </script>
