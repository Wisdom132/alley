<template>
  <div class="row">
    <div class="col-md-12">
      <form @submit.prevent="addProduct" enctype="multipart/form-data">
        <div class="row">
          <card class="card col-md-8" title="Add Product">
            <div class="row">
              <div class="col-md-5">
                <fg-input
                  type="text"
                  label="Name"
                  :disabled="false"
                  placeholder="Bungalow"
                  v-model="products.name"
                ></fg-input>
              </div>
              <div class="col-md-3">
                <fg-input
                  type="number"
                  label="Amount per Year"
                  placeholder="#30,000"
                  v-model="products.price"
                ></fg-input>
              </div>
              <div class="col-md-3">
                <fg-input
                  type="text"
                  label="Category"
                  placeholder="One Bed room flat"
                  v-model="products.category"
                ></fg-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <fg-input
                  type="text"
                  label="Street"
                  placeholder="atan Street"
                  v-model="products.street"
                ></fg-input>
              </div>
              <div class="col-md-4">
                <fg-input type="text" label="City" placeholder="Uyo" v-model="products.city"></fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="text"
                  label="state"
                  placeholder="Akwa ibom"
                  v-model="products.state"
                ></fg-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 mb-2">
                <label>Features</label>
                <input-tag
                  v-model="products.features"
                  placeholder="press enter to add all features"
                ></input-tag>
                <!-- <fg-input
                  type="text"
                  label="Features"
                  placeholder="Constant Power Supply,Water,Kitchen"
                  v-model="products.features"
                ></fg-input>-->
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
                    v-model="products.description"
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
                    name="productImage"
                    ref="files"
                    @change="selectFiles()"
                    id="files"
                    class="form-control"
                    multiple
                  />
                  <div class="field">
                    <div v-for="(file,index) in files" :key="index">
                      <div class="pt-2 pb-2">
                        {{file.name}}
                        <br />
                        <span
                          v-if="file.invalidMessage"
                          class="text-danger"
                        >&nbsp; {{file.invalidMessage}}</span>
                        <button
                          @click.prevent="files.splice(index,1);uploadFiles.splice(index,1)"
                          class="btn btn-danger btn-sm float-right"
                        >del</button>
                      </div>
                    </div>
                  </div>
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
import InputTag from "vue-input-tag";
import swal from "sweetalert";
import axios from "axios";
import _ from "lodash";
export default {
  components: {
    "input-tag": InputTag
  },
  data() {
    return {
      files: [],
      uploadFiles: [],
      products: [],
      loading: false
    };
  },
  methods: {
    selectFiles() {
      const files = this.$refs.files.files;
      console.log(this.$refs.files.files);
      this.uploadFiles = [...this.files, ...files];

      this.files = [
        ...this.files,
        ..._.map(files, file => ({
          name: file.name,
          size: file.size,
          type: file.type,
          invalidMessage: this.validate(file)
        }))
      ];
    },
    validate(file) {
      const MAX_SIZE = 200000;
      const allowedTypes = ["image/jpeg", "image/png", "image/svg"];

      if (file.size > MAX_SIZE) {
        return `MAX size ${MAX_SIZE / 1000}kb`;
      }
      if (!allowedTypes.includes(file.type)) {
        return "This is not an image";
      }
      return "";
    },
    addProduct() {
      this.loading = true;
      let formData = new FormData();
      _.forEach(this.uploadFiles, file => {
        if (this.validate(file) === "") {
          formData.append("files", file);
        }
      });
      formData.append("name", this.products.name);
      formData.append("price", this.products.price);
      formData.append("category", this.products.category);
      formData.append("street", this.products.street);
      formData.append("city", this.products.city);
      formData.append("state", this.products.state);
      formData.append("features", this.products.features);
      formData.append("description", this.products.description);
      axios.defaults.headers.common["Authorization"] = localStorage.getItem(
        "jwtToken"
      );
      debugger;
      this.$http
        .post("products", formData)
        .then(response => {
          this.products = [];
          this.files = [];
          this.loading = false;
          swal("yea", "updated successfully", "success");
          console.log(response);
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
          swal("oops", "Please fill the details properly", "error");
        });
    }
  }
};
</script>
<style scoped>
.vue-input-tag-wrapper {
  border-radius: 5px !important;
}
</style>
