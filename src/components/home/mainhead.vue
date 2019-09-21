<template>
  <div>
    <nav-bar />
    <section class="hero-banner magic-ball">
      <div class="container">
        <div class="row align-items-center text-center text-md-left">
          <div class="col-md-6 col-lg-5 mb-5 mb-md-0 col-sm-12">
            <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            <p>Air seed winged lights saw kind whales in sixth dont kind whales in sixth dont seas dron image so fish all tree meat dont there</p>
            <a class="btn btn-sm btn-primary button-hero" href="#">Get Started</a>
          </div>
          <div class="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
            <img class="img-fluid" src="../images/2.jpg" alt />
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="header">
      <nav-bar />
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-12 text-dark">
            <h3 class="text-uppercase headerText">
              DON’T LOOK ANYWHERE,
              THIS IS THE BEST PLACE ON WEB
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit reprehenderit
              vel ratione aut explicabo sunt.
            </p>
            <button class="btn btn-primary btn-sm">View Properties</button>
          </div>
        </div>
      </div>
    </section>-->
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
/* #header {
  background: url("../images/header.png");
  background-size: cover;
  height: 640px;
}
@media (max-width: 750px) {
  #header {
    background: url("../images/mediahead.png");
    background-size: cover;
    height: auto !important;
  }
  .headerText {
    padding-top: 120px !important;
  }
}
.headerText {
  padding-top: 180px;
}
.btn:hover {
  background: blue !important;
} */
.hero-banner {
  padding-top: 120px;
}
@media (max-width: 500px) {
  .hero-banner {
    padding-top: 10px;
  }
}

@media (min-width: 992px) {
  .hero-banner {
    padding-top: 100px;
  }
}

.hero-banner h1 {
  text-transform: uppercase;
  color: #6059f6;
  margin-bottom: 15px;
}

@media (max-width: 1200px) {
  .hero-banner h1 {
    font-size: 40px;
  }
}

@media (max-width: 991px) {
  .hero-banner h1 {
    font-size: 30px;
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
  color: #150bd8;
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
