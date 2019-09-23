<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/admin/dashboard" name="Dashboard" icon="ti-panel" />
        <!-- <sidebar-link to="/admin/stats" name="User Profile" icon="ti-user"/> -->
        <sidebar-link to="/admin/vendors" name="All Vendors" icon="ti-view-list-alt" />
        <!-- <sidebar-link to="/admin/users" name="All Users" icon="ti-text"/> -->
        <sidebar-link to="/admin/products" name="All Products" icon="ti-pencil-alt2" />
        <sidebar-link to="/admin/orders" name="All Orders" icon="ti-map" />
        <sidebar-link to="/admin/contact" name="Contact" icon="ti-bell" />
        <sidebar-link to="/admin/allblog" name="All Blogs" icon="ti-bell" />
        <sidebar-link to="/admin/addblog" name="Add Blog" icon="ti-bell" />
        <sidebar-link to="/" name="Logout" icon="ti-bell" />
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
<style scoped>
</style>

