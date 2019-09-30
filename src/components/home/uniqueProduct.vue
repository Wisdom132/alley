<template>
  <div>
    <!-- model section -->
    <div>
      <div
        class="modal fade"
        id="exampleModaluser"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">User Info</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="card">
                <article class="card-body">
                  <form @submit.prevent="order">
                    <div class="form-row">
                      <div class="col form-group">
                        <label>First name</label>
                        <input type="text" class="form-control" v-model="users.f_name" placeholder />
                      </div>
                      <div class="col form-group">
                        <label>Last name</label>
                        <input type="text" class="form-control" v-model="users.l_name" placeholder />
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="users.email" placeholder />
                      </div>
                      <div class="col form-group">
                        <label>Phone</label>
                        <input type="text" class="form-control" v-model="users.phone" placeholder />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" value="option1" />
                        <span class="form-check-label">Male</span>
                      </label>
                      <label class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="gender" value="option2" />
                        <span class="form-check-label">Female</span>
                      </label>
                    </div>
                    <div class="form-group col-md-12">
                      <label>Location</label>
                      <input type="text" v-model="users.location" class="form-control" />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block btn-sm">Request</button>
                    </div>
                    <small class="text-muted">
                      By clicking the 'Sign Up' button, you confirm that you accept our
                      <br />Terms of use and Privacy Policy.
                    </small>
                  </form>
                </article>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- model section ends here -->

    <nav-bar />
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
                <img
                  @click="open($event)"
                  class="img-fluid"
                  :src="`http://https://calm-headland-54682.herokuapp.com/${n.path}`"
                />
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
                <img
                  @click="open($event)"
                  class="img-fluid"
                  :src="`http://https://calm-headland-54682.herokuapp.com/${n.path}`"
                />
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
            <!-- rating-wrap.// -->
            <hr />
            <div class="row">
              <div class="col-sm-5">
                Phone:
                <pre>08096650047</pre>
              </div>
              <div class="col-sm-7">
                Email:
                <pre>admin@alley.com</pre>
              </div>
            </div>
            <hr />
            <button
              type="button"
              class="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#exampleModaluser"
            >Request</button>
            <!-- short-info-wrap .// -->
          </article>
          <!-- card-body.// -->
        </aside>
      </div>
    </main>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import fancyBox from "vue-fancybox";
import navbar from "@/components/home/navbar";
export default {
  components: {
    "nav-bar": navbar
  },
  data() {
    return {
      product: [],
      file: "",
      users: [],
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
      this.$http
        .get("products/" + id)
        .then(response => {
          this.imageList = response.data.files;
          this.product = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    order() {
      const id = this.product._id;
      let request = {
        product: id,
        f_name: this.users.f_name,
        l_name: this.users.l_name,
        email: this.users.email,
        phone: this.users.phone,
        location: this.users.location
      };
      this.$http
        .post("orders", request)
        .then(response => {
          console.log(response);
          // console.log(this.product._id);
        })
        .catch(err => {
          console.log({ err: err });
        });
      (this.users = []),
        swal(
          "Request Sent",
          "Your Request has been sent successfully.",
          "success"
        );
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
