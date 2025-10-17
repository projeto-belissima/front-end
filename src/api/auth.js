import axios from 'axios'

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get('/usuarios/me/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async getUser(token) {
    const response = await axios.get('/usuarios/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  }

  // <-- adicionar este método
  async updateUser(data, token, userId) {
    // escolha PUT ou PATCH conforme sua API
    const response = await axios.patch(`/usuarios/${userId}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
}
