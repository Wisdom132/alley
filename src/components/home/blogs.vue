<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-4" v-for="(blog, index) in blogs" :key="index">
          <div class="card shadow mx-auto" style="width: 18rem;">
            <img
              :src="'http://https://calm-headland-54682.herokuapp.com/'+blog.blogImage"
              class="card-image-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-title mb-4">
                <b>{{blog.title}}</b>
              </h4>
              <div class="badge badge-primary p-1">{{blog.category}}</div>
              <p class="card-text text-justify">{{blog.postBody | truncate}}</p>
              <a href="#" class="btn btn-primary btn-sm">Read</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: []
    };
  },
  methods: {
    getPost() {
      this.$http
        .get("blog")
        .then(response => {
          this.blogs = response.data;
          console.log(this.blogs);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0, 150) + "...";
      }
      return value;
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<style scoped>
.card-image-top {
  height: 180px !important;
  width: 18rem;
}
</style>