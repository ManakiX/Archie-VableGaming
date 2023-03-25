<template>
  <div>
    <div>{{ itemCopy.name }} - {{ itemCopy.price }}</div>
    <div>Quantity: {{ itemCopy.quantity }}</div>
    <button @click="removeFromCart()">Remove</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      itemCopy: Object.assign({}, this.item),
    };
  },
  methods: {
    removeFromCart() {
      this.$store.commit("removeItemFromCart", this.itemCopy);
    },
  created() {
    this.$store.dispatch('fetchProducts');
  },
  },
};
</script>


  