import { createStore } from "vuex"
import auth from "./auth"
import account from "./account"

export const store = createStore({
  state: {},
  getters: {
    signedIn: (state) => {
      return state.auth.getters.signedIn || Boolean(window.localStorage.getItem("token"))
    },
  },
  mutations: {
    initializeStore(state) {
      if (window.localStorage.getItem("store")) {
        this.replaceState(Object.assign(state, JSON.parse(window.localStorage.getItem("store"))))
      }
    },
  },
  actions: {},
  modules: {
    auth,
    account,
  },
})
store.subscribe((_, state) => {
  window.localStorage.setItem("store", JSON.stringify(state))
})

export default store
