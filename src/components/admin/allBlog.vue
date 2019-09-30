<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(blog, index) in blogs" :key="index">
          <div class="card shadow mx-auto" style="width: 18rem;">
            <img
              :src="'https://calm-headland-54682.herokuapp.com/'+blog.blogImage"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h4 class="card-title mb-4">
                <b>{{blog.title}}</b>
              </h4>
              <div class="badge badge-primary">{{blog.category}}</div>
              <p class="card-text text-justify">{{blog.postBody | truncate}}</p>
              <a
                href="#"
                class="btn btn-danger m-2 btn-sm"
                @click.prevent="deletePost(blog._id)"
              >Delete</a>
              <a href="#" class="btn btn-primary btn-sm">Edit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
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
    },

    deletePost(id) {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete(`blog/${id}`)
            .then(response => {
              this.$router.push({ path: "/admin/addblog" });
            })
            .catch(err => {
              console.log(err);
            });
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your imaginary file is safe!");
        }
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
.card-img-top {
  min-height: 150px !important;
  width: 18rem;
}
</style>
