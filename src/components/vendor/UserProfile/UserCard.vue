<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
        <h4 class="title">{{profile.f_name}} {{profile.l_name}}
          <br>
          <a  class="text-dark" href="#">
            <small class="text-dark">{{profile.email}}</small><br>
            <small class="text-dark">{{profile.phone}}</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        {{profile.address}}
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div class="col-md-6">
          <div >
          <h5>Agency
            <br>
            <small>{{profile.agency}}</small>
          </h5>
        </div>
        </div>
        <div class="col-md-6">
          <div >
          <h5>Agency Address
            <br>
            <small>{{profile.agency_address}}</small>
          </h5>
        </div>
        </div>
        
      </div>
      <button class="btn btn-primary">Edit</button>
    </div>
  </card>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'
export default {
  data() {
    return {
       profile:[],
    }
  },
  methods: {
    getProfile() {
      let info = localStorage.getItem('jwtToken');
      let decoded = VueJwtDecode.decode(info);
      // console.log(decoded)
      this.profile = decoded
      console.log(this.profile)

    },



    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  },
  created() {
    this.getProfile();
  }
};
</script>
<style>
</style>
