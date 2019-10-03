<template>
  <div>
    <nav-bar />
    <sign-in />
  </div>
</template>
<script>
import signin from "@/components/home/signup";
import navbar from "@/components/home/navbar";
export default {
  components: {
    "sign-in": signin,
    "nav-bar": navbar
  }
};
</script>
<style scoped>
</style>