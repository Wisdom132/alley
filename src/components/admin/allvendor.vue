<template>
    <div class="row">
      <div class="col-12">
       <table class="table table-responsive-sm table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="vendor in vendors" :key="vendor.id">
      <td>{{vendor.id}}</td>
      <td>{{vendor.f_name}}</td>
      <td>{{vendor.l_name}}</td>
      <td>{{vendor.email}}</td>
      <td>{{vendor.phone}}</td>
      <td><router-link class="btn btn-primary" to="/admin/vendor">View</router-link></td>


    </tr>
  </tbody>
</table>
      </div>

    </div>
</template>
<script>
export default {

  data() {
      return {
vendors: [
  {
    id: 1,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747"
  },
  {
    id: 2,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747"
  },
  {
    id: 2,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747"
  },
  {
    id: 3,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747"
  },
  {
    id: 4,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747"
  },
  {
    id: 5,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747"
  },
]
      }

  }
};
</script>
<style>
</style>
