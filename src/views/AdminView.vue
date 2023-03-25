<template>
  <div class="container ">

    <div class="admin">
      <div class="productCRUD">
        <h2>Products Table</h2>
        <table class="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product">
              <td><img class="product-image" :src="product.imgURL"></td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodDescription }}</td>
              <td>R{{ product.price }}</td>
              <td>
                <div class="btn-group">
                  <UpdateProduct :product="product" :productId="product.id" />
                  <button class="btn btn-danger" v-on:click="deleteProduct(product)">Delete</button>
                  <button class="btn btn-green" v-on:click="editProduct(product.id)">Edit</button>

                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="d-flex justify-content-center">
                <AddProduct />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="userCRUD">
        <table class="table table-hover table-striped table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email Address</th>
              <th>Role</th>
              <th>Profile Image URL</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user">
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.userProfile }}</td>
              <td>
                <div class="btn-group">
                  <UpdateUser :user="user" :userId="user.userID" />
                  <button class="btn btn-danger"  v-on:click="deleteUser(user)">Delete</button>
                  <button class="btn btn-green"> Edit</button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateProduct from '../components/UpdateProduct.vue'
import AddProduct from '../components/AddProduct.vue'
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';

export default {
  setup() {
    const store = useStore();
    store.dispatch('fetchProducts');
    store.dispatch('fetchUsers');

    const user = computed(() => store.state.user);
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);

    const deleteProduct = async (product) => {
      console.log('debug 1')
      await store.dispatch('deleteProduct', product.id);
      console.log('debug 2')

      await store.dispatch('fetchProducts');
      console.log('debug 3')

      location.reload();
    }
    
    const deleteUser = async (user) => {
            await store.dispatch('deleteUser', user.userID);
            await store.dispatch('fetchUsers');
        }

    return {
      products,
      users,
      user,
      deleteProduct,
      deleteUser,
    }
  },
  components: {
    UpdateProduct,
    AddProduct,
  },
  props: ['product', 'productId'],

//   methods: {
//     deleteUser(userID) {
//       this.$store.dispatch('deleteUser', userID)
// }

//   },
}
</script>

<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem;
  }

  .admin {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    margin: 20px;
    position: relative;
    background-image: url('https://i.postimg.cc/4ymwDgqT/Archie-Vable-Gaming-Logo.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: Arial, sans-serif;
    z-index: 1;
  }

 

  .admin {
    width: 100%;
    margin-bottom: 50px;
    border-collapse: collapse;
    border: black;
  }

  .admin th {
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 2px solid #dee2e6;
    padding: 10px;
    text-align: left;
    background-color: #343a40;
    color: #fff;
  }

  .admin td {
    border-bottom: 1px solid #dee2e6;
    padding: 10px;
    vertical-align: middle;
  }
tbody {
  background-color: white;
  border-left: black;
}
  .admin tbody tr:hover {
    background-color: lightblue;
  }

  .admin tfoot {
    background-color: #343a40;
    color: #fff;
  }

  .admin tfoot td {
    padding: 20px;
  }

  .btn-group {
    display: flex;
    gap: 10px;
  }

  .btn-danger {
    background-color: #dc3545;
    border: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .btn-danger:hover {
    background-color: #c82333;
  }

  .btn-green {
    background-color: grey;
    border: none;
    color: #fff;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .btn-green:hover {
    background-color: #6c757d;
  }

  .product-image {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    overflow: hidden;
    border-radius: 50%;
  }

  .product-image img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .admin {
    border-color: #dee2e6;
  }

  .admin:focus {
    border-color: #6c757d;
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.25);
  }

</style>