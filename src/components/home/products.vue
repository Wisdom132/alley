<template id="over">
  <div class="container">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-10">
        <div class="row mt-4">
          <div
            class="col-lg-3 col-md-4 col-xl-3 col-sm-6 col-xsm-6"
            v-for="(product, index) in products"
            :key="index"
          >
            <div class="card mx-autot" style="width: auto;">
              <img :src="'http://localhost:3000/'+product.files[1].path" class="img-fluid" />
              <div class="card-body mb-2">
                <h5 class="card-title mb-2">
                  <b>{{product.name}}</b>
                </h5>
                <p class="card-text">{{product.description |truncate}}</p>
                <router-link
                  :to="'/uniqueProduct/'+product._id"
                  class="btn btn-sm btn-primary float-right"
                >View</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      files: ""
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get("products")
        .then(response => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0, 40) + "...";
      }
      return value;
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
.navbar {
  background: #fffafa !important;
}
.container {
  width: 100%;
}
#over {
  background-color: whitesmoke !important;
}
</style>
