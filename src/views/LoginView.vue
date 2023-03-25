<template>
    <div class="login-container">
      <form class="login-form" @submit.prevent="login">
        <h1 class="login-title">Login</h1>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userLogin.emailAdd" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="userLogin.userPass" required>
        </div>
        <button type="submit" class="login-button" >Login</button>
        <div class="register">
          <p>Don't have an account? <a><router-link to="/registration">Register</router-link> </a></p>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userLogin: {
          emailAdd: '',
          userPass: ''
        }
      }
    },
    methods: {
      login() {
        return this.$store.dispatch('login', this.userLogin)
        .then(() => {
          alert('Login successful!');
        }) 
        .catch(() => {
          alert('Incorrect username or password!')
        })
      }
  },
  }
  </script>
  
  <style scoped>
  .login-container {
    color: black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url('https://i.postimg.cc/4ymwDgqT/Archie-Vable-Gaming-Logo.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: Arial, sans-serif;
    margin: 0;
    z-index: 1;
  }

  .register {
    padding: 20px;
  }
.register a {
  font-size: medium;
  font-weight: bolder;
  color: grey
}
  .register a :hover {
    color: purple;
  }
  .login-form {
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 20px;
    width: 300px;
    box-shadow: 0px 0px 10px black;
  }
  
  .login-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    color: #000;
  }
  
  .login-button {
    background-color: grey;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: purple;
    transition: all 0.3s ease-in;
    transition: all 0.3s ease-out;
    box-shadow: 0px 0px 3px 3px purple;
  }
  </style>
  