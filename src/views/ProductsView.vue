<template >
    <div class="container mt-5">
        <div class="row mt-5" v-for="product in products()" :key="product.id">
            <span>{{ product.prodID }}</span> /
            <span>{{ product.prodName }}</span> /
            <span>{{ product.quantity }}</span> /
            <span>{{ product.Category }}</span> /
            <span>{{ product.prodUrl }}</span> 
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        getProducts(){
            this.$store.dispatch('getProducts');
        },
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.getProducts();
    },
}
</script>
<style lang="">
    
</style>