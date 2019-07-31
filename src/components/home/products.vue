<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-4">
        <figure class="card card-product shadow" style="width:18rem">
          <div class="img-wrap">
            <img
              src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="img-fluid"
            />
          </div>
          <figcaption class="info-wrap container">
            <h4 class="title">Product name goes here</h4>
            <p
              class="desc"
            >Some small description goes here Some small description goes here Some small description goes here</p>
            <div class="rating-wrap">
              <ul class="rating-stars">
                <li>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </li>
              </ul>
            </div>
            <!-- rating-wrap.// -->
          </figcaption>
          <div class="card-footer container">
            <router-link to="/uniqueProduct" class="btn btn-sm btn-primary float-right">Details</router-link>
            <div class="price-wrap h5">
              <span class="price-new">$1280</span>
              <del class="price-old pl-2">$1980</del>
            </div>
          </div>
        </figure>
      </div>
	  <div class="col-md-4">
        <figure class="card card-product shadow" style="width:18rem">
          <div class="img-wrap">
            <img
              src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="img-fluid"
            />
          </div>
          <figcaption class="info-wrap container">
            <h4 class="title">Product name goes here</h4>
            <p
              class="desc"
            >Some small description goes here Some small description goes here Some small description goes here</p>
            <div class="rating-wrap">
              <ul class="rating-stars">
                <li>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </li>
              </ul>
            </div>
            <!-- rating-wrap.// -->
          </figcaption>
          <div class="card-footer container">
            <router-link to="/uniqueProduct" class="btn btn-sm btn-primary float-right">Details</router-link>
            <div class="price-wrap h5">
              <span class="price-new">N1280</span>
              <del class="price-old pl-2">N1980</del>
            </div>
          </div>
        </figure>
      </div>
	  <div class="col-md-4">
        <figure class="card card-product shadow" style="width:18rem">
          <div class="img-wrap">
            <img
              src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="img-fluid"
            />
          </div>
          <figcaption class="info-wrap container">
            <h4 class="title">Product name goes here</h4>
            <p
              class="desc"
            >Some small description goes here Some small description goes here Some small description goes here</p>
            <div class="rating-wrap">
              <ul class="rating-stars">
                <li>
                  <i class="fa fa-star text-warning"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </li>
              </ul>
            </div>
            <!-- rating-wrap.// -->
          </figcaption>
          <div class="card-footer container">
            <router-link to="/uniqueProduct" class="btn btn-sm btn-primary float-right">Details</router-link>
            <div class="price-wrap h5">
              <span class="price-new">N1280</span>
              <del class="price-old pl-2">N1980</del>
            </div>
          </div>
        </figure>
      </div>
      	
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width:100%;
}
ul li {
  list-style: none;
}
</style>
