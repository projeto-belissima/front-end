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
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  }


  async updateUser(data, token, userId) {
    const response = await axios.patch(`/usuarios/${userId}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
}
