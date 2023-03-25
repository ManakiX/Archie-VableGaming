<template>
  <div>
    <DoubleNav></DoubleNav>
    <router-view/>
    <Footer></Footer>  
  </div>
</template>

<script>
import DoubleNav from '@/components/DoubleNav.vue'
import Footer from '@/components/FooterC.vue'
export default {
  components: { 
    Footer ,
    DoubleNav
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  z-index: 2;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
