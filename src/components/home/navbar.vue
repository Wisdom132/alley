<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent border-0">
      <div class="container">
        <a class="navbar-brand text-dark" href="#">Alley</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav text-dark">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/product">Properties</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blogs">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-toggle="modal"
                data-target="#exampleModalsignup"
              >Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <signup />
  </div>
</template>

<script>
// import login from '@/pages/login'
import signup from "@/components/home/signup";

export default {
  components: {
    signup
  }
};
</script>

<style scoped>
@media (min-width: 998px) {
  .navbar {
    min-height: 50px !important;
  }
}
.nav-link {
  color: black !important;
}
</style>
