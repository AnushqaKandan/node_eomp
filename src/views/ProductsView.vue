<template>
    <section v-for="product in $store.state.products" :key="product">
        <div>
            <span>{{ product.prodID }}</span> /
            <span>{{ product.prodName }}</span> /
            <span>{{ product.quantity }}</span> /
            <span>{{ product.Category }}</span> /
            <span>{{ product.prodUrl }}</span> 
        </div>
    </section>
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