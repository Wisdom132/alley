<template>
  <div>
    <div
      class="modal fade"
      id="exampleModalsignup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card">
              <article class="card-body">
                <form @submit.prevent="onSubmit">
                  <div class="form-row">
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
                    <small
                      class="form-text text-muted"
                    >We'll never share your address with anyone else.</small>
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
                  <div class="form-row">
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
                      ></span>Register
                    </button>
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
            path: "/login"
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

<style>
</style>
