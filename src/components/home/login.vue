<template>
    <div id="template">
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       <div v-if="errors && errors.length">
        <div v-for="error of errors" :key="error">
<div class="alert alert-danger" role="alert">
  {{error.message}}
</div>        </div>
      </div>
      <div class="modal-body">

<div class="card">
<article class="card-body">
	 <form @submit="onSubmit">
    <div class="form-group">
    	<label>Your email</label>
        <input name="" class="form-control" v-model="login.email" placeholder="Email" type="email">
    </div> 
    <div class="form-group">
    	<a class="float-right" href="#">Forgot?</a>
    	<label>Your password</label>
        <input class="form-control" v-model="login.password" placeholder="******" type="password">
    </div>
    <div class="form-group"> 
    </div> 
    <div class="form-group">
        <button type="submit" class="btn btn-primary"> Login  </button>
    </div>                                                          
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
import axios from 'axios'
export default {
    data() {
      return {
        login:{},
        errors:[]
      }
    },
    methods: {
      onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/vendor/login`, this.login)
      .then(response => {
        localStorage.setItem('jwtToken', response.data.token);
        this.$router.push({
           path: "/vendor",
        });
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    },
    }
}
</script>

<style scoped>
  #template {
    overflow-x:hidden !important;
  }
</style>
