<template>
  <div>
    <div class="row">
      <div class="col-md-4" v-for="(product, index) in newProduct" :key="index">
        <figure class="card card-product shadow mx-auto" style="width:18rem">
          <div class="img-wrap">
            <img :src="'http://localhost:3000/'+product.files[1].path" class="card-image-top" />
          </div>
          <figcaption class="info-wrap container">
            <h4 class="title">{{product.name}}</h4>
            <p class="desc">{{product.description |truncate}}</p>
            <!-- <dl class="row">
              <dt class="col-sm-3">Street</dt>
              <dd class="col-sm-9">{{product.street}}</dd>

              <dt class="col-sm-3">City</dt>
              <dd class="col-sm-9">{{product.city}}</dd>

              <dt class="col-sm-3">State</dt>
              <dd class="col-sm-9">{{product.state}}</dd>

              <dt class="col-sm-3">Price</dt>
              <dd class="col-sm-9">
                <del>N</del>
                {{product.price}}
              </dd>
            </dl>-->
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
      files: ""
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
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    },
    getProducts() {
      axios
        .get("http://localhost:3000/products")
        .then(response => {
          // console.log(response);

          // get loged in user id
          let info = localStorage.getItem("jwtToken");
          let decoded = VueJwtDecode.decode(info);
          console.log({ decodedToken: decoded });
          let decodedId = decoded.userId;

          // get vendor that created product
          this.products = response.data;
          const products = this.products;
          let id;

          products.forEach((product, index) => {
            let sorted = product.vendor;
            let userId = sorted.forEach(vendor => {
              id = vendor.userId;

              if (id == decodedId) {
                this.newProduct.push(product);
                console.log(this.newProduct);
              }
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
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
