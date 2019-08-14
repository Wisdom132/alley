<template>
    <div>
        <nav-bar />
        <main-head />
        <story />
        <!-- <home-blog /> -->
        <home-product />
        <contact />
        <page-footer />
    </div>
</template>

<script>
import navbar from '@/components/home/navbar'
import mainhead from '@/components/home/mainhead'
import story from '@/components/home/story'
// import homeBlog from '@/components/home/homeBlog'
import homeProduct from '@/components/home/homeProduct'
import contact from '@/components/home/contact'
import footer from '@/components/home/footer'
import homeProductVue from '../components/home/homeProduct.vue';

export default {
    components:{
        'nav-bar':navbar,
        'main-head':mainhead,
        'story':story,
        // 'home-blog':homeBlog,
        'home-product':homeProduct,
        'contact':contact,
        'page-footer':footer

    }
}
</script>

<style>

</style>
