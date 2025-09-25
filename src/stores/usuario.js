import { ref } from 'vue'
import { defineStore } from 'pinia'
import { UsuarioService } from '@/services/usuario'

const usuarioService = new UsuarioService()

export const useUsuarioStore = defineStore('usuario', () => {
  const usuarios = ref([])

  async function adicionarUsuario() {
    const data = await usuarioService.adicionarUsuario()
    usuarios.value = data.results
  }

  return { usuarios, adicionarUsuario }
})
