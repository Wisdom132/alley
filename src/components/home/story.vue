<template>
  <div>
    <section class="story-area mt-5 mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-1"></div>
          <div class="col-lg-7">
            <div class="story-box">
              <h6 class="text-uppercase">About US</h6>
              <p>
                Alley is an authentic rental platform and online marketplace for Landlords, tenants and real estate agents. We are an alley between towns and and cities for accessing the best rental information for your specific needs.
                We really appreciate feedback and respond quickly to accommodation requests.
                If you seek to resolve any issues or seek accommodation in areas not listed on our platform
              </p>
              <a href="#contact" class="btn btn-primary btn-sm">
                Contact Us
                <span class="ti-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.story-area,
:after {
  background-image: -moz-linear-gradient(0deg, #0d5fb5 0%, #4cd4e3 100%);
  background-image: -webkit-linear-gradient(0deg, #0d5fb5 0%, #4cd4e3 100%);
  background-image: -ms-linear-gradient(0deg, #0d5fb5 0%, #4cd4e3 100%);
}
.story-area {
  padding: 90px 0;
  position: relative;
  position: relative;
}

.story-area:after {
  position: absolute;
  content: "";
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: url(./../images/story-bg.jpg) no-repeat center center/cover;
  z-index: 1;
}

@media (max-width: 991px) {
  .story-area:after {
    display: none;
  }
}

.story-area .story-box {
  padding: 60px 90px;
  background: #fff;
  border-radius: 3px;
  position: relative;
  z-index: 2;
}

@media (max-width: 991px) {
  .story-area .story-box {
    padding: 30px 50px;
    text-align: center;
  }
}

@media (max-width: 575px) {
  .story-area .story-box {
    padding: 30px;
  }
}

.story-area .story-box h6 {
  margin-bottom: 15px;
}

.story-area .primary-btn {
  border: 1px solid #eee;
}

.story-area .primary-btn:hover {
  border: 1px solid transparent;
}

.story-area .primary-btn:hover span {
  background: -webkit-linear-gradient(0deg, #fff, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
