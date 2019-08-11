<template>
    <div>
        <nav-bar />
        <main-head />
        <story />
        <contact />
        <page-footer />
    </div>
</template>

<script>
import navbar from '@/components/home/navbar'
import mainhead from '@/components/home/mainhead'
import story from '@/components/home/story'
import contact from '@/components/home/contact'
import footer from '@/components/home/footer'

export default {
    components:{
        'nav-bar':navbar,
        'main-head':mainhead,
        'story':story,
        'contact':contact,
        'page-footer':footer

    }
}
</script>

<style>

</style>
