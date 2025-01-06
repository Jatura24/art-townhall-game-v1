import { createRouter, createWebHistory } from 'vue-router'
    import RegistrationPage from '../pages/RegistrationPage.vue'
    import HomePage from '../pages/HomePage.vue'
    import QuizzesPage from '../pages/QuizzesPage.vue'
    import SummaryPage from '../pages/SummaryPage.vue'
    import MoneyHelperPage from '../pages/MoneyHelperPage.vue'
    import MoneyHelperSummaryPage from '../pages/MoneyHelperSummaryPage.vue'
    import SwapPage from '../pages/SwapPage.vue'
    import HistoryPage from '../pages/HistoryPage.vue'
    import RankingPage from '../pages/RankingPage.vue'

    const routes = [
      {
        path: '/',
        name: 'Registration',
        component: RegistrationPage
      },
      {
        path: '/home',
        name: 'Home',
        component: HomePage,
        props: true
      },
      {
        path: '/quizzes',
        name: 'Quizzes',
        component: QuizzesPage
      },
      {
        path: '/summary',
        name: 'Summary',
        component: SummaryPage,
        props: true
      },
      {
        path: '/money-helper',
        name: 'MoneyHelper',
        component: MoneyHelperPage
      },
      {
        path: '/money-helper-summary',
        name: 'MoneyHelperSummary',
        component: MoneyHelperSummaryPage,
        props: true
      },
      {
        path: '/swap',
        name: 'Swap',
        component: SwapPage
      },
      {
        path: '/history',
        name: 'History',
        component: HistoryPage
      },
      {
        path: '/ranking',
        name: 'Ranking',
        component: RankingPage
      }
    ]

    const router = createRouter({
      history: createWebHistory(),
      routes
    })

    export default router
