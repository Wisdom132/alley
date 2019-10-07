<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top border-0" id="navbar">
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
              <router-link class="nav-link" to="/vendorlogin">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signin">signup</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
window.onscroll = function() {
  myfunction();
};

function myfunction() {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 40) {
    document.getElementById("navbar").style.backgroundColor = "#0d5fb5";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}
export default {};
</script>

<style scoped>
@media (min-width: 998px) {
  .navbar {
    min-height: 50px !important;
    background: transparent;
  }
}
.nav-link {
  color: black !important;
}
</style>
