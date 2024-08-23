<template>
    <div>
        <div class="row" v-for="product in products()" :key="product.prodID">
            <div class="card mt-5" style="width:18rem">
                <img :src="product.prodURL" class="card-img-top">
                <div class="card-body">
                    <div class="prodName">
                        <h5 class="card-title">{{product.prodName}}</h5>
                        <h4>{{ product.category }}</h4>
                    </div>
                    <div>
                        <p class="card-text">Price: R{{product.amount}}</p>
                    </div>
                    <div class="d-flex justify-content-center mt-2 align-content-end">
                        <router-link to="/product" class="btn text-center">View More</router-link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import route from 'route'
export default {
    methods: {
        getProducts(){
            this.$store.dispatch('getProduct');
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