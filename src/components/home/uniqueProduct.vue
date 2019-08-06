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
                <img @click="open($event)" class="" :src='`http://localhost:3000/${n.path}`'/>
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
                <img @click="open($event)" class="img-fluid" :src='`http://localhost:3000/${n.path}`'/>
              </div>
            </div>
          </article>
        </aside>
        <aside class="col-sm-6 border">
          <article class="card-body mt-2">
            <!-- short-info-wrap -->
            <h3 class="title mb-3">{{product.name}}</h3>

            <div class="mb-3">
              <var class="price h3 text-primary">
                <span class="currency">NGN #</span>
                <span class="num">{{product.price}}</span>
              </var>
              <span>/per annum</span>
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
              <dd class="col-sm-9">{{product.street}}</dd>

              <dt class="col-sm-3">City</dt>
              <dd class="col-sm-9">{{product.city}}</dd>

              <dt class="col-sm-3">State</dt>
              <dd class="col-sm-9">{{product.state}}</dd>
            </dl>
            <!-- rating-wrap.// -->
            <hr />
            <div class="row">
              <div class="col-sm-5">
              Phone:<pre>08096650047</pre>
            
              </div>
              <div class="col-sm-7">
              Email:<pre>admin@alley.com</pre>
              </div>
            </div>
            <hr />
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModaluser">Request</button>
            <!-- short-info-wrap .// -->
          </article>
          <!-- card-body.// -->
        </aside>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
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
      product:[],
      file:'',
      imageList: [
        {
          width: 601,
          height: 1024,
        }
        
      ]
    };
  },
  methods: {
    open(e) {
      fancyBox(e.target, this.imageList);
    },
     getProduct(id) {
       axios.get('http://localhost:3000/products/'+id)
       .then(response => {
        this.imageList = response.data.files
         this.product = response.data
         console.log(this.imageList)
       }).catch(err=> {
         console.log(err)
       })
    }
  },
  created() {
    this.getProduct(this.$route.params.id);
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
