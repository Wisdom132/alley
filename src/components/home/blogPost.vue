<template>
  <div>
    <nav-bar />
    <section class="mb-5" style="margin-top:120px">
      <div class="container">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <img
              :src="'https://calm-headland-54682.herokuapp.com/'+this.blog.blogImage"
              class="img-fluid"
              alt
            />
            <h4>{{this.blog.title}}</h4>
            <small class="mb-5">{{this.blog.createdDate |moment}}</small>
            <p class="blog-post">{{this.blog.postBody}}</p>
          </div>
        </div>
      </div>
    </section>
    <page-footer />
  </div>
</template>
<script>
import moment from "moment";
import navbar from "@/components/home/navbar";
import pageFooter from "@/components/home/footer";
export default {
  data() {
    return {
      blog: {}
    };
  },
  components: {
    "nav-bar": navbar,
    "page-footer": pageFooter
  },
  methods: {
    getBlog(id) {
      this.$http
        .get("blog/" + id)
        .then(response => {
          console.log(response.data);
          this.blog = response.data;
        })
        .catch(err => console.log(err));
    }
  },

  created() {
    this.getBlog(this.$route.params.id);
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
</script>
<style scoped>
.blog-post {
  text-align: justify !important;
  line-height: 29px !important;
}
</style>