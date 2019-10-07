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
              <a
                href="#"
                class="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#exampleModal"
              >Edit</a>
              <a href="#" class="btn btn-info btn-sm m-2">View</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
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
        text: "Once deleted, you will not be able to recover this file!",
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
          swal("Poof! Your file has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your file is safe!");
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
.modal-backdrop .show {
  display: none !important;
}
</style>
