<template>
    <div class="row">
        <div class="col-md-12">
            <form @submit.prevent>
                <div class="row">
    <card class="card col-md-8" title="Edit Profile">
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Name"
                      :disabled="false"
                      placeholder="Bungalow"
                      >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="number"
                      label="Amount per Month"
                      placeholder="#30,000"
                      >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="text"
                      label="Category"
                      placeholder="One Bed room flat"
                      >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Street"
                      placeholder="atan Street"
                      >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="City"
                      placeholder="Uyo"
                      >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="state"
                      placeholder="Akwa ibom"
                      >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      label="Features"
                      placeholder="Constant Power Supply,Water,Kitchen"
                      >
            </fg-input>
          </div>
        </div>


        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Details</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="Decription of this Product"
                        >

              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="updateProfile">
            Add Product
          </p-button>
        </div>
        <div class="clearfix"></div>
    </card>
    <div class="col-md-4">
        <card title="Add Images">
            <div class="row">
                <div class="col-md-12">
                    <input type="file" class="form-control">
          </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <input type="file" class="form-control">
          </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <input type="file" class="form-control">
          </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <input type="file" class="form-control">
          </div>
            </div>
        </card>
    </div>
</div>
      </form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: "Paper Dashboard",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    }
  }
};
</script>
<style>
</style>
