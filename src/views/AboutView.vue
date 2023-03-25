<template>
  <body>
    <div class="container">
      <div class="about-us">
        <h1>About us</h1>
        <p>This is a website that specializes in providing top-quality Gaming products at affordable prices for gamers. With our expertise in information gathering and resourcefulness, we are committed to delivering exceptional results to our clients.</p>
        <h2>Our Mission</h2>
        <p>We understand that gaming equipment can be expensive, so our website offers
          discounted prices to ensure that everyone has access to the tools they need to enjoy 
          their gaming experience to the fullest</p>
        <h2>Our Team</h2>
        <ul>
          <li><strong>Luntu Archie Sogeyana</strong> - CEO</li>
          <li><strong>Mathew Thomas</strong> - Collaborator</li>
          <li><strong>Timothy Jeke</strong> - Collaborator</li>
          <li><strong>Sara Lee</strong> - Collaborator</li>
        </ul>
        <h2>Contact Us</h2>
        <p>If you have any questions or comments, please don't hesitate to get in touch with us. You can reach us by phone at <a href="tel:079 308 6789">079 308 6789</a>, or by email at <a href="mailto:info@company.com">sogeyanaluntu@gmail.com</a>.</p>
      </div>
    </div>
  </body>
</template>
<script>
export default {
  name: 'AboutUs'
}


</script>

<style scoped>
.container {
  padding-top: 100px;
}
@media (max-width: 979px) {
  .container {
    padding-top: 100px;
  }
}
body {
  position: relative;
  background-image: url('https://i.postimg.cc/4ymwDgqT/Archie-Vable-Gaming-Logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  font-family: Arial, sans-serif;
  margin: 0;
  z-index: 1;
}
.about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color:  white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
}
.about-us h1 {
  font-size: 36px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.about-us h2 {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
  text-transform: uppercase;
}
.about-us ul {
  margin-top: 20px;
  margin-bottom: 20px;
  list-style-type: none;
  padding: 0;
}
.about-us li {
  font-size: 18px;
  margin-bottom: 10px;
}
.about-us strong {
  font-weight: bold;
}
.about-us a {
  color: #007bff;
  text-decoration: none;
}
.about-us a:hover {
  text-decoration: underline;
}
</style>

