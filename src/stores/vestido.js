import { ref } from 'vue'
import { defineStore } from 'pinia'
import { VestidoService } from '@/services/vestido'

const vestidoService = new VestidoService()

export const useVestidoStore = defineStore('vestido', () => {
  const vestidos = ref([])
  const meta = ref({
    page_size: 0,
    total_pages: 0,
    page: 0,
  })

  async function buscarVestidos(pagina = 1, filtro = '') {
    const data = await vestidoService.buscarVestidos(pagina, filtro)
    vestidos.value = data.results
    meta.value.page = data.page
    meta.value.total_pages = data.total_pages
    meta.value.page_size = data.page_size
  }

  function pegarVestidoPorId(id) {
    // Modelo universal
    for (let vestido of vestidos.value) {
      if (vestido.id == id) {
        return vestido
      }
    }
    return {}
  }

  return { vestidos, meta, buscarVestidos, pegarVestidoPorId }
})

