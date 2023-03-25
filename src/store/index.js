import { createStore } from 'vuex'
import axios from 'axios';

const bStoreURL = "https://avg-capstone-project.onrender.com"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    message: null,
    cart: []
  },
  
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setSpinner(state, showSpinner) {
      state.showSpinner = showSpinner
    },
    setMessage(state, value) {
      state.message = value
    },
    setCart(state, cart) {
      state.cart = cart
    },
  },
  actions: {
    async login(context, payload) {
      const res = await axios.post(`${bStoreURL}/login`, payload);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUser', result);
        context.commit('setSpinner', false)
      }else{
        context.commit('setMessage', err);
      }
    },
    async register(context, payload) {
      let res = await axios.post(`${bStoreURL}/register`, payload);
      let {msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers', msg)
        context.commit(`setSpinner`, false);
      }else{
        context.commit(`setMessage`, err)
      }
    },
    async fetchUsers(context){
      const res = await axios.get(`${bStoreURL}/users`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUsers', results)
      } else {
        context.commit('setMessage', err)
      }
    },

    async fetchUserById(context, userID){
      const res = await axios.get(`${bStoreURL}/users/${userID}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setUsers', results[0])
      } else {
        context.commit('setMessage', err)
      }
    },
    async updateUser(context, payload){
      const res = await axios.patch(`${bStoreURL}/users/${payload.userID}`, payload);
      const {result, err} = await res.data;
      if(result){
        context.commit('setUsers', result)
      } else {
        context.commit('setMessage', err)
      }
    },


    async fetchProducts(context){
      const res = await axios.get(`${bStoreURL}/products`);
      const {results, err} = await res.data;
      if(results){
        context.commit('setProducts', results);
      } else context.commit('setMessage', err)
      console.log(results, err);
    },

    async fetchProduct(context, id){
      const res = await axios.get(`${bStoreURL}/product/${id}`);
      const {results, err} = res.data;
      if(results) context.commit('setProduct', results);
      else context.commit('setMessage', err);
    },

    async addProduct(context, payload){
      const res = await axios.post(`${bStoreURL}/products`, payload);
      const {result, err} = await res.data;
      if(result){
        context.commit('setMessage', result)
      } else context.commit('setMessage', err)
    },

    async updateProduct(context,payload){
      const res = await axios.patch(`${bStoreURL}/products/${payload.id}`, payload);
      console.log(await payload.id)
      const {results,err} = await res.data;
      if(results){
        console.log(results)
        context.commit('setProducts', results);
      } else {
        // console.log(err)
        context.commit('setMessage', err)
      }
    },

    async deleteProduct(context, id){
      const res = await axios.delete(`${bStoreURL}/products/${id}`);
      const {results, err, msg} = res.data;
      if(results, msg){
        context.dispatch('fetchProducts', results, msg);
      } else {
        context.commit('setMessage', err);
      }
    },
    async deleteUser(context, userID){
      const res = await axios.delete(`${bStoreURL}/users/${userID}`);
      const {results, err} = res.data;
      if(results){
        context.commit('setMessage', results);
      } else {
        context.commit('setMessage', err);
      }
    },
    async addToCart(context, payload) {
      const res = await axios.post(`${bStoreURL}/cart/add`, payload);
      const { result, err } = await res.data;
      if (result) {
        context.commit('setCart', result);
        context.commit('setMessage', null);
      } else {
        context.commit('setMessage', err);
      }
    }
  },
  modules: {
  }
})
