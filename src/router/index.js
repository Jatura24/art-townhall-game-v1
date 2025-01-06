import { createRouter, createWebHistory } from 'vue-router'
    import RegistrationPage from '../components/RegistrationPage.vue'
    import HomePage from '../components/HomePage.vue'
    import QuizzesPage from '../components/QuizzesPage.vue'
    import SummaryPage from '../components/SummaryPage.vue'
    import MoneyHelperPage from '../components/MoneyHelperPage.vue'
    import MoneyHelperSummaryPage from '../components/MoneyHelperSummaryPage.vue'
    import SwapPage from '../components/SwapPage.vue'

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
      }
    ]

    const router = createRouter({
      history: createWebHistory(),
      routes
    })

    export default router
