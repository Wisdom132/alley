<template>
    <div>
        <nav-bar />
       <blogs />
    </div>
</template>

<script>
import blogs from '@/components/home/blogs'
import navbar from '@/components/home/navbar'

export default {
    components:{
        'blogs':blogs,
        'nav-bar':navbar
    }
}
</script>

<style>

</style>
