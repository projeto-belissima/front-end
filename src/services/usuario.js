import axios from 'axios'

export class UsuarioService {
  async adicionarUsuario() {
    const response = await axios.post(
      `http://0.0.0.0:19003/api/usuarios`,
    )
    return response.data
  }
}
