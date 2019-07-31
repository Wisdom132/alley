<template>
  <div>
     <div class="row">
      <div class="col-12">
       <table class="table table-responsive-sm table-striped">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Vendor</th>
      <th scope="col">Category</th>
      <th scope="col">Street</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.id">
      <td>{{product.product_name}}</td>
      <td>{{product.vendor}}</td>
      <td>{{product.category}}</td>
      <td>{{product.street}}</td>
      <td>{{product.city}}</td>
      <td>{{product.state}}</td>
      <td><button class="btn btn-primary">Details</button></td>
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
     products:[
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       {product_name:'3 bed room flat',vendor:'Wisdom Ekpot', category:'bungalow',street:'oku street',city:'uyo',state:'Aba'},
       
     ]
   }
 }
};
</script>

<style>
</style>
