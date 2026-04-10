import { createStore } from 'vuex'

export default createStore({
  state: {
    // Estado global da aplicação
    cart: [],
  },
  mutations: {
    // Mutations
    ADD_TO_CART(state, product) {
      state.cart.push(product)
    },
  },
  actions: {
    // Actions
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
  },
  getters: {
    // Getters
    cartItemCount: (state) => state.cart.length,
  },
})
