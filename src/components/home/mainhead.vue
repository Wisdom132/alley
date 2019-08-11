<template>
  <div>
    <section id="header" :style="{ height: (this.height - this.decrement) + 'px' }">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-12 text-light">
            <h3
              class="text-uppercase headerText"
              :style="{ marginTop: (this.height / 2.9) + 'px' }"
            >
              DON’T LOOK ANYWHERE,
              <br />THIS IS THE BEST PLACE ON WEB
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit reprehenderit
              vel ratione aut explicabo sunt.
            </p>
            <button class="btn btn-primary">View Properties</button>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div class="container">
            <div class="row mt-5 mb-5">
                <div class="col-md-8 offset-md-2 text-center">
                    <h3>OUR WORKING PROCESS</h3>
                    <p>It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <div class="total-work-process d-flex flex-wrap justify-content-around align-items-center">
						<div class="single-work-process">
							<div class="work-icon-box">
								<span class="lnr lnr-funnel"></span>
							</div>
							<h4 class="caption">1. Signup on alley</h4>
						</div>
						<div class="work-arrow">
							<img src="./../images/work-arrow.png" alt="">
						</div>
						<div class="single-work-process">
							<div class="work-icon-box">
								<span class="lnr lnr-layers"></span>
							</div>
							<h4 class="caption">2. Login on alley</h4>
						</div>
						<div class="work-arrow">
							<img src="./../images/work-arrow.png" alt="">
						</div>
						<div class="single-work-process">
							<div class="work-icon-box">
								<span class="lnr lnr-paw"></span>
							</div>
							<h4 class="caption">3. Post Properties</h4>
						</div>
						<div class="work-arrow">
							<img src="./../images/work-arrow.png" alt="">
						</div>
						<div class="single-work-process">
							<div class="work-icon-box">
								<span class="lnr lnr-smile"></span>
							</div>
							<h4 class="caption">4. Get Notified</h4>
						</div>
					</div>
                </div>
                
            </div>
        </div>
    </section>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      decrement: 45,
      height: window.innerHeight
    };
  },
  created() {
    console.log(this.height);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
#header {
  background: linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)),
    url("https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  background-attachment: fixed;
  /* clip-path: polygon(0 0, 100% 0%, 100% 71%, 0% 100%); */
  overflow-x: hidden;
}
* {
  font-family: "Poppins", sans-serif;
}
.single-work-process .work-icon-box {
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 3px;
  border: 1px solid #eee;
  text-align: center;
}

.single-work-process .work-icon-box span {
  line-height: 118px;
  font-size: 42px;
}
.single-work-process .caption {
  font-size: 20px;
  margin-top: 20px;
}
.work-arrow {
  margin-top: -30px;
}

@media (max-width: 1199px) {
  .work-arrow img {
    width: 40px;
    height: auto;
  }
}

@media (max-width: 991px) {
  .work-arrow img {
    width: 25px;
    height: auto;
  }
}

@media (max-width: 767px) {
  .work-arrow {
    display: none;
  }
}
@media (max-width: 991px) {
  .total-work-process {
    padding: 0;
  }
}

.single-work-process {
  margin-top: 30px;
  text-align: center;
}

@media (max-width: 767px) {
  .single-work-process {
    width: 100%;
  }
}

</style>
