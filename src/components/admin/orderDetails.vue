<template>
    <div>
        <pre>{{this.order}}</pre>
    </div>
</template>

<script>
import axios from 'axios'
export default {
 data() {
     return {
         order:[],
     }
 },
 methods: {
     getOrder(id) {
         axios.get('http://localhost:3000/orders/'+id)
         .then(response => {
             this.order = response.data;
             console.log(this.order);
         }).catch(error => {
             console.log(error);
         })
     }
 },
 created() {
     this.getOrder(this.$route.params.id);
 }
}
</script>

<style>

</style>
