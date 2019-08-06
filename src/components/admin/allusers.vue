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
      <th scope="col">Gender</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{user.id}}</td>
      <td>{{user.f_name}}</td>
      <td>{{user.l_name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phone}}</td>
      <td>{{user.gender}}</td>
      <td>{{user.location}}</td>


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
users: [
  {
    id: 1,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747",
    location:"100 unit estate,off okigwe road uyo,akwa ibom,100 unit estate,off okigwe road uyo,akwa ibom",
    gender:"male"

  },
  {
    id: 2,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747",
       location:"100 unit estate,off okigwe road uyo,akwa ibom",
    gender:"male"
  },
  {
    id: 33,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747",
       location:"100 unit estate,off okigwe road uyo,akwa ibom",
    gender:"male"
  },
  {
    id: 3,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747",
       location:"100 unit estate,off okigwe road uyo,akwa ibom",
    gender:"male"
  },
  {
    id: 4,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747",
       location:"100 unit estate,off okigwe road uyo,akwa ibom",
    gender:"male"
  },
  {
    id: 5,
    f_name: "Dakota",
    l_name: "Rice",
    email: "Dakota@gmail.com",
    phone: "080966500747",
       location:"100 unit estate,off okigwe road uyo,akwa ibom",
    gender:"male"
  },
]
      }

  }
};
</script>
<style>
</style>
