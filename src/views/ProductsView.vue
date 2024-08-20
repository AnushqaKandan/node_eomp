<template v-for="product in $store.state.products" :key="product.id">
    <div class="mt-5">
        <span>{{ product.prodID }}</span> /
        <span>{{ product.prodName }}</span> /
        <span>{{ product.quantity }}</span> /
        <span>{{ product.Category }}</span> /
        <span>{{ product.prodUrl }}</span> 
    </div>
</template>
<script>
export default {
    methods: {
        getProducts(){
            this.$store.dispatch('getProducts');
        }
    },
    mounted() {
        this.getProducts();
    },
}
</script>
<style lang="">
    
</style>