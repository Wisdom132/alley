<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">first name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="first name"
                  v-model="profile.f_name"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="last name"
                  v-model="profile.l_name"
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
                  v-model="profile.email"
                  disabled
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="phone"
                  v-model="profile.phone"
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
                  v-model="profile.address"
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
                  v-model="profile.agency"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Agency Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  v-model="profile.agency_address"
                  placeholder="agency address"
                />
              </div>
              <button class="btn btn-primary btn-sm">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      profile: []
    };
  },
  methods: {
    getProfile() {
      let info = localStorage.getItem("jwtToken");
      let decoded = VueJwtDecode.decode(info);
      // console.log(decoded)
      this.profile = decoded;
      console.log(this.profile);
    },

    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  },
  created() {
    this.getProfile();
  }
};
</script>
<style>
</style>
