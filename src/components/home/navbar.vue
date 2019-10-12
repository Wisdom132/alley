<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light sticky border-0" id="navbar">
      <div class="container">
        <a class="navbar-brand text-dark" href="#">
          <img src="../images/alley.png" alt width="30" height="30" />
        </a>
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

  if (scroll > 20) {
    document.getElementById("navbar").style.backgroundColor = "#0d5fb5";
    document.querySelectorAll(".nav-link").forEach(navlink => {
      navlink.style.color = "white";
    });
  } else if (scroll > 10) {
    document.getElementById("navbar").style.backgroundColor =
      "rgba(13,95,181,0.5)";
    document.querySelectorAll(".nav-link").forEach(navlink => {
      navlink.style.color = "black";
    });
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.querySelectorAll(".nav-link").forEach(navlink => {
      navlink.style.color = "black";
    });
  }
}
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
@media (min-width: 998px) {
  .navbar {
    min-height: 50px !important;
    background: transparent;
  }
}
.nav-link {
  font-size: 32px;
}
.sticky {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  border-top: 0;
}

@media (max-width: 768px) {
  .navbar {
    background: rgb(13, 95, 181) !important;
    margin-bottom: 111px;
  }
  .nav-link {
    color: white !important;
  }
}
</style>
