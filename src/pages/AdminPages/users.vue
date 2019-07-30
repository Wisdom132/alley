<template>
 <div class="row">
  <div class="col-md-12">
    <card>
      <all-users />
    </card>
  </div>
 </div>
</template>
<script>
import allusers from '@/components/admin/allusers'
export default {
  components: {
    'all-users':allusers
  }
};
</script>
<style>
</style>
