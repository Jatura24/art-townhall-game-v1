<template>
      <router-view />
      <footer class="bg-gray-100 py-4 border-t border-gray-200">
        <div class="container mx-auto flex justify-around">
          <button @click="$router.push('/home')" class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.154-.439 1.594 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span class="text-sm">Home</span>
          </button>
          <button @click="$router.push('/history')" class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m-1.5 5.167c1.425 0 2.344-.974 2.344-2.167 0-1.218-.919-2.167-2.344-2.167m0 4.334v-1.167m0-1.167v-1.167m1.5 1.167h-3" />
            </svg>
            <span class="text-sm">History</span>
          </button>
          <button @click="$router.push('/ranking')" class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.772-8.745-2.125M15 10h.008v.008H15V10zM8.03 10h.008v.008H8.03V10zM3.132 19.755A23.928 23.928 0 0112 19.5c3.875 0 7.428.514 10.745 1.5M3 10h18M3 15h18" />
            </svg>
            <span class="text-sm">Ranking</span>
          </button>
        </div>
      </footer>
    </template>
