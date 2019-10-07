<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-responsive-sm table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Requested Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order,index) in orders" :key="index">
              <td>{{order.f_name}} {{order.l_name}}</td>
              <td>{{order.email}}</td>
              <td>{{order.phone}}</td>
              <td>{{order.requestedDate | moment}}</td>
              <td>
                <router-link :to="'/order/'+order._id" class="btn btn-primary btn-sm">Details</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      orders: []
    };
  },
  methods: {
    getOrders() {
      this.$http
        .get("orders")
        .then(response => {
          this.orders = response.data;
          console.log(this.orders);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  created() {
    this.getOrders();
  }
};
</script>

<style>
</style>
