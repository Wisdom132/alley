<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/vendor/dashboard" name="Dashboard" icon="ti-view-grid" />
        <sidebar-link to="/vendor/profile" name="My Profile" icon="ti-user" />
        <sidebar-link to="/vendor/products" name="My Products" icon="ti-view-list-alt" />
        <sidebar-link to="/vendor/addproduct" name="Add Product" icon="ti-plus" />
        <sidebar-link to="/" name="Logout" icon="ti-back-left" />
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
