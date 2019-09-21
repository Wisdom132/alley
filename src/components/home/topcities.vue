<template>
  <section>
    <div class="container">
      <div class="row magic-ball">
        <div class="col-md-12 mt-5 mb-5 text-center">
          <h4>Top Cities</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="city in cities" :key="city.id">
          <div class="card bg-dark text-white">
            <img class="card-img" :src="city.image" alt="Card image" />
            <div class="card-img-overlay text-center py-auto">
              <h5 class="card-title text-light" style="top:50%;position:relative">{{city.name}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cities: [
        {
          id: 1,
          name: "Uyo",
          image:
            "https://www.naijaloaded.com.ng/wp-content/uploads/2017/09/BtzpWRvIAAAuf1g.jpg"
        },
        {
          id: 2,
          name: "Eket",
          image:
            "http://www.travelstart.com.ng/blog/wp-content/uploads/2014/02/Lagos.jpg"
        },
        {
          id: 3,
          name: "Abak",
          image:
            "http://www.travelstart.com.ng/blog/wp-content/uploads/2014/02/Obudu-Calabar.jpg"
        },
        {
          id: 4,
          name: "Ikot ekpene",
          image:
            "http://www.travelstart.com.ng/blog/wp-content/uploads/2014/02/Abuja-Residential-Area.jpg"
        }
      ]
    };
  }
};
</script>
<style scoped>
.magic-ball {
  position: relative;
}

.magic-ball::before {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 8px solid #1004f3;
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
.card-img {
  height: 200px !important;
}
.card-img-overlay {
  background: linear-gradient(rgba(0, 0, 34, 0.5), rgba(0, 0, 34, 0.5));
  transition: background-color 500ms;
  cursor: pointer;
}
</style>