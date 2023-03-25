<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__row">
        <div class="footer__column">
          <h5>About Me</h5>
          <ul>
            <li><a href="#">My Story</a></li>
            <li><a href="#">Contact Me</a>
            <p>079 308 6789</p>
            </li>
          </ul>
        </div>

        <div class="footer__column">
          <h5>Follow Me</h5>
          <ul>
            <li><a href="#" class="fa fa-">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer__divider">
      <div class="footer__row">
        <div class="footer__column">
          <p>&copy; {{ currentYear }} Archie-Vable Gaming. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default{
  name: 'footer-',
  data() {
    return {
      currentYear: null,
    };
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  },
}

</script>

<style scoped>
.footer{
  background-color: #2e2c2c;
  padding: 50px 0;
  text-align: center;
  position: absolute;
  min-width: 99vw;
}

.footer__container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  bottom: 0;
  width: 100vw;
}

.footer__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.footer__column {
  flex: 1;
  max-width: 300px;
  margin: 0 20px;
}

.footer__column h5{
  color: #fff;
  font-size: 18px;
  margin-bottom: 25px;
}

.footer__column ul li a{
  color: #fff;
  font-size: 14px;
  line-height: 24px;
}

.footer__divider {
  border-color: #fff;
  margin: 40px 0;
}

.footer__column p{
  color: grey;
  font-size: 14px;
  line-height: 24px;
}
</style>


  