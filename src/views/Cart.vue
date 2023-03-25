<template>
    <body>
      <div class="cart-page">
        <h1 class="cart-title">My Cart</h1>
        <div v-if="cartItems.length === 0" class="empty-cart">Your cart is empty.</div>
        <div v-else>
          <div v-for="(item, index) in cartItems" :key="index" class="cart-item">
            <cart-item :item="item" @remove="removeItem(index)" />
          </div>
          <div class="total">Total: {{ total }}</div>
          <button class="checkout-button" @click="checkout()">Checkout</button>
        </div>
      </div>
    </body>
  </template>
  
  <script>
  import CartItem from "../components/CartItem.vue";
  export default {
    name: "CartPage",
    components: {
      CartItem,
    },
    computed: {
      cartItems() {
        return this.$store.state.cart.items;
      },
      total() {
        return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
    },
    methods: {
      removeItem(index) {
        this.$store.commit("cart/removeItem", index);
      },
      checkout() {
        //checkout logic
      },
    },
  };
  </script>
  
  
  <style scoped>
  body {
    position: relative;
    background-image: url("https://i.postimg.cc/4ymwDgqT/Archie-Vable-Gaming-Logo.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: Arial, sans-serif;
    margin: 0;
    z-index: 1;
  }
  
  .cart-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .cart-title {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .empty-cart {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .cart-item:last-child {
    border-bottom: none;
  }
  
  .cart-item-name {
    font-size: 18px;
    font-weight: bold;
  }
  
  .cart-item-price {
    font-size: 16px;
  }
  
  .cart-item-quantity {
    font-size: 16px;
  }
  
  .checkout-button {
    background-color: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 20px;
    margin-top: 20px;
  }
  
  .checkout-button:hover {
    background-color: #0d8bf2;
    cursor: pointer;
  }
  
  .total {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
  }
  </style>
  
  