<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-responsive-sm table-striped">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Vendor</th>
              <th scope="col">Category</th>
              <th scope="col">Street</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{product.name}}</td>
              <td>{{product.vendor[0].f_name}}{{product.vendor[0].l_name}}</td>
              <td>{{product.category}}</td>
              <td>{{product.street}}</td>
              <td>{{product.city}}</td>
              <td>{{product.state}}</td>
              <td>
                <router-link
                  class="btn btn-primary btn-sm"
                  :to="'/productDeatils/'+product._id"
                >Details</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get("products")
        .then(response => {
          //  this.files = response.data[1].files[1].path;
          this.products = response.data;
          console.log(this.products);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style>
</style>
