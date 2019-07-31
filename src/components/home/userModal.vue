<template>
    <div>
       <div class="modal fade" id="exampleModaluser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
			<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender" value="option1">
		  <span class="form-check-label"> Male </span>
		</label>
		<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender" value="option2">
		  <span class="form-check-label"> Female</span>
		</label>
	</div> 
    <div class="form-group col-md-12">
		  <label>Location</label>
		  <input type="text" class="form-control">
		</div> 
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Register  </button>
    </div> <!-- form-group// -->      
    <small class="text-muted">By clicking the 'Sign Up' button, you confirm that you accept our <br> Terms of use and Privacy Policy.</small>                                          
</form>
</article> <!-- card-body end .// -->
</div> <!-- card.// -->


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
