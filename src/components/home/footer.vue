<template>
  <div>
    <footer style="background-color:#0d5fb5">
      <div class="container">
        <div class="footer-content d-flex justify-content-between align-items-center flex-wrap">
          <div class="logo">
            <a href="index.html">
              <img src="img/logo.png" alt />
            </a>
          </div>
          <div class="copy-right-text">
            Copyright &copy; 2017 | All rights reserved to
            <a href="#" class="text-light">Alley.ng</a>| Designed by Wisdom
          </div>
          <div class="footer-social">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i class="fa fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  /* margin-top: 100px; */
  padding: 15px 0;
}

footer .copy-right-text {
  color: #fff;
}

@media (max-width: 991px) {
  footer .copy-right-text {
    margin: 20px 0;
  }
}

footer .copy-right-text a {
  color: #0d5fb5;
}

.footer-social a {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
  text-align: center;
  line-height: 30px;
  color: #fff;
  position: relative;
}

.footer-social a i {
  position: relative;
  z-index: 2;
  color: #fff;
}

.footer-social a:after {
  position: absolute;
  z-index: 1;
  content: "";
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  left: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  z-index: 1;
}

.footer-social a:hover {
  border: 1px solid transparent;
}

.footer-social a:hover:after {
  opacity: 1;
}
</style>
