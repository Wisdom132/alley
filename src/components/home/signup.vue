<template>
    <div>
<div class="modal fade" id="exampleModalsignup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
<form>
	<div class="form-row">
		<div class="col form-group">
			<label>First name</label>
		  	<input type="text" class="form-control" placeholder="">
		</div>
		<div class="col form-group">
			<label>Last name</label>
		  	<input type="text" class="form-control" placeholder="">
		</div>
	</div>
    <div class="form-row">
		<div class="col form-group">
			<label>Email</label>
		  	<input type="text" class="form-control" placeholder="">
		</div>
		<div class="col form-group">
			<label>Phone</label>
		  	<input type="text" class="form-control" placeholder="">
		</div>
	</div>
	<div class="form-group">
		<label>Address</label>
		<input type="email" class="form-control" placeholder="">
		<small class="form-text text-muted">We'll never share your address with anyone else.</small>
	</div> <!-- form-group end.// -->
	<div class="form-group">
			<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender" value="option1">
		  <span class="form-check-label"> Male </span>
		</label>
		<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender" value="option2">
		  <span class="form-check-label"> Female</span>
		</label>
	</div>
		<div class="col-md-12 form-group">
			<label>Agency</label>
		  	<input type="text" class="form-control" placeholder="">
		</div>
		<div class="col-md-12 form-group">
			<label>Agency Address</label>
		  	<input type="text" class="form-control" placeholder="">
		</div>	
	<div class="form-row">
		<div class="col form-group">
			<label>Create Password</label>
		  	<input type="password" class="form-control" placeholder="">
		</div>
		<div class="col form-group">
			<label>Confirm Password</label>
		  	<input type="password" class="form-control" placeholder="">
		</div>
	</div> 
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Register  </button>
    </div>      
    <small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br> Terms of use and Privacy Policy.</small>                                          
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
export default {

}
</script>

<style>

</style>
