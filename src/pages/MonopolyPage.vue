<template>
      <div class="flex flex-col min-h-screen bg-gray-100">
        <div class="container mx-auto p-4 flex-grow flex flex-col items-center">
          <h1 class="text-3xl font-bold mb-4 text-center">Fintech Express</h1>
          <div class="relative bg-gray-800 rounded-2xl mb-4" style="width: 500px; height: 500px;">
            <div class="absolute top-0 left-0 w-full h-full" style="display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(4, 1fr);">
              <div class="col-start-1 col-end-2 row-start-1 row-end-2">
                <BoardTile
                  :tile="tiles[0]"
                  :players="getPlayersOnTile(tiles[0].id)"
                  :isActive="currentTile === tiles[0].id"
                />
              </div>
              <div class="col-start-2 col-end-3 row-start-1 row-end-2">
                <BoardTile
                  :tile="tiles[1]"
                  :players="getPlayersOnTile(tiles[1].id)"
                  :isActive="currentTile === tiles[1].id"
                />
              </div>
              <div class="col-start-3 col-end-4 row-start-1 row-end-2">
                <BoardTile
                  :tile="tiles[2]"
                  :players="getPlayersOnTile(tiles[2].id)"
                  :isActive="currentTile === tiles[2].id"
                />
              </div>
              <div class="col-start-4 col-end-5 row-start-1 row-end-2">
                <BoardTile
                  :tile="tiles[3]"
                  :players="getPlayersOnTile(tiles[3].id)"
                  :isActive="currentTile === tiles[3].id"
                />
              </div>
              <div class="col-start-1 col-end-2 row-start-2 row-end-3">
                <BoardTile
                  :tile="tiles[4]"
                  :players="getPlayersOnTile(tiles[4].id)"
                  :isActive="currentTile === tiles[4].id"
                />
              </div>
              <div class="col-start-4 col-end-5 row-start-2 row-end-3">
                <BoardTile
                  :tile="tiles[5]"
                  :players="getPlayersOnTile(tiles[5].id)"
                  :isActive="currentTile === tiles[5].id"
                />
              </div>
              <div class="col-start-1 col-end-2 row-start-3 row-end-4">
                <BoardTile
                  :tile="tiles[6]"
                  :players="getPlayersOnTile(tiles[6].id)"
                  :isActive="currentTile === tiles[6].id"
                />
              </div>
              <div class="col-start-4 col-end-5 row-start-3 row-end-4">
                <BoardTile
                  :tile="tiles[7]"
                  :players="getPlayersOnTile(tiles[7].id)"
                  :isActive="currentTile === tiles[7].id"
                />
              </div>
              <div class="col-start-1 col-end-2 row-start-4 row-end-5">
                <BoardTile
                  :tile="tiles[8]"
                  :players="getPlayersOnTile(tiles[8].id)"
                  :isActive="currentTile === tiles[8].id"
                />
              </div>
              <div class="col-start-2 col-end-3 row-start-4 row-end-5">
                <BoardTile
                  :tile="tiles[9]"
                  :players="getPlayersOnTile(tiles[9].id)"
                  :isActive="currentTile === tiles[9].id"
                />
              </div>
              <div class="col-start-3 col-end-4 row-start-4 row-end-5">
                <BoardTile
                  :tile="tiles[10]"
                  :players="getPlayersOnTile(tiles[10].id)"
                  :isActive="currentTile === tiles[10].id"
                />
              </div>
              <div class="col-start-4 col-end-5 row-start-4 row-end-5">
                <BoardTile
                  :tile="tiles[11]"
                  :players="getPlayersOnTile(tiles[11].id)"
                  :isActive="currentTile === tiles[11].id"
                />
              </div>
            </div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <button @click="rollDice" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Roll
              </button>
              <div class="text-white mt-2">
                Turn {{ currentTurn }}/15
              </div>
              <div v-if="diceResult" class="text-white mt-2">
                Dice: {{ diceResult }}
              </div>
            </div>
          </div>
          <div class="flex justify-between w-full max-w-md">
            <div class="bg-white rounded-lg p-2">
              <div class="flex items-center">
                <span class="text-gray-500 mr-2 text-sm">👤</span>
                <span class="font-semibold text-sm">Player</span>
              </div>
              <div class="text-xl font-bold text-green-500">${{ playerMoney }}</div>
            </div>
            <div class="bg-white rounded-lg p-2">
              <div class="flex items-center">
                <span class="text-gray-500 mr-2 text-sm">🤖</span>
                <span class="font-semibold text-sm">AI Investor</span>
              </div>
              <div class="text-xl font-bold text-green-500">${{ aiMoney }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    import BoardTile from '../components/BoardTile.vue';
    import { useUserStore } from '../store/user';

    export default {
      components: {
        BoardTile
      },
      setup() {
        const userStore = useUserStore();
        return { userStore };
      },
      data() {
        return {
          currentTurn: 1,
          currentPlayer: 'player1',
          currentTile: 1,
          diceResult: null,
          tiles: [
            {
              id: 1,
              name: 'Start',
              description: 'Collect salary as you pass',
              value: 1000,
              type: 'earn'
            },
            {
              id: 2,
              name: 'Crypto Investment',
              description: 'Invest in cryptocurrency',
              value: 2000,
              type: 'invest'
            },
            {
              id: 3,
              name: 'Tax Payment',
              description: 'Pay your taxes',
              value: -800,
              type: 'lose'
            },
            {
              id: 4,
              name: 'Robo-Advisor',
              description: 'Invest through AI-powered portfolio',
              value: 1500,
              type: 'invest'
            },
            {
              id: 5,
              name: 'Interest Income',
              description: 'Collect interest from investments',
              value: 800,
              type: 'earn'
            },
            {
              id: 6,
              name: 'AI Trading Bot',
              description: 'Invest in automated trading',
              value: 2500,
              type: 'invest'
            },
            {
              id: 7,
              name: 'Security Breach',
              description: 'Pay for security fixes',
              value: -1500,
              type: 'lose'
            },
            {
              id: 8,
              name: 'Dividend Payment',
              description: 'Collect investment returns',
              value: 1200,
              type: 'earn'
            },
            {
              id: 9,
              name: 'IPO Success',
              description: 'Your startup goes public!',
              value: 5000,
              type: 'bonus'
            },
            {
              id: 10,
              name: 'Market Rally',
              description: 'Stock market is booming!',
              value: 2000,
              type: 'bonus'
            },
            {
              id: 11,
              name: 'Server Costs',
              description: 'Pay for infrastructure',
              value: -500,
              type: 'lose'
            },
            {
              id: 12,
              name: 'Fintech Startup',
              description: 'Invest in a promising startup',
              value: 3000,
              type: 'invest'
            }
          ],
          players: [
            { id: 'player1', isAI: false },
            { id: 'ai1', isAI: true }
          ],
          playerPositions: {
            player1: 1,
            ai1: 1
          },
          playerMoney: 10000,
          aiMoney: 10000
        };
      },
      methods: {
        getPlayersOnTile(tileId) {
          return this.players.filter(player => this.playerPositions[player.id] === tileId);
        },
        rollDice() {
          const diceRoll = Math.floor(Math.random() * 6) + 1;
          this.diceResult = diceRoll;
          this.movePlayer(this.currentPlayer, diceRoll);
          this.handleTileAction(this.currentPlayer);
          this.nextTurn();
        },
        movePlayer(player, steps) {
          let newPosition = this.playerPositions[player] + steps;
          if (newPosition > this.tiles.length) {
            newPosition -= this.tiles.length;
            if (player === 'player1') {
              this.playerMoney += 1000;
            } else {
              this.aiMoney += 1000;
            }
          }
          this.playerPositions[player] = newPosition;
          this.currentTile = newPosition;
        },
        handleTileAction(player) {
          const currentTile = this.tiles.find(tile => tile.id === this.playerPositions[player]);
          if (currentTile) {
            if (player === 'player1') {
              this.playerMoney += currentTile.value;
            } else {
              this.aiMoney += currentTile.value;
            }
          }
        },
        nextTurn() {
          this.currentTurn++;
          this.currentPlayer = this.currentPlayer === 'player1' ? 'ai1' : 'player1';
          if (this.playerMoney < 0 || this.aiMoney < 0 || this.currentTurn > 15) {
            alert('Game Over!');
            return;
          }
          if (this.currentPlayer === 'ai1') {
            setTimeout(() => {
              this.rollDice();
            }, 1000);
          }
        }
      }
    };
    </script>
