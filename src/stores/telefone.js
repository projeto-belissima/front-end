import { ref } from 'vue'
import { defineStore } from 'pinia'
import TelefoneService from '@/api/telefone'
import { useAuthStore } from '@/stores/auth'

const telefoneService = new TelefoneService()

export const useTelefoneStore = defineStore('telefone', () => {
  const telefone = ref(null)

  async function fetchTelefone() {
    const authStore = useAuthStore()
    const token = authStore.token
    const userId = authStore.user.id

    const data = await telefoneService.getTelefoneByUserId(userId, token)
    telefone.value = data.length ? data[0] : null // caso não tenha telefone ainda
  }

  async function saveTelefone(numero) {
    const authStore = useAuthStore()
    const token = authStore.token
    const userId = authStore.user.id

    if (telefone.value) {
      // Atualizar
      telefone.value = await telefoneService.updateTelefone(
        telefone.value.id,
        { numero, usuario: userId },
        token
      )
    } else {
      // Criar
      telefone.value = await telefoneService.createTelefone(
        { numero, usuario: userId },
        token
      )
    }
  }

  return { telefone, fetchTelefone, saveTelefone }
})
