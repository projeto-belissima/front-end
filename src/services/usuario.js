import axios from 'axios'

export class UsuarioService {
  async adicionarUsuario() {
    const response = await axios.post(
      `usuarios`,
    )
    return response.data
  }
}
