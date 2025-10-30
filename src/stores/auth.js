import { ref } from 'vue'
import { defineStore } from 'pinia'
import AuthService from '@/api/auth'

const authService = new AuthService()

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})
  const loggedIn = ref(false)
  const token = ref(null)

  // Define o token e busca o usuário do Passage ou backend
  async function setToken(newToken) {
    token.value = newToken
    user.value = await authService.postUserToken(newToken)
    loggedIn.value = true
  }

  // Limpa os dados de autenticação
  function unsetToken() {
    user.value = {}
    loggedIn.value = false
    token.value = null
  }

  // Busca o usuário atual (ex.: ao montar o perfil)
  async function fetchUser() {
    try {
      const userData = await authService.getUser(token.value) // GET
      user.value = userData
      loggedIn.value = true
    } catch (error) {
      console.error('Erro ao buscar usuário:', error)
      loggedIn.value = false
    }
  }

  // Atualiza os dados do usuário
  async function updateUser(updatedData) {
    try {

      const payload = {
        name: updatedData.name,
        foto: updatedData.foto
          ? { url: updatedData.foto.url, description: updatedData.foto.description }
          : null,
      }

      console.log('Token enviado:', token.value)
      console.log(
        'Chamando updateUser com (data, token, id):',
        payload,
        token.value,
        updatedData.id,
      )

      const updatedUser = await authService.updateUser(
        payload, // data
        token.value, // token como string
        updatedData.id, // id por último, se essa for a assinatura do service
      )

      user.value = updatedUser
      return updatedUser
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error)
      throw error
    }
  }

  return { user, loggedIn, setToken, unsetToken, fetchUser, updateUser }
})
