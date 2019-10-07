<template>
  <div>
    <nav-bar />
    <section class="hero-banner magic-ball mt-5">
      <div class="container">
        <div class="row align-items-center text-center text-md-left">
          <div class="col-md-6 col-lg-5 mb-5 mb-md-0 col-sm-12">
            <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            <p
              class="text-secondary"
            >Air seed winged lights saw kind whales in sixth dont kind whales in sixth dont seas dron image so fish all tree meat dont there</p>
            <router-link class="btn btn-sm button-hero" to="/product">Get Started</router-link>
          </div>
          <div class="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
            <img class="img-fluid" src="../images/2.jpg" alt />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "@/components/home/navbar";
export default {
  components: {
    "nav-bar": navbar
  },
  data() {
    return {
      height: window.outerHeight
    };
  },
  created() {
    console.log(this.height);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
.button-hero {
  background: #0d5fb5;
  border: 0px;
}

.button-hero:hover {
  background: #0d5fb5 !important;
  border: 0px;
}
.magic-ball {
  position: relative;
}

.magic-ball::before {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 8px solid #0d5fb5;
  opacity: 0.5;
  position: absolute;
  bottom: -68px;
  left: -15px;
}

@media (min-width: 768px) {
  .magic-ball::before {
    width: 70px;
    height: 70px;
    left: -35px;
    border: 15px solid #0d5fb5;
  }
}

.magic-ball::after {
  content: "";
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #ebebff;
  opacity: 0.5;
  position: absolute;
  bottom: -263px;
  left: 70px;
}

@media (min-width: 768px) {
  .magic-ball::after {
    width: 98px;
    height: 98px;
    left: 165px;
  }
}

.magic-ball-about::before {
  top: 265px;
  left: -32px;
}

.magic-ball-about::after {
  top: 65px;
  left: 135px;
}

.magic-ball-testimonial::before {
  top: 265px;
  left: -32px;
}

.magic-ball-testimonial::after {
  top: 130px;
  left: 135px;
}

.magic-ball-banner::before {
  top: 80px;
  left: 130px;
}

.magic-ball-banner::after {
  width: 70px;
  height: 70px;
  top: 270px;
  left: 170px;
}

.magic-ball-sm::before {
  width: 60px;
  height: 60px;
  top: 280px;
  left: -25px;
}

.magic-ball-sm::after {
  width: 60px;
  height: 60px;
  top: 160px;
  left: 80px;
}
.hero-banner {
  padding-top: 100px;
}
@media (max-width: 500px) {
  .hero-banner {
    padding-top: 10px;
  }
}

@media (min-width: 992px) {
  .hero-banner {
    padding-top: 100px;
    color: #0d5fb5 !important;
  }
}

.hero-banner h1 {
  text-transform: uppercase;
  color: #0d5fb5;
  margin-bottom: 15px;
}

@media (max-width: 1200px) {
  .hero-banner h1 {
    font-size: 40px;
    color: #0d5fb5 !important;
  }
}

@media (max-width: 991px) {
  .hero-banner h1 {
    font-size: 30px;
    color: #0d5fb5 !important;
  }
}

.hero-banner-sm {
  background: url(../images/test.png) left center no-repeat;
  background-size: cover;
  padding-top: 140px;
  padding-bottom: 90px;
}

@media (min-width: 992px) {
  .hero-banner-sm {
    padding-top: 240px;
    padding-bottom: 140px;
  }
}

.hero-banner-sm h1 {
  text-transform: uppercase;
  color: #0d5fb5 !important;
}

@media (max-width: 991px) {
  .hero-banner-sm h1 {
    font-size: 38px;
  }
}

@media (max-width: 768px) {
  .hero-banner-sm h1 {
    font-size: 28px;
  }
}

.hero-banner-sm p {
  margin-bottom: 0;
}

.hero-banner-sm-content {
  max-width: 400px;
}
</style>
