import axios from 'axios'

export class VestidoService {
  async buscarVestidos(pagina, filtro) {
    const response = await axios.get(
      `http://0.0.0.0:19003/api/vestidos/?page=${pagina}&search=${filtro}`,
    )
    return response.data
  }
}
