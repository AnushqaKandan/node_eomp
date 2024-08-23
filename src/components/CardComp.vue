<template>
    <div>
        <div class="d-flex justify-content-center mt-4 gap-3" id="filter">
            <input type="text" placeholder="Search..." id="mySearch">
            <button class="btn" type="button">
              <p>Search</p>
            </button>
          <div class="dropdown-center">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter:
            </button>
            <ul class="dropdown-menu" >
              <li><a class="dropdown-item" href="#">Category</a></li>
              <li><a class="dropdown-item" href="#">Price:Low-High</a></li>
              <li><a class="dropdown-item" href="#">Price:High-Low</a></li>
            </ul>
          </div>
      </div>
        <slot name="products">
            <section>
                    <div class="row" v-for="product in products()" :key="product.prodID">
                        <div class="card mt-5" style="width: 18rem;">
                            <img :src="product.prodURL" class="card-img-top">
                            <div class="card-body">
                                <div class="prodName">
                                    <h5 class="card-title">{{product.prodName}}</h5>
                                </div>
                                <div>
                                    <p class="card-text">Price: R{{product.amount}}</p>
                                </div>
                                <div class="d-flex justify-content-between mt-2 align-content-end">
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
    .card a{
        width: 20vw;
        background:black;
        color:white;
        transition:1s;
    }
    .card a:hover{
        color:white;
        background: #1479EA;
    }
    #filter button{
        width:10vw;
        height:5vh;
        font-size:2vh;
        background: #1479EA;
    }
    #filter a{
        font-size:2vh;
        transition: 1s;
    }
    #filter a:hover{
        background: #1479EA;
        color:white;
    }
    #filter input{
        width:15vw;
        border-radius:15px;
    }
</style>
