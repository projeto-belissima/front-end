import axios from 'axios'

export class VestidoService {
  async buscarVestidos(pagina, filtro) {
    const response = await axios.get(
      `vestidos/?page=${pagina}&search=${filtro}`,
    )
    return response.data
  }
}
