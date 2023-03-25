<template>
  <div class="container">
    <div class="top_nav">
    <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/Admin">Admin</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/registration">Registration</router-link>
      <router-link to="/login">Login</router-link>
    </ul>
  </div>
  <div class="nav-container">
    <div class="bottom_nav">
      <div class="left">
        <div class="logo"><p><span>Archie-Vable</span>Gaming</p></div>
        <div class="search_bar">
            <input type="text" placeholder="Search" style="color: black;" v-model="searchText" @keyup="handleSearch">
        </div>
    </div> 
    <div class="right">
      <ul>
        <li class="dropdown">
          <button class="comp">
            <router-link to="/products" class="Comp-hover">PC Components</router-link>
          </button>
          <div class="dropdown-content">
            <div class="input-items">
              <button class="Input-button">
                <a class="text-c" href="#">Input items</a>
              </button>
              <div class="nested-dropdown-content">
                <a class="text-c" href="#">Mouse</a>
                <a class="text-c" href="#">Keyboard</a>
              </div>
            </div>
            <div class="output-items">
              <button class="Output-button">
                <a class="text-c" href="#">Output item</a>
              </button>
              <div class="nested-dropdown-content1">
                <a class="text-c" href="#">Monitor</a>
                <a class="text-c" href="#">Headphones</a>

              </div>
            </div>
            <button class="GC-button">
              <a class="text-c" href="#">Gaming chairs</a>
            </button>
          </div>
        </li>
        <li>
          <router-link to="/cart">
            <div class="icon-cart" >
              <div class="cart-line-1"></div>
              <div class="cart-line-2"></div>
              <div class="cart-line-3"></div>
              <div class="cart-wheel"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    
    </div>
</div>
  </div>
<!-- </div> -->
<section>
  
</section>
</template>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.icon-cart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 6px;
}

.cart-line {
  width: 70%;
  height: 0.15em;
  background-color: #333;
  border-radius: 0.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: left top;
  transform: translate(-50%, -50%) rotate(45deg);
}

.cart-line:nth-child(2) {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.cart-wheel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 60%;
  border-radius: 50%;
  border: 0.2em solid #333;
  box-sizing: border-box;
}

.icon-cart:hover {
  border-color: #888;
}

.icon-cart:hover .cart-line, .icon-cart:hover .cart-wheel {
  border-color: #888;
}

a {
  color: white;
  font-family: 'Ariel';
}

.text-c {
  color: black;
}

.comp {
  height: 66px;
  border: grey;
  background-color: #494949;
  transition: 0.01s ease-in;
}
.comp:hover {
  background-color: #e14747;
  border: grey;
  color: white;
}

.Input-button {
  height: 40px;
  width: 100%;
  background-color: white;
  border: white;
  transition: 0.01s ease-in;
}
.Input-button:hover {
  background-color: #70c2e8;
  border: grey;
  color: white;
}

.Output-button {
  height: 40px;
  width: 100%;
  background-color: white;
  border: white;
  transition: 0.01s ease-in;
}
.Output-button:hover {
  background-color: #70c2e8;
  border: grey;
  color: white;
}

.GC-button {
  height: 40px;
  width: 100%;
  background-color: white;
  border: white;
  transition: 0.01s ease-in;
}
.GC-button:hover {
  background-color: #70c2e8;
  border: #494949;
  color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  min-width: 160px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  animation-name: dropdown-animation;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
}

.dropdown:hover .dropdown-content {
  display: block;
  
}

.dropdown-content .input-items:hover .nested-dropdown-content {
  display: block;
}

.nested-dropdown-content {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1;
  min-width: 160px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px black;
  animation-name: dropdown-animation;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
}
.dropdown-content .output-items:hover .nested-dropdown-content1 {
  display: block;
}

.nested-dropdown-content1 {
  margin-top: 35px;
}

.nested-dropdown-content1 {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  z-index: 1;
  min-width: 160px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  animation-name: dropdown-animation;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
}

@keyframes dropdown-animation {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.nav-container{
  position: absolute;
  width: 100%;
  height: 100%;
}

.bottom_nav{
  margin-top: 0px;
  width: 100%;
  height: 65px;
  background: #494949;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000000;
  color: white!important ; 
}


.bottom_nav .left{
  display: flex;
  align-items: center;
}

.bottom_nav .left .logo p{
  font-size: 24px;
  font-weight: bold;
  color: #494949;
  font-family: "Mountains of Christmas", cursive;
  margin-right: 25px;
}

.bottom_nav .left .logo p span{
  color: rgb(214, 43, 214);
  font-family: "Mountains of Christmas", cursive;
}

.bottom_nav .p {
  color: grey;
}

.bottom_nav .left .search_bar input[type="text"]{
  border: 1px solid #666666;
  padding: 5px 10px; 
  outline: none;
  transition: all 0.5s linear;
}

.bottom_nav .left .search_bar input[type="text"]:focus{
  width: 250px;
}

.bottom_nav .right ul{
  display: flex;
}

.bottom_nav .right ul li{
  margin: 0 12px;
}


.bottom_nav .right ul li a{
  display: block;
  padding: 8px 10px;
}

.bottom_nav :hover{
  color: white;
}

.top_nav{
  width: 100%;
  background: black;
  height: 45px;
  padding: 0 50px;
  
}

.top_nav :hover{
  color: red;
}

.top_nav ul{
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.top_nav ul li a{
  color: white;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
}

.banner img{
  width: 100%;
  height: 400px;
}
@media (max-width: 767px) {
  .container {
    height: 400px;
  }
}
@media only screen and (max-width: 767px) {
  .top_nav {
    display: none;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isSticky: false,
      searchText: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const topNavHeight = this.$el.querySelector('.top-nav').offsetHeight;
      if (window.pageYOffset > topNavHeight) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
handleSearch() {
  if (this.searchText) {
    this.$router.push({ path: '/products', query: { q: this.searchText}});
  }
}
    
  },
};
</script>

