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
              <!-- <button class="btn btn-primary" @click="deleteVenodr(vendor._id)">Delete</button> -->
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
    },
    deleteVenodr(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to Get back this request!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete(`vendor/${id}`)
            .then(response => {
              console.log(response);
              // this.$router.push({ path: "/admin/orders" });
            })
            .catch(err => {
              console.log(err);
            });
          swal("This Request has been Deleted", {
            icon: "success"
          });
        } else {
          swal("This Request hasn't been Deleted");
        }
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
