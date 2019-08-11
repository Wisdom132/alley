<template>
    <div class="row">
      <div class="col-md-12">
        <card>
         <all-contact />
        </card>
      </div>

    </div>
</template>
<script>
import allContact from '@/components/admin/allContact'
export default {
  components: {
    'all-contact':allContact
  }
};
</script>
<style>
</style>