<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4">
          <h1 class="text-3xl font-bold mb-4">Swap</h1>
          <div class="bg-white p-6 rounded-lg shadow-md mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Swap from</label>
              <div class="flex items-center">
                <input type="text" v-model="fromAmount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" />
                <div class="relative">
                  <button @click="toggleFromDropdown" class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">
                      <span v-if="selectedFromCurrency === 'BTC'">₿</span>
                      <span v-else-if="selectedFromCurrency === 'ETH'">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0v-6zm1.125 3.75a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </span>
                    {{ selectedFromCurrency }}
                    <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </button>
                  <div v-if="showFromDropdown" class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1">
                      <button @click="selectFromCurrency('BTC')" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span class="mr-1">₿</span>
                        BTC
                      </button>
                      <button @click="selectFromCurrency('ETH')" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span class="mr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0v-6zm1.125 3.75a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        ETH
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
              <button @click="swapCurrencies" class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-16 3h18M4 7h16a2 2 0 012-2H6a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">To</label>
              <div class="flex items-center">
                <input type="text" v-model="toAmount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" />
                <div class="relative">
                  <button @click="toggleToDropdown" class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">
                      <span v-if="selectedToCurrency === 'BTC'">₿</span>
                      <span v-else-if="selectedToCurrency === 'ETH'">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0v-6zm1.125 3.75a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </span>
                    {{ selectedToCurrency }}
                    <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </button>
                  <div v-if="showToDropdown" class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div class="py-1">
                      <button @click="selectToCurrency('BTC')" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span class="mr-1">₿</span>
                        BTC
                      </button>
                      <button @click="selectToCurrency('ETH')" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span class="mr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0v-6zm1.125 3.75a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3z" clip-rule="evenodd" />
                          </svg>
                        </span>
                        ETH
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <div class="text-gray-500">Estimated Fee: $3.78</div>
              <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                ⚡ Fast
                <svg class="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          fromAmount: '',
          toAmount: '',
          selectedFromCurrency: 'BTC',
          selectedToCurrency: 'ETH',
          showFromDropdown: false,
          showToDropdown: false,
          availableFromAmount: 79.7053
        };
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
        },
        swapCurrencies() {
          // Implement swap logic here
          console.log('Swapping', this.fromAmount, this.selectedFromCurrency, 'to', this.toAmount, this.selectedToCurrency);
        }
      }
    };
    </script>
