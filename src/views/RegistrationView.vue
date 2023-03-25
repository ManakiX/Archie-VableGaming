<template>
    <body> 
        <div class="registration-form">
          <form>
            <h2>Register</h2>
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" id="username" v-model="payload.firstName" required>
            </div>
            <div class="form-group">
              <label for="surname">Last Name:</label>
              <input type="text" id="surname" v-model="payload.lastName" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="payload.emailAdd" required>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="payload.userPass" required>
            </div>
            
            <button type="submit" class="submit-btn" v-on:click.prevent="register(payload)">Submit</button>

            <div class="login">
              <p>Already have an account? <a><router-link to="/login">Login</router-link> </a></p>
            </div>
          </form>
        </div>
    </body>
  </template>
  
  <script>
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';
import { ref } from 'vue';
  export default {
    setup() {
      let store = useStore();
      // let router = useRouter();
      let spinner = ref(false);
      const payload = {
        firstName: '',
        lastName: '',
        emailAdd: '',
        userPass: ''
      };
      const register = (payload) => {
        console.log(payload);
        store.dispatch('register', payload);
        store.dispatch('fetchUsers');
      }
      return{
        payload,
        spinner,
        register
      }
      
    }
  }
  </script>
  
  <style scoped>
  body{
    position: relative;
    background-image: url('https://i.postimg.cc/4ymwDgqT/Archie-Vable-Gaming-Logo.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: Arial, sans-serif;
    margin: 0;
    padding-top: 100px;
    padding-bottom: 50px;
    z-index: 1;
  }

  .login {
    padding-top: 20px;
  }
  .login a {
    color: grey;
    font-weight: bolder;
  }

  .login a :hover {
    color: purple
  }
  .registration-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 50px 20px;
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .submit-btn {
    padding: 10px 20px;
    background-color: grey;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .submit-btn:hover{
    background-color: purple;
    transition: all 0.3s ease-in;
    transition: all 0.3s ease-out;
    box-shadow: 0px 0px 8px 8px purple;
  }
  

  @media only screen and (max-width: 600px) {
    .registration-form {
      padding: 30px 10px;
    }
  
    label {
      font-size: 16px;
    }
  
    input[type="text"],
    input[type="email"],
    input[type="password"] {
      font-size: 14px;
    }
  
    .submit-btn {
      font-size: 16px;
    }
  }
  </style>
  