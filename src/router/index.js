import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/menu-funcionario',
      name: 'menu-funcionario',
      component: () => import('../views/MenuFuncionarioView.vue'),
    },
    {
      path: '/selecao-vestidos',
      name: 'amostragem',
      component: () => import('../views/AmostragemView.vue'),
    },
    {
      path: '/vendas',
      name: 'vendas',
      component: () => import('../views/VendaView.vue'),
    },
  ],
})

export default router
