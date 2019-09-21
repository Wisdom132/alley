<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mt-5 mb-5 text-center">
          <h4>Top Cities</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3" v-for="city in cities" :key="city.id">
          <div class="card bg-dark text-white">
            <img class="card-img" :src="city.image" alt="Card image" />
            <div class="card-img-overlay text-center py-auto">
              <h5 class="card-title text-light">{{city.name}}</h5>
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
.card-img {
  height: 200px !important;
}
.card-img-overlay {
  background: linear-gradient(rgba(0, 0, 34, 0.5), rgba(0, 0, 34, 0.5));
}
.card-img-overlay:hover {
  transition: transparent ease-in 0.2s;
  /* background: transparent; */
}
</style>