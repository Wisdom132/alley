<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-4" v-for="(product, index) in products" :key="index">
        <figure class="card card-product shadow" style="width:18rem" >
          <div class="img-wrap">
            <img
              :src="'http://localhost:3000/'+product.files[1].path"
              class="img-fluid"
            />
          </div>
          <figcaption class="info-wrap container">
            <h4 class="title">{{product.name}}</h4>
            <p
              class="desc"
            >{{product.description |truncate}} </p>
            <div class="rating-wrap">
              <ul class="rating-stars">
                <li>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </li>
              </ul>
            </div>
            <!-- rating-wrap.// -->
          </figcaption>
          <div class="card-footer container">
            <router-link :to="'/uniqueProduct/'+product._id" class="btn btn-sm btn-primary float-right">Details</router-link>
            <div class="price-wrap h5">
              <span class="price-new">N{{product.price}}</span>
              <del class="price-old pl-2">$1980</del>
            </div>
          </div>
        </figure>
      </div>
      	
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products:[],
      files:''
    }
  },
  methods: {
    getProducts() {
       axios.get('http://localhost:3000/products')
       .then(response => {
        //  this.files = response.data[1].files[1].path;
         this.products = response.data
         console.log(this.products)
       }).catch(err=> {
         console.log(err)
       })
    }
  },
   filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0, 50) + '...';
      }
      return value
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style scoped>
.container {
  width:100%;
}
ul li {
  list-style: none;
}
</style>
