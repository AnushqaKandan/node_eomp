<template>
    <div class="container mt-5">
        <CardComp>
            <template #products>
                <div class="row" v-for="product in products()" :key="product.prodID">
                    <div class="card" style="width: 18rem;">
                        <img :src="product.prodUrl" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{product.prodName}}</h5>
                            <a href="#" class="btn btn-primary">View More</a>
                        </div>
                    </div>
                </div>
            </template>
        </CardComp>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue';
export default {
    components:{
        CardComp
    },
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
<style scoped>
    
</style>