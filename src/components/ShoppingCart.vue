<template>
  <div>
    <h2>Carrinho de Compras</h2>

    <button @click="addProduct">Adicionar ao carrinho</button>

    <p>Total de itens: {{ $store.getters.cartItemCount }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',

  methods: {
    addProduct() {
      const product = {
        id: 1,
        name: 'Notebook',
        price: 3500,
      }

      this.$store.dispatch('addToCart', product)
    },
  },
}
</script>
