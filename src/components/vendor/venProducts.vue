<template>
  <div>
    <div class="row" v-if="newProduct.length == 0">
      <div class="col-md-12">
        <div class="alert alert-danger text-light">Hello You dont Have any Products yet</div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-4" v-for="(product, index) in newProduct" :key="index">
        <figure class="card card-product shadow mx-auto" style="width:18rem">
          <div class="img-wrap">
            <img :src="product.files[0]" alt="hevhjr" class="card-image-top" />
          </div>
          <figcaption class="info-wrap container">
            <h4 class="title">{{product.name}}</h4>
            <p class="desc">{{product.description |truncate}}</p>
          </figcaption>
          <div class="card-footer container">
            <router-link
              :to="'/uniqueProduct/'+product._id"
              class="btn btn-sm btn-primary float-right"
            >Details</router-link>
            <button
              @click.prevent="deleteProduct(product._id)"
              class="btn btn-sm btn-danger float-right mr-2"
            >Delete</button>
            <router-link
              :to="'/uniqueProduct/'+product._id"
              class="btn btn-sm btn-info float-right mr-2"
            >Edit</router-link>
          </div>
        </figure>
      </div>
      <!-- <div class="text-center">
        <p class="text-center mb-0">{{currentPage+1 }} / {{ pages }}</p>
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{disabled: prevUrl === ''}">
            <button class="page-link" @click="checkPage(prevUrl)">Previous</button>
          </li>
          <li class="page-item" :class="{disabled: nextUrl === ''}">
            <button class="page-link" @click="checkPage(nextUrl)">Next</button>
          </li>
        </ul>
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      products: [],
      newProduct: [],
      files: "",
      currentPage: "",
      pages: "",
      prevUrl: "",
      nextUrl: ""
    };
  },
  filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0, 100) + "...";
      }
      return value;
    }
  },
  methods: {
    deleteProduct(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this product",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete(`products/${id}`)
            .then(response => {
              this.$router.push({ path: "/vendor/" });
            })
            .catch(err => {
              console.log(err);
            });
          swal("Poof! This File has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your file is safe!");
        }
      });
    },
    getProducts() {
      this.$http
        .get("products")
        .then(response => {
          // console.log(response);

          // get loged in user id
          let info = localStorage.getItem("jwtToken");
          let decoded = VueJwtDecode.decode(info);
          console.log({ decodedToken: decoded });
          let decodedId = decoded.userId;

          // get vendor that created product
          this.products = response.data;
          // this.currentPage = response.data.currentPage;
          // this.pages = response.data.pages;
          // this.nextUrl = response.data.nextUrl;
          // this.prevUrl = response.data.prevUrl;
          console.log(this.products);
          const products = this.products;
          let id;

          products.forEach((product, index) => {
            let sorted = product.vendor;
            let userId = sorted.forEach(vendor => {
              id = vendor.userId;

              if (id == decodedId) {
                this.newProduct.push(product);
                console.log({ vend: this.newProduct });
              } else {
                console.log("no product found");
              }
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    // checkPage(url) {
    //   this.$http.get(url).then(response => {
    //     this.newProduct = response.data.products;
    //     this.currentPage = response.data.currentPage;
    //     this.pages = response.data.pages;
    //     this.nextUrl = response.data.nextUrl;
    //     this.prevUrl = response.data.prevUrl;
    //   });
    // }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
.card-image-top {
  height: 180px !important;
  width: 18rem;
}
</style>
