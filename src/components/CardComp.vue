<template>
    <div>
        <slot name="products">
            <section>
                    <div class="row" v-for="product in products()" :key="product.prodID">
                        <div class="card mt-2" style="width: 18rem;">
                            <img :src="product.prodURL" class="card-img-top">
                            <div class="card-body">
                                <div class="prodName">
                                    <h5 class="card-title">{{product.prodName}}</h5>
                                </div>
                                <div class="d-flex justify-content-between align-content-end">
                                    <router-link to="/product" class="btn mx-2">View More</router-link>   
                                    <a href="#" class="btn">Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </slot>
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
<style scoped>
    section{
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
        place-items: center;
        margin:auto;
    }
    .card{
        height:360px;
        margin-right:50px;
    }
    .card img{
        height:200px;
    }
    .prodName{
        height: 8vh;
    }
    a{
        width: 20vw;
        background:black;
        color:white;
        transition:1s;
    }
    a:hover{
        color:white;
        background: rgb(2, 21, 40);
    }
</style>
