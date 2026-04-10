<template>
  <div>
    <h2>Carrinho de Compras</h2>

    <button @click="addProduct({ id: 1, name: 'Notebook', price: 3500 })">
      Adicionar Notebook
    </button>

    <button @click="addProduct({ id: 2, name: 'Mouse', price: 100 })">Adicionar Mouse</button>

    <button @click="addProduct({ id: 3, name: 'Teclado', price: 200 })">Adicionar Teclado</button>

    <ul>
      <li v-for="(item, index) in $store.state.cart" :key="index">
        {{ item.name }} - R$ {{ item.price }} (x{{ item.quantity }})

        <button @click="$store.dispatch('removeFromCart', index)">Remover</button>
      </li>
    </ul>

    <p>Total de itens: {{ $store.getters.cartItemCount }}</p>
    <p>Total em R$: {{ $store.getters.cartTotalPrice }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',

  methods: {
    addProduct(product) {
      this.$store.dispatch('addToCart', product)
    },
  },
}
</script>
