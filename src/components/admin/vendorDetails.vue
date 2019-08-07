<template>
  <card class="card-user col-md-8 offset-md-2">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
        <h4 class="title">{{vendor.f_name}} {{vendor.l_name}}
          <br>
          <a href="#">
            <small>{{vendor.email}}</small><br />
            <small>{{vendor.phone}}</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        {{vendor.address}}
      </p>
      <div>
          <h5>Agency Name:</h5><small>{{vendor.agency}}</small>
            <h5>Agency Location:</h5><small>{{vendor.agency_address}}</small>

      </div>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
            <div class="col-md-4">
                <h5>Gender
            <br>
            <small>Male</small>
          </h5>
            </div>
             <div class="col-md-4">
                <h5>Number of Products
            <br>
            <small>5</small>
          </h5>
            </div>
             <div class="col-md-4">
                <h5>Date Created
            <br>
            <small>12 july 2019</small>
          </h5>
            </div>
            
          
        </div>
      <button class="btn btn-primary">Contact</button>
    </div>
  </card>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
     vendor:[],
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    },
    getVendor(id) {
      axios.get('http://localhost:3000/vendor/'+id)
      .then(response => {
        this.vendor = response.data
        console.log(this.vendor)
      }).catch(err => {
        console.log(err)
      })
    }
  },
   created() {
    this.getVendor(this.$route.params.id)
  }
};
</script>
<style>
</style>
