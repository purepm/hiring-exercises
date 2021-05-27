import axios from "axios"

export default {
  async account({ commit, dispatch }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const token = window.localStorage.getItem("token")
        if (!token) throw new Error("No auth token found")

        const response = await axios.get(`${import.meta.env.VITE_API_URI}/v1/accounts/${payload.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        commit("setAccount", response.data)
        resolve(response.data)
      } catch (err) {
        reject(err)
      }
    })
  },
}
