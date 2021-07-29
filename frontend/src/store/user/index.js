import actions from "./actions"
import mutations from "./mutations"

export const module = {
  namespaced: true,
  state: {
    account: {},
    transactions: [],
  },
  getters: {
    account: (state) => state.account,
    transactions: (state) => state.transactions,
  },
  actions,
  mutations,
}

export default module
