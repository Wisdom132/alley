<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="width: auto;">
          <img src="https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Product</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
       <div class="col-md-4">
        <div class="card" style="width: auto;">
          <img src="https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p
              class="card-text"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      products:''
    }
  },
  methods: {
    getProducts() {
      axios.get("http://localhost:3000/products")
      .then(response=> {
        this.products = response.data;
        console.log(this.products);
        // let info = localStorage.getItem('jwtToken');
        console.log(auth.userId);
        console.log(this.products[0].vendor[0].userId);
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    this.getProducts()
  }
};
</script>

<style>
</style>
