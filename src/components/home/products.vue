<template id="over">
  <div class="container-fluid mt-5">
    <div class="row mt-5" style="margin-top:90px !important;">
      <div class="col-md-3">
        <div>
          <div class="card shadow mt-4">
            <header class="card-header">
              <h5 class="card-title mt-2">Filter</h5>
            </header>
            <hr />
            <article class="card-body">
              <form @submit.prevent="topCitites">
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label>Search by city</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="citysearch"
                      placeholder="Uyo"
                      v-on:keyup.enter="topCitites()"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>Min price</label>
                    <input type="number" class="form-control" id="inputEmail4" placeholder="$0" />
                  </div>
                  <div class="form-group col-md-6 text-right">
                    <label>Max price</label>
                    <input type="number" class="form-control" placeholder="$1,0000" />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label>street</label>
                    <input type="text" class="form-control" placeholder="e.g Akwa ibom" />
                  </div>
                  <div class="form-group col-md-6">
                    <label>state</label>
                    <input type="text" class="form-control" placeholder="e.g Akwa ibom" />
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">Search</button>
                </div>
              </form>
            </article>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row mt-4">
          <div
            class="col-lg-4 col-md-6 col-xl-4 col-sm-6"
            v-for="(product, index) in products"
            :key="index"
          >
            <div class="card mx-autot" style="width: auto;">
              <img :src="product.files[0]" class="card-image-top" />
              <div class="card-body mb-2">
                <h5 class="card-title mb-2">
                  <b>{{product.name}}</b>
                </h5>
                <p class="card-text">{{product.description |truncate}}</p>
                <router-link
                  :to="'/uniqueProduct/'+product._id"
                  class="btn btn-sm btn-primary float-right"
                >View</router-link>
                <div class="badge badge-primary p-2">{{product.city}}</div>
                <div class="price-wrap mb-4">
                  <span class="price-new">
                    <del>N</del>
                    <b>{{product.price}}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <p class="text-center mb-0">{{currentPage+1 }} / {{ pages }}</p>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled: prevUrl === ''}">
            <button class="page-link" @click="checkPage(prevUrl)">Previous</button>
          </li>
          <li class="page-item" :class="{disabled: nextUrl === ''}">
            <button class="page-link" @click="checkPage(nextUrl)">Next</button>
          </li>
        </ul>-->
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
      currentPage: "",
      pages: "",
      prevUrl: "",
      nextUrl: "",
      files: "",
      citysearch: "",
      street: ""
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get("products")
        .then(response => {
          this.products = response.data;
          // this.currentPage = response.data.currentPage;
          // this.pages = response.data.pages;
          // this.nextUrl = response.data.nextUrl;
          // this.prevUrl = response.data.prevUrl;
          console.log(this.pages);
        })
        .catch(err => {
          console.log(err);
        });
    },

    // checkPage(url) {
    //   this.$http.get(url).then(response => {
    //     this.products = response.data.products;
    //     this.currentPage = response.data.currentPage;
    //     this.pages = response.data.pages;
    //     this.nextUrl = response.data.nextUrl;
    //     this.prevUrl = response.data.prevUrl;
    //   });
    // },
    topCitites() {
      this.$http
        .get("products/query?city=" + this.citysearch)
        .then(response => {
          this.products = response.data.products;
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
  padding-bottom: 90px;
  background-color: whitesmoke !important;
}
.card-image-top {
  height: 150px !important;
  width: 100%;
}
</style>
