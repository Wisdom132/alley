<template>
  <div id="tem">
    <div class="card">
      <article class="card-body">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>Your email</label>
            <input name class="form-control" v-model="login.email" placeholder="Email" type="email" />
          </div>
          <div class="form-group">
            <a class="float-right" href="#">Forgot?</a>
            <label>Your password</label>
            <input
              class="form-control"
              v-model="login.password"
              placeholder="******"
              type="password"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              <span
                class="spinner-border spinner-border-sm"
                v-if="loading"
                role="status"
                aria-hidden="true"
              ></span>
              Login
            </button>
          </div>
        </form>
      </article>
    </div>
    <page-footer />
  </div>
</template>

<script>
import axios from "axios";
import footer from "@/components/home/footer";

export default {
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: ""
      }
      // errors: []
    };
  },
  components: {
    "page-footer": footer
  },
  methods: {
    onSubmit() {
      console.log("brb ");
      if (!this.login.email && this.login.password) {
        alert("kjve");
      } else {
        debugger;
        this.loading = true;
        this.$http
          .post(`vendor/login`, this.login)
          .then(response => {
            this.loading = false;
            localStorage.setItem("jwtToken", response.data.token);
            this.$router.push({
              path: "/vendor"
            });
          })
          .catch(err => {
            this.loading = false;
            console.log(err);
            // this.errors.push(e);
          });
      }
    }
  }
};
</script>

<style scoped>
#tem {
  margin: auto auto !important;
  position: relative !important;
  top: 300px !important;
}
</style>
