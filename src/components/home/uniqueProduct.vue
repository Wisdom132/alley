<template>
  <div>
    <nav-bar />
    <user-modal />
    <main class="container card">
      <div class="row no-gutters mt-5">
        <aside class="col-sm-6 border">
          <article class="gallery-wrap">
            <div class="img-big-wrap">
              <div
                class="list text-center"
                v-for="(n, index) in imageList.slice(0,1)"
                :data-index="index"
                :key="index"
              >
                <img @click="open($event)" class="img-fluid mt-5" :src="n.url" />
              </div>
            </div>
            <!-- slider-product.// -->
            <div class="img-small-wrap">
              <div
                class="item-gallery"
                v-for="(n, index) in imageList"
                :data-index="index"
                :key="index"
              >
                <img @click="open($event)" :src="n.url" />
              </div>
            </div>
          </article>
        </aside>
        <aside class="col-sm-6 border">
          <article class="card-body mt-2">
            <!-- short-info-wrap -->
            <h3 class="title mb-3">Two Bed Room Flat</h3>

            <div class="mb-3">
              <var class="price h3 text-primary">
                <span class="currency">NGN #</span>
                <span class="num">20,000</span>
              </var>
              <span>/per month</span>
            </div>
            <!-- price-detail-wrap .// -->
            <dl>
              <dt>Description</dt>
              <dd>
                <p>
                  Here goes description consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco
                </p>
              </dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">Street</dt>
              <dd class="col-sm-9">Uyo</dd>

              <dt class="col-sm-3">City</dt>
              <dd class="col-sm-9">Uyo</dd>

              <dt class="col-sm-3">State</dt>
              <dd class="col-sm-9">Akwa Ibom</dd>
            </dl>
            <!-- rating-wrap.// -->
            <hr />
            <div class="row">
              <div class="col-sm-5">
              Phone:  08096650047
            
              </div>
              <div class="col-sm-7">
              Email:Wisdomekpot@gmail.com
              </div>
            </div>
            <hr />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Request</button>
            <!-- short-info-wrap .// -->
          </article>
          <!-- card-body.// -->
        </aside>
      </div>
    </main>
  </div>
</template>

<script>
import userModal from '@/components/home/userModal'
import fancyBox from "vue-fancybox";
import navbar from '@/components/home/navbar'
export default {
  components: {
    'nav-bar':navbar,
    'user-modal':userModal
  },
  data() {
    return {
      imageList: [
        {
          width: 601,
          height: 1024,
          url:
            "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          width: 601,
          height: 1024,
          url:
            "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          width: 601,
          height: 1024,
          url:
            "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ]
    };
  },
  methods: {
    open(e) {
      fancyBox(e.target, this.imageList);
    }
  }
};
</script>

<style scoped>
.gallery-wrap .img-big-wrap {
  margin-bottom: 10px;
  overflow: hidden;
  background-color: #fff;
}
.gallery-wrap .img-big-wrap img {
  height: 450px;
  width: auto;
  display: inline-block;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
.gallery-wrap .img-small-wrap {
  text-align: center;
}
.gallery-wrap .img-small-wrap .item-gallery {
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  margin: 7px 2px;
  display: inline-block;
  overflow: hidden;
}
.gallery-wrap .img-small-wrap img {
  max-width: 100%;
  max-height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 4px;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
.gallery-wrap .img-small-wrap img:hover {
  -webkit-filter: brightness(1.1);
  filter: brightness(1.1);
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}
</style>
