<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="row no-gutters">
              <aside class="col-sm-6 border-right">
                <article class="gallery-wrap">
                  <div class="img-big-wrap">
                    <div
                      class="list text-center"
                      v-for="(n, index) in imageList.slice(0,1)"
                      :data-index="index"
                      :key="index"
                    >
                      <img
                        @click="open($event)"
                        class="img-fluid"
                        :src="`http://localhost:3000/${n.path}`"
                      />
                    </div>
                  </div>
                  <div class="img-small-wrap">
                    <div
                      class="item-gallery"
                      v-for="(n, index) in imageList"
                      :data-index="index"
                      :key="index"
                    >
                      <img
                        @click="open($event)"
                        class="img-fluid"
                        :src="`http://localhost:3000/${n.path}`"
                      />
                    </div>
                  </div>
                </article>
                <!-- gallery-wrap .end// -->
              </aside>
              <aside class="col-sm-6">
                <article class="p-3">
                  <h3></h3>
                  <h3 class="title mb-3">{{product.name}}</h3>
                  <div class="mb-3">
                    <var class="price h3 text-primary">
                      <span class="currency">N</span>
                      <span class="num">{{product.price}}</span>
                    </var>
                    <span>/per annum</span>
                  </div>
                  <dl>
                    <dt>Description</dt>
                    <dd>
                      <p>{{product.description}}</p>
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
                  <hr />
                  <h5><b>Vendor Detals</b> </h5>
                  <div class="row">
                    <div class="col-sm-8">
                      <h5>{{product.vendor[0].f_name}} {{product.vendor[0].l_name}}</h5>
                    </div>
                  </div>
                  <dl class="row">
                    <dt class="col-sm-4">Email</dt>
                    <dd class="col-sm-8">{{product.vendor[0].email}}</dd>

                    <dt class="col-sm-4">phone</dt>
                    <dd class="col-sm-8">{{product.vendor[0].phone}}</dd>

                    <dt class="col-sm-4">vendor Address</dt>
                    <dd class="col-sm-8">{{product.vendor[0].address}}</dd>

                    <dt class="col-sm-4">agency</dt>
                    <dd class="col-sm-8">{{product.vendor[0].agency}}</dd>

                    <dt class="col-sm-4">agency_address</dt>
                    <dd class="col-sm-8">{{product.vendor[0].agency_address}}</dd>
                  </dl>
                </article>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import fancyBox from "vue-fancybox";
export default {
  data() {
    return {
      product: [],
      file: "",
      imageList: [
        {
          width: 601,
          height: 1024
        }
      ]
    };
  },
  methods: {
    open(e) {
      fancyBox(e.target, this.imageList);
    },

    getProduct(id) {
      axios.get("http://localhost:3000/products/" + id).then(response => {
        this.imageList = response.data.files;
        this.product = response.data;
        console.log(this.product);
      });
    }
  },
  created() {
    this.getProduct(this.$route.params.id);
  }
};
</script>

<style>
.gallery-wrap .img-big-wrap {
  margin: 20px 5px;
  overflow: hidden;
  background-color: #fff;
}
.gallery-wrap .img-small-wrap {
  text-align: center;
}
.gallery-wrap .img-small-wrap .item-gallery {
  width: auto;
  height: 90px;
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
