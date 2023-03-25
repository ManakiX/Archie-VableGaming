<template>
  <body> 
    <div class="carousel" @mouseover="stopCarousel" @mouseleave="startCarousel">
      <div class="image-wrapper" :style="{ transform: 'translateX(' + (-currentImage * 100) + '%)' }">
        <div v-for="(image, index) in images" :key="index" class="image">
          <a :href="links[index]">
            <img :src="image.src" :alt="image.alt">
          </a>
        </div>
      </div>
      <div class="controls">
        <button @click="prevImage">Prev</button>
        <button @click="nextImage">Next</button>
      </div>
      <div class="position-indicator">
        {{ currentImage + 1 }} / {{ images.length }}
      </div>
    </div>
    <!-- <section>
      <div class="Img-link">
        <div class="image-wrapper2">
          <div v-for="(image, index) in images2" :key="index" class="image">
            <a :href="links[index]">
              <img :src="image.src" :alt="image.alt">
            </a>
          </div>
        </div>
      </div>
    </section> -->
  </body>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'https://i.postimg.cc/y60yxcq1/1320x600-Asrock-sale-min-1320x600.jpg', alt: 'Slide 1' },
        { src: 'https://i.postimg.cc/1XyBs33c/1320x600-g-ALAX-new-min-1320x600.jpg', alt: 'Slide 2' },
        { src: 'https://i.postimg.cc/KztbCJ13/1320x600-AMD-Last-Of-Us-min-1320x600-1.jpg', alt: 'Slide 3' }
      ],
        links: [
        'http://localhost:8080/products',
        'http://localhost:8080/products',
        'http://localhost:8080/products',
      ],

images2: [
      { src: 'https://i.postimg.cc/cJqQ9tt2/components.jpg', alt:'ad1'},
      { src: 'https://i.postimg.cc/W3tWgHmR/pi-Fa-Pz55dpboa-Hcm7uj4w-T.jpg', alt: 'ad2'},
],

      currentImage: 0,
      interval: null,
      transitionDuration: 1000
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    prevImage() {
      this.currentImage = (this.currentImage === 0) ? (this.images.length - 1) : (this.currentImage - 1);
    },
  nextImage() {
    if (this.currentImage === this.images.length - 1) {
      this.currentImage = 0;
    } else {
      this.currentImage++
    }
  },
 
    startCarousel() {
      this.interval = setInterval(() => {
        this.nextImage()
      }, 3500)
    },
    stopCarousel() {
      clearInterval(this.interval)
    }
  }
}
</script>


<style>

body {
  position: relative;
  background-image: url('https://i.postimg.cc/4ymwDgqT/Archie-Vable-Gaming-Logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  font-family: Arial, sans-serif;
  margin: 0;
  z-index: 1;
  min-height: 100vh;
}

.content-container {
  display:flex;
  flex-direction: column;
}





.image-wrapper2 {
  height: 25px;
  width: 100%;
}


.image-wrapper2 .image {

  margin: 50px 20px 50px 20px;
  height: 500px;
}

.image-wrapper2 .image:last-child {
  margin-right: 0;
}

.carousel {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
}
.image-wrapper {
  display: flex;
  transition: transform 1s ease-in-out;
}
.image {
  flex: 0 0 100%;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.controls button {
  padding: 10px;
  font-size: 16px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.position-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
}

@media (max-width: 767px) {
  .carousel {
    height: 400px;
  }
}
</style>







