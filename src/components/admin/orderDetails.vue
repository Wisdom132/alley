<template>
  <div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="row no-gutters">
                <aside class="col-sm-6 border-right">
                  <article class="gallery-wrap p-3">
                    <!-- <div class="img-big-wrap">
                      <div class="list text-center">
                        <img
                          @click="open($event)"
                          class="img-fluid"
                          :src="`https://calm-headland-54682.herokuapp.com/${order.product.files[0].path}`"
                        />
                      </div>
                      <div class="img-small-wrap">
                        <div
                          class="item-gallery"
                          v-for="(n, index) in order.product.files"
                          :data-index="index"
                          :key="index"
                        >
                          <img
                            @click="open($event)"
                            class="img-fluid"
                            :src="`https://calm-headland-54682.herokuapp.com/${n.path}`"
                          />
                        </div>
                      </div>
                    </div>-->
                    <hr />
                    <h5>
                      <b>User Detals</b>
                    </h5>
                    <div class="row">
                      <div class="col-sm-8">
                        <h5>{{order.f_name}} {{order.l_name}}</h5>
                      </div>
                    </div>
                    <dl class="row">
                      <dt class="col-sm-4">Email</dt>
                      <dd class="col-sm-8">{{order.email}}</dd>

                      <dt class="col-sm-4">phone</dt>
                      <dd class="col-sm-8">{{order.phone}}</dd>

                      <dt class="col-sm-4">User Address</dt>
                      <dd class="col-sm-8">{{order.location}}</dd>
                    </dl>
                  </article>
                  <!-- gallery-wrap .end// -->
                </aside>
                <aside class="col-sm-6">
                  <article class="p-3">
                    <h3></h3>
                    <h3 class="title mb-3">{{order.product.name}}</h3>
                    <div class="mb-3">
                      <var class="price h3 text-primary">
                        <span class="currency">N</span>
                        <span class="num">{{order.product.price}}</span>
                      </var>
                      <span>/per annum</span>
                    </div>
                    <dl>
                      <dt>Description</dt>
                      <dd>
                        <p>{{order.product.description}}</p>
                      </dd>
                    </dl>
                    <dl class="row">
                      <dt class="col-sm-3">Street</dt>
                      <dd class="col-sm-9">{{order.product.street}}</dd>

                      <dt class="col-sm-3">City</dt>
                      <dd class="col-sm-9">{{order.product.city}}</dd>

                      <dt class="col-sm-3">State</dt>
                      <dd class="col-sm-9">{{order.product.state}}</dd>
                    </dl>
                    <hr />
                    <h5>
                      <b>Vendor Detals</b>
                    </h5>
                    <div class="row">
                      <div class="col-sm-8">
                        <h5>{{order.product.vendor[0].f_name}} {{order.product.vendor[0].l_name}}</h5>
                      </div>
                    </div>
                    <dl class="row">
                      <dt class="col-sm-4">Email</dt>
                      <dd class="col-sm-8">{{order.product.vendor[0].email}}</dd>

                      <dt class="col-sm-4">phone</dt>
                      <dd class="col-sm-8">{{order.product.vendor[0].phone}}</dd>

                      <dt class="col-sm-4">vendor Address</dt>
                      <dd class="col-sm-8">{{order.product.vendor[0].address}}</dd>

                      <dt class="col-sm-4">agency</dt>
                      <dd class="col-sm-8">{{order.product.vendor[0].agency}}</dd>

                      <dt class="col-sm-4">agency_address</dt>
                      <dd class="col-sm-8">{{order.product.vendor[0].agency_address}}</dd>
                    </dl>
                  </article>
                  <button @click.prevent="deleteOrder(order._id)" class="btn btn-danger m-3">Delete</button>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <pre>{{this.order}}</pre> -->
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  data() {
    return {
      order: [],
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
    getOrder(id) {
      this.$http
        .get("orders/" + id)
        .then(response => {
          this.order = response.data;
          console.log(this.order);
        })
        .catch(error => {
          console.log(error);
        });
    },

    deleteOrder(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to Get back this request!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete(`orders/${id}`)
            .then(response => {
              this.$router.push({ path: "/admin/orders" });
            })
            .catch(err => {
              console.log(err);
            });
          swal("This Request has been Deleted", {
            icon: "success"
          });
        } else {
          swal("This Request hasn't been Deleted");
        }
      });
    }
  },
  created() {
    this.getOrder(this.$route.params.id);
  }
};
</script>

<style>
</style>
