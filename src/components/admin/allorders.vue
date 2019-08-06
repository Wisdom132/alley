<template>
    <div>
  <div class="row">
      <div class="col-12">
       <table class="table table-responsive-sm table-striped table-sm">
  <thead>
    <tr>
      <th scope="col">product name</th>
      <th scope="col">vendor name</th>
      <th scope="col">vendor email</th>
      <th scope="col">vendor phone</th>
      <th scope="col">user</th>
      <th scope="col">user email</th>
      <th scope="col">user phone</th>
      <th scope="col">action</th>


    </tr>
  </thead>
  <tbody>
    <tr v-for="order in orders" :key="order">
      <td>{{order.product_name}}</td>
      <td>{{order.vendor_name}}</td>
      <td>{{order.vendor_email}}</td>
      <td>{{order.vendor_phone}}</td>
      <td>{{order.user_name}}</td>
      <td>{{order.user_email}}</td>
      <td>{{order.user_phone}}</td>
      <td><button class="btn btn-primary btn-sm">View details</button></td>


    </tr>
  </tbody>
</table>
      </div>

    </div>
    </div>
</template>

<script>
export default {
 data() {
     return {
         orders:[
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},
             {product_name:'storey building',vendor_name:'wisdom ekpot',vendor_phone:'09086574563',vendor_email:'wisdom@gmail.com',user_name:'victor tim',user_phone:'0806867543357',user_email:'victor@yahoo.com'},

         ]
     }
 }
}
</script>

<style>

</style>
