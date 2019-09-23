<template>
  <div class="row">
    <div class="col-md-10 offset-md-1">
      <user-card></user-card>
    </div>
  </div>
</template>
<script>
// import EditProfileForm from "@/components/vendor/UserProfile/EditProfileForm.vue";
import UserCard from "@/components/vendor/UserProfile/UserCard.vue";
import MembersCard from "@/components/vendor/UserProfile/MembersCard.vue";
export default {
  components: {
    // EditProfileForm,
    UserCard,
    MembersCard
  }
};
</script>
<style>
</style>
