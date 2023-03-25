<template>
    <div class="single-product">
      <h1>Single Product</h1>
      <LoaderComp v-if="!product" />
      <div v-if="product" class="product-details">
        <div class="product-image">
          <img :src="product.imgURL" alt="Product Image">
        </div>
        <div class="product-info">
          <div class="product-title">
              <img src="back-arrow.svg" alt="Back to Products">
            <h3>{{ product.prodName }}</h3>
          </div>
          <div class="product-details">
            
            <h4><span>Price:</span> R{{ product.price }}</h4>
            <h5><span>Genre:</span> {{ product.category }}</h5>
            <h6><span>Description:</span> {{ product.prodDescription }}</h6>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import LoaderComp from '../components/Loader.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    name: 'SingleProductView',
  
    methods: {
      returnToProducts() {
        this.$router.push("/products");
      },
    },
  
    components: {
      LoaderComp
    },
  
    setup() {
      const store = useStore();
      const product = computed(() => store.state.product);
      return { product };
    },
  
    mounted() {
      this.$store.dispatch('fetchProduct', this.$route.params.id);
    }
  };
  </script>
  
  <style scoped>
  .single-product {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .product-details {
    display: flex;
  }
  
  .product-image {
    flex: 1;
    margin-right: 20px;
  }
  
  .product-image img {
    width: 100%;
  }
  
  .product-title {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .product-title img {
    margin-right: 10px;
  }
  
  .product-info {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .product-details h4,
  .product-details h5,
  .product-details h6 {
    margin-bottom: 10px;
  }
  
  .product-details button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .product-details button:hover {
    background-color: #0069d9;
  }
  </style>