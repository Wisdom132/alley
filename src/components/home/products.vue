<template>
  <div class="container">
    <nav class="navbar navbar-light border">
  <a class="navbar-brand">Alley</a>
  <form class="form-inline col-md-8">
    <input class="form-control mr-sm-2 col-md-8" type="search" placeholder="Search for Properties according to location" aria-label="Search">
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    <div class="row mt-4 mx-auto">
      <div class="col-md-4" v-for="(product, index) in products" :key="index">
        <figure class="card card-product shadow mx-auto" style="width:18rem;height:30rem !important;">
          <div class="img-wrap">
            <img
              :src="'http://localhost:3000/'+product.files[1].path"
              class="card-image-top"
            />
          </div>
          <figcaption class="info-wrap container">
            <h4 class="title">{{product.name}}</h4>
            <p
              class="desc"
            >{{product.description |truncate}} </p>
            <!-- rating-wrap.// -->
             <dl class="row">
                    <dt class="col-sm-3">Street</dt>
                    <dd class="col-sm-9">{{product.street}}</dd>

                    <dt class="col-sm-3">City</dt>
                    <dd class="col-sm-9">{{product.city}}</dd>

                    <dt class="col-sm-3">State</dt>
                    <dd class="col-sm-9">{{product.state}}</dd>
                  </dl>
          </figcaption>
          <div class="card-footer container">
            <router-link :to="'/uniqueProduct/'+product._id" class="btn btn-sm btn-primary float-right">Details</router-link>
            <div class="price-wrap h5">
              <span class="price-new"><del>N</del>{{product.price}}</span>
              <del class="price-old pl-2">N{{product.price + 700}}</del>
            </div>
          </div>
        </figure>


          

      </div>
      	
    </div>
    <div>
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
.navbar {
  background: #fffafa !important;
}
.container {
  width:100%;
}
.card-image-top {
  height:180px !important;
  width:18rem; 
}
</style>
