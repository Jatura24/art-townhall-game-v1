<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4">
          <h1 class="text-3xl font-bold mb-4">Swap</h1>
          <div class="bg-white p-6 rounded-lg shadow-md mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Swap from</label>
              <div class="flex items-center">
                <input type="text" v-model="fromAmount" @input="calculateToAmount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" />
                <div class="relative">
                  <button @click="toggleFromDropdown" class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">
                      <span v-if="selectedFromCurrency === 'GP'">🪙</span>
                    </span>
                    {{ selectedFromCurrency }}
                    <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </button>
                  <div v-if="showFromDropdown" class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1">
                      <button @click="selectFromCurrency('GP')" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span class="mr-1">🪙</span>
                        GP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-gray-500 text-sm mt-1">
                {{ availableFromAmount }} {{ selectedFromCurrency }} available
              </div>
            </div>
            <div class="flex justify-end">
              <button @click="setMaxFromAmount" class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded">MAX</button>
            </div>
            <div class="flex justify-center my-4">
              <button @click="swapCurrencies" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                Swap
              </button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">To</label>
              <div class="flex items-center">
                <input type="text" v-model="toAmount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" disabled />
                <div class="relative">
                  <button @click="toggleToDropdown" class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">
                      <span v-if="selectedToCurrency === 'VDM'">💎</span>
                    </span>
                    {{ selectedToCurrency }}
                    <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </button>
                  <div v-if="showToDropdown" class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1">
                      <button @click="selectToCurrency('VDM')" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span class="mr-1">💎</span>
                        VDM
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import { useUserStore } from '../store/user';
    import { useSwapStore } from '../store/swap';

    export default {
      data() {
        return {
          fromAmount: '',
          toAmount: '',
          selectedFromCurrency: 'GP',
          selectedToCurrency: 'VDM',
          showFromDropdown: false,
          showToDropdown: false,
          conversionRate: 0.1,
        };
      },
      setup() {
        const userStore = useUserStore();
        const swapStore = useSwapStore();
        return { userStore, swapStore };
      },
      computed: {
        availableFromAmount() {
          return this.userStore.currentPoints;
        }
      },
      methods: {
        toggleFromDropdown() {
          this.showFromDropdown = !this.showFromDropdown;
        },
        toggleToDropdown() {
          this.showToDropdown = !this.showToDropdown;
        },
        selectFromCurrency(currency) {
          this.selectedFromCurrency = currency;
          this.showFromDropdown = false;
        },
        selectToCurrency(currency) {
          this.selectedToCurrency = currency;
          this.showToDropdown = false;
        },
        setMaxFromAmount() {
          this.fromAmount = this.availableFromAmount;
          this.calculateToAmount();
        },
        calculateToAmount() {
          const pointsToSwap = parseFloat(this.fromAmount);
          if (!isNaN(pointsToSwap) && pointsToSwap > 0) {
            const vdmPoints = pointsToSwap * this.conversionRate;
            this.toAmount = vdmPoints.toFixed(2);
          } else {
            this.toAmount = '';
          }
        },
        swapCurrencies() {
          const pointsToSwap = parseFloat(this.fromAmount);
          if (isNaN(pointsToSwap) || pointsToSwap <= 0) {
            alert('Please enter a valid amount to swap.');
            return;
          }
          if (pointsToSwap > this.availableFromAmount) {
            alert('You do not have enough points to swap.');
            return;
          }
          const vdmPoints = pointsToSwap * this.conversionRate;
          this.toAmount = vdmPoints.toFixed(2);
          this.userStore.addPointsHistory(`Swapped ${pointsToSwap} GP for ${this.toAmount} VDM`, -pointsToSwap);
          this.swapStore.addPointsHistory(`Swapped ${pointsToSwap} GP for ${this.toAmount} VDM`, vdmPoints);
          this.fromAmount = '';
          this.toAmount = '';
        }
      }
    };
    </script>
