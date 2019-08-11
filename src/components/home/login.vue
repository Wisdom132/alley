<template>
  <div id="tem">
    <div v-if="errors && errors.length">
      <div v-for="error of errors" :key="error">
        <div class="alert alert-danger" role="alert">{{error.message}}</div>
      </div>
    </div>

    <div class="card">
      <article class="card-body">
        <form @submit="onSubmit">
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
          <div class="form-group"></div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </article>
    </div>
    <page-footer />
  </div>
</template>

<script>
import axios from "axios";
import footer from '@/components/home/footer'

export default {
  data() {
    return {
      login: {},
      errors: []
    };
  },
  components: {
    'page-footer':footer
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`http://localhost:3000/vendor/login`, this.login)
        .then(response => {
          localStorage.setItem("jwtToken", response.data.token);
          this.$router.push({
            path: "/vendor"
          });
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
    }
  }
};
</script>

<style scoped>
#tem {
  margin:auto auto !important;
}
</style>
