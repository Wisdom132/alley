<template>
  <card class="card-user col-md-8 offset-md-2">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/faces/face-2.jpg" alt="...">
        <h4 class="title">Wisdom Ekpot
          <br>
          <a href="#">
            <small>wisdomekpot@gmail.com</small><br />
            <small>08096650057</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        "I like the way you work it
        <br> No diggity
        <br> I wanna bag it up"
      </p>
      <div>
          <h5>Agency Name:</h5><small>Wisdom Housing</small>
            <h5>Agency Location:</h5><small>No 234 okigwe road,after st michaels,aba,abia state</small>

      </div>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
            <div class="col-md-4">
                <h5>Gender
            <br>
            <small>Male</small>
          </h5>
            </div>
             <div class="col-md-4">
                <h5>Number of Products
            <br>
            <small>5</small>
          </h5>
            </div>
             <div class="col-md-4">
                <h5>Date Created
            <br>
            <small>12 july 2019</small>
          </h5>
            </div>
            
          
        </div>
      <button class="btn btn-primary">Contact</button>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      details: [
        {
          title: "12",
          subTitle: "Files"
        },
        {
          title: "2GB",
          subTitle: "Used"
        },
        {
          title: "24,6$",
          subTitle: "Spent"
        }
      ]
    };
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  }
};
</script>
<style>
</style>
