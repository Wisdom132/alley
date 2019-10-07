<template>
  <div id="over" class="magic-ball">
    <div class="container magic-ball">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card p-5 mt-4 shadow">
            <form @submit.prevent="onSubmit">
              <div class="form-row magic-ball">
                <div class="col form-group">
                  <label>First name</label>
                  <input type="text" class="form-control" placeholder v-model="register.f_name" />
                </div>
                <div class="col form-group">
                  <label>Last name</label>
                  <input type="text" class="form-control" placeholder v-model="register.l_name" />
                </div>
              </div>
              <div class="form-row">
                <div class="col form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" placeholder v-model="register.email" />
                </div>
                <div class="col form-group">
                  <label>Phone</label>
                  <input type="text" class="form-control" placeholder v-model="register.phone" />
                </div>
              </div>
              <div class="form-group">
                <label>Address</label>
                <input type="text" class="form-control" placeholder v-model="register.address" />
                <small class="form-text text-muted">We'll never share your address with anyone else.</small>
              </div>
              <!-- form-group end.// -->
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
              <div class="col-md-12 form-group">
                <label>Agency</label>
                <input type="text" class="form-control" placeholder v-model="register.agency" />
              </div>
              <div class="col-md-12 form-group">
                <label>Agency Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder
                  v-model="register.agency_address"
                />
              </div>
              <div class="form-row magic-ball">
                <div class="col form-group">
                  <label>Create Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder
                    v-model="register.password"
                  />
                </div>
                <div class="col form-group">
                  <label>Confirm Password</label>
                  <input type="password" class="form-control" placeholder />
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">
                  <span
                    class="spinner-border spinner-border-sm"
                    v-if="loading"
                    role="status"
                    aria-hidden="true"
                  ></span>Sign Up
                </button>
              </div>
              <small class="text-muted">
                By clicking the 'Sign Up' button, you confirm that you accept our
                <br />Terms of use and Privacy Policy.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      register: {},
      errors: []
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      this.$http
        .post(`vendor/signin`, this.register)
        .then(response => {
          this.loading = false;
          swal("ok", "signup successful", "success");
          console.log(response);
          this.$router.push({
            path: "/vendorlogin"
          });
        })
        .catch(e => {
          swal("oops", "please fill the form correctly", "error");
          this.loading = false;
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
#over {
  margin-top: 100px;
  background: white !important;
}
.magic-ball {
  position: relative;
}

.magic-ball::before {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 8px solid #1004f3;
  opacity: 0.5;
  position: absolute;
  bottom: -68px;
  left: -15px;
}

@media (min-width: 768px) {
  .magic-ball::before {
    width: 70px;
    height: 70px;
    left: -35px;
    border: 15px solid #0d5fb5;
  }
}

.magic-ball::after {
  content: "";
  display: block;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #ebebff;
  opacity: 0.5;
  position: absolute;
  bottom: -263px;
  left: 70px;
}

@media (min-width: 768px) {
  .magic-ball::after {
    width: 98px;
    height: 98px;
    left: 165px;
  }
}

.magic-ball-about::before {
  top: 265px;
  left: -32px;
}

.magic-ball-about::after {
  top: 65px;
  left: 135px;
}

.magic-ball-testimonial::before {
  top: 265px;
  left: -32px;
}

.magic-ball-testimonial::after {
  top: 130px;
  left: 135px;
}

.magic-ball-banner::before {
  top: 80px;
  left: 130px;
}

.magic-ball-banner::after {
  width: 70px;
  height: 70px;
  top: 270px;
  left: 170px;
}

.magic-ball-sm::before {
  width: 60px;
  height: 60px;
  top: 280px;
  left: -25px;
}

.magic-ball-sm::after {
  width: 60px;
  height: 60px;
  top: 160px;
  left: 80px;
}
</style>
