<template>
    <div>
        
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
        },
    },
    mounted() {
        this.getProducts(route.params.id);
    },
}
</script>
<style>
    
</style>