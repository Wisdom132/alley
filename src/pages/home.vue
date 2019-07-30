<template>
    <div>
        <nav-bar />
        <main-head />
    </div>
</template>

<script>
import navbar from '@/components/home/navbar'
import mainhead from '@/components/home/mainhead'

export default {
    components:{
        'nav-bar':navbar,
        'main-head':mainhead
    }
}
</script>

<style>

</style>
