<template>
  <div>
    <!-- <nav-bar /> -->
    <main-head />
    <home-about />
    <story />
    <!-- <home-service /> -->
    <top-cities />
    <!-- <home-blog /> -->
    <home-product />
    <contact />
    <page-footer />
  </div>
</template>

<script>
import homeservice from "@/components/home/homeservices";
import topcities from "@/components/home/topcities";
import homeabout from "@/components/home/homeabout";
import navbar from "@/components/home/navbar";
import mainhead from "@/components/home/mainhead";
import story from "@/components/home/story";
// import homeBlog from '@/components/home/homeBlog'
import homeProduct from "@/components/home/homeProduct";
import contact from "@/components/home/contact";
import footer from "@/components/home/footer";
import homeProductVue from "../components/home/homeProduct.vue";

export default {
  components: {
    "top-cities": topcities,
    "home-service": homeservice,
    "nav-bar": navbar,
    "main-head": mainhead,
    "home-about": homeabout,
    story: story,
    // 'home-blog':homeBlog,
    "home-product": homeProduct,
    contact: contact,
    "page-footer": footer
  },
  mounted() {
    function initFreshChat() {
      window.fcWidget.init({
        token: "fcb59b3c-5d2c-49f7-8a88-98c3358632b8",
        host: "https://wchat.freshchat.com"
      });
    }
    function initialize(i, t) {
      var e;
      i.getElementById(t)
        ? initFreshChat()
        : (((e = i.createElement("script")).id = t),
          (e.async = !0),
          (e.src = "https://wchat.freshchat.com/js/widget.js"),
          (e.onload = initFreshChat),
          i.head.appendChild(e));
    }
    function initiateCall() {
      initialize(document, "freshchat-js-sdk");
    }
    window.addEventListener
      ? window.addEventListener("load", initiateCall, !1)
      : window.attachEvent("load", initiateCall, !1);
  }
};
</script>

<style>
</style>
