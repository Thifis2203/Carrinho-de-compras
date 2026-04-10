import { createStore } from 'vuex'

export default createStore({
  state: {
    // Estado global da aplicação
    cart: [],
  },
  mutations: {
    // Mutations
    ADD_TO_CART(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id)

      if (existingProduct) {
        existingProduct.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },

    REMOVE_FROM_CART(state, index) {
      const item = state.cart[index]

      if (item.quantity > 1) {
        item.quantity--
      } else {
        state.cart.splice(index, 1)
      }
    },
  },
  actions: {
    // Actions
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },

    removeFromCart({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
  getters: {
    // Getters
    cartItemCount: (state) => state.cart.length,
    cartTotalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    },
  },
})
