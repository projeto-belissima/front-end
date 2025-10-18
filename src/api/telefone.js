import axios from 'axios'

export default class TelefoneService {
  async getTelefoneByUserId(userId, token) {
    const response = await axios.get(`/telefones/?usuario=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async createTelefone(data, token) {
    const response = await axios.post('/telefones/', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  async updateTelefone(id, data, token) {
    const response = await axios.put(`/telefones/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
}
