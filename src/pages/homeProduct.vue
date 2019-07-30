<template>
    <div>
        <nav-bar />
        <products />
    </div>
</template>

<script>
import navbar from '@/components/home/navbar'
import products from '@/components/home/products'
export default {
    components:{
        'products':products,
        'nav-bar':navbar
    }
}
</script>

<style>

</style>
