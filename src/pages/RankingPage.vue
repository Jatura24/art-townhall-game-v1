<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4 flex-grow flex flex-col items-center">
          <h1 class="text-3xl font-bold mb-4 text-center">Leaderboard</h1>
          <div class="flex flex-col items-center w-full max-w-md">
            <div class="flex justify-center w-full mb-8">
              <div class="flex flex-col items-center">
                <div class="relative">
                  <div class="rounded-full border-2 border-gray-300 w-24 h-24 flex items-center justify-center">
                    <span class="text-4xl">👑</span>
                  </div>
                  <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <div class="text-gray-700 text-sm">@sher234</div>
                    <div class="text-2xl font-bold text-green-500">8122</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center w-full mb-8">
              <div class="flex justify-between w-full max-w-sm">
                <div class="flex flex-col items-center">
                  <div class="relative">
                    <div class="rounded-full border-2 border-gray-300 w-20 h-20 flex items-center justify-center">
                      <span class="text-3xl">😀</span>
                    </div>
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                      <div class="text-gray-700 text-sm">@dorisklein</div>
                      <div class="text-xl font-bold text-green-500">8032</div>
                    </div>
                  </div>
                  <div class="absolute top-0 left-0 text-gray-700">2</div>
                </div>
                <div class="flex flex-col items-center">
                  <div class="relative">
                    <div class="rounded-full border-2 border-gray-300 w-20 h-20 flex items-center justify-center">
                      <span class="text-3xl">😎</span>
                    </div>
                    <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                      <div class="text-gray-700 text-sm">@lord_0980</div>
                      <div class="text-xl font-bold text-green-500">7884</div>
                    </div>
                  </div>
                  <div class="absolute top-0 right-0 text-gray-700">3</div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="flex items-center justify-between bg-white p-2 rounded-lg mb-2" v-for="i in 3" :key="i">
                <div class="flex items-center">
                  <div class="text-gray-700 mr-2">{{ i + 3 }}</div>
                  <div class="rounded-full border-2 border-gray-300 w-10 h-10 flex items-center justify-center mr-2">
                    <span class="text-xl">🚀</span>
                  </div>
                  <div class="text-gray-700">@adam56</div>
                </div>
                <div class="text-green-500">7881</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
