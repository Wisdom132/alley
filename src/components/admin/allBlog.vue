<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(blog, index) in blogs" :key="index">
          <div class="card shadow mx-auto" style="width: 18rem;">
            <img :src="'http://localhost:3000/'+blog.blogImage" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title mb-4"><b>{{blog.title}}</b></h4>
              <p
                class="card-text text-justify"
              >{{blog.postBody | truncate}}</p>
              <a href="#" class="btn btn-danger m-2" @click.prevent="deletePost(blog._id)">Delete</a>
              <a href="#" class="btn btn-primary">Edit</a>
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
    },
    deletePost(id) {
        axios.delete(`http://localhost:3000/blog/${id}`)
        .then(response=> {
            this.$router.push({ path: "/admin/allblog" });
            // this.blogs.splice(this.blogs.indexOf(id), 1);
        }).catch(err=> {
            console.log(err)
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

<style>
</style>
