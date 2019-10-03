<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form @submit.prevent="editProfile(profile.userId)">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">first name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="first name"
                  v-model="vendor.f_name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="last name"
                  v-model="vendor.l_name"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">email</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="email"
                  v-model="vendor.email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="phone"
                  v-model="vendor.phone"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="exampleFormControlTextarea1">Address</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="vendor.address"
                ></textarea>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Agency name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="agency name"
                  v-model="vendor.agency"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Agency Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  v-model="vendor.agency_address"
                  placeholder="agency address"
                />
              </div>
              <button class="btn btn-primary btn-sm">
                <span
                  class="spinner-border spinner-border-sm"
                  type="submit"
                  v-if="loading"
                  role="status"
                  aria-hidden="true"
                ></span>Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
import swal from "sweetalert";
import axios from "axios";
export default {
  data() {
    return {
      // vendor: {
      //   f_name: "",
      //   l_name: "",
      //   phone: "",
      //   address: "",
      //   email: "",
      //   agency: "",
      //   agency_address: ""
      // },
      profile: [],
      loading: false,
      vendor: {}
    };
  },
  methods: {
    editProfile(id) {
      this.loading = true;
      let vendor = {};
      this.$http
        .put("vendor/" + id, { vendor: this.vendor })
        .then(response => {
          this.loading = false;
          console.log(response);
          swal("Yea", "Edited successfully", "success");
        })
        .catch(err => {
          this.loading = false;
          swal("Oop", "Something Went Wrong", "error");
          console.log(err);
        });
    },
    getProfile() {
      let info = localStorage.getItem("jwtToken");
      let decoded = VueJwtDecode.decode(info);
      // console.log(decoded)
      this.profile = decoded;
      console.log(this.profile);
    },

    getDetails() {
      this.$http
        .get("vendor/" + this.profile.userId)
        .then(response => {
          this.vendor = response.data;
          console.log({ vendor: this.vendor });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getProfile();
  },
  mounted() {
    this.getDetails();
  }
};
</script>
<style>
</style>
