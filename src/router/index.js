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
      path: "/logout",
      name: "logout",
      component: () => import('../views/LogoutView.vue'),
    },
    {
      path: '/menu-funcionario',
      name: 'menu-funcionario',
      component: () => import('../views/MenuFuncionarioView.vue'),
    },
    {
      path: '/modelos-vestidos',
      name: 'modelos-vestidos',
      component: () => import('../views/ModelosVestidosView.vue')
    },
    {
      path: '/perfil-usuario',
      name: 'perfil-usuario',
      component: () => import('../views/UsuarioView.vue'),
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
    {
      path: '/vestido/:id',
      name: 'vestido',
      component: () => import('../views/VestidosView.vue'),
      props: true,
    },
  ],
})

export default router
