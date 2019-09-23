<template>
  <div class="row">
    <div class="col-12">
      <table class="table table-responsive-sm table-striped">
        <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vendor in vendors" :key="vendor.id">
            <td>{{vendor.f_name}}</td>
            <td>{{vendor.l_name}}</td>
            <td>{{vendor.email}}</td>
            <td>{{vendor.phone}}</td>
            <td>
              <router-link class="btn btn-primary" :to="'/vendors/'+vendor._id">View</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      vendors: []
    };
  },
  methods: {
    getVendors() {
      this.$http
        .get("vendor")
        .then(response => {
          this.vendors = response.data;
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getVendors();
  }
};
</script>
<style>
</style>
