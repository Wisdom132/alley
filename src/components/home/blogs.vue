<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(blog, index) in blogs" :key="index">
          <div class="card shadow" style="width: 18rem;">
            <img :src="'http://localhost:3000/'+blog.blogImage" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title mb-4"><b>{{blog.title}}</b></h4>
              <p
                class="card-text text-justify"
              >{{blog.postBody | truncate}}</p>
              <a href="#" class="btn btn-primary">Read</a>
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
      axios
        .get("http://localhost:3000/blog")
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
        value = value.substring(0, 150) + '...';
      }
      return value
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<style scoped>
</style>