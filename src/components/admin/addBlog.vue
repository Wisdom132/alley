<template>
  <div class="row">
    <div class="col-md-12">
      <form @submit.prevent="addProduct" enctype="multipart/form-data">
        <div class="row">
          <card class="card col-md-8" title="Edit Profile">
            <div class="row">
              <div class="col-md-6">
                <fg-input
                  type="text"
                  label="Name"
                  :disabled="false"
                  placeholder="Blog Title"
                  v-model="blog.title"
                ></fg-input>
              </div>
              <div class="col-md-6">
                <fg-input
                  type="text"
                  label="Category"
                  placeholder="Education"
                  v-model="blog.category"
                ></fg-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>Details</label>
                  <textarea
                    rows="5"
                    class="form-control border-input"
                    placeholder="Decription of this Product"
                    v-model="blog.postBody"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-primary" type="submit">
                <span
                  class="spinner-border spinner-border-sm"
                  v-if="loading"
                  role="status"
                  aria-hidden="true"
                ></span>Add Product
              </button>
            </div>
            <div class="clearfix"></div>
          </card>
          <div class="col-md-4">
            <card title="Add Images">
              <div class="row">
                <div class="col-md-12">
                  <input
                    type="file"
                    name="blogImage"
                    v-on:change="handleFileUpload()"
                    ref="file"
                    id="files"
                    class="form-control"
                  />
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
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      file: "",
      blog: []
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    addProduct() {
      this.loading = true;
      let formData = new FormData();
      formData.append("title", this.blog.title);
      formData.append("category", this.blog.category);
      formData.append("postBody", this.blog.postBody);
      formData.append("blogImage", this.file);
      //  axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken')
      this.$http
        .post("blog", formData)
        .then(response => {
          this.loading = false;
          this.blog = [];
          swal("Posted!", "Your New Blog has been Posted", "success");
          console.log(response);
        })
        .catch(err => {
          this.loading = false;
          swal("oop!", "Something went wrong", "error");
          console.log(err);
        });
    }
  }
};
</script>
<style>
</style>