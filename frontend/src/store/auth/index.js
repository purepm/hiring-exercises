import actions from "./actions"
import mutations from "./mutations"

export const module = {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    signedIn: (state) => state.user && Boolean(window.localStorage.getItem("token")),
    user: (state) => state.user,
    userId: (state) => state.user?.user?.id,
  },
  actions,
  mutations,
}

export default module
