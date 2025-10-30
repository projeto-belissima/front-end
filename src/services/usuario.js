import axios from 'axios'

export class UsuarioService {
  async adicionarUsuario() {
    const response = await axios.post(
      `http://127.0.0.1:19003/api/usuarios`,
    )
    return response.data
  }
}
