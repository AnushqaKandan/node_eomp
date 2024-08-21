<template>
    <slot>
        <div class="row" v-for="product in products()" :key="product.prodID">
            <span>{{ product.prodID }}</span> 
            <span>{{ product.prodName }}</span>
            <span>{{ product.quantity }}</span>
            <span>{{ product.Category }}</span>
            <span>{{ product.prodUrl }}</span> 
        </div>
    </slot>
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
<style>
    
</style>
