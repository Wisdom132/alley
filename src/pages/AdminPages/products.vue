<template>
    <div class="row">
      <div class="col-md-12">
        <card>
         <all-products />
        </card>
      </div>

    </div>
</template>
<script>
import allproducts from '@/components/admin/allproducts'
export default {
  components: {
    'all-products':allproducts
  }
};
</script>
<style>
</style>
