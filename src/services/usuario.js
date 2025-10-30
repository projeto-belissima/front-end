import axios from 'axios'

export class UsuarioService {
  async adicionarUsuario() {
    const response = await axios.post(
      `https://belissima-deoi.onrender.com/api/usuarios`,
    )
    return response.data
  }
}
