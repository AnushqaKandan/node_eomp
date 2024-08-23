<template>
    <div>
        <div class="d-flex justify-content-center mt-4 gap-3" id="filter" >
            <input type="text" placeholder="Search..." id="mySearch" v-model="searchQuery">
          <select v-model="searchProduct">
            <option value="" class="text-center">Filter:</option>
            <option value="" >All Categories</option>
            <option value="Airpods">Airpods</option>
            <option value="Smart Watches">Smart Watches</option>
            <option value="Laptops">Laptops</option>
            <option value="Consoles">Consoles</option>
            <option value="VR sets">VR sets</option>
            <option value="Headphones">Headphones</option>
          </select>
      </div>
        <slot name="products">
            <section>
                    <div class="row" v-for="product in filterProducts || sortPrice" :key="product.prodID">
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
            </section>
        </slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
        searchProduct:'',
        searchQuery:''
        }
  },
    methods: {
        getProducts(){
            this.$store.dispatch('getProducts');
        },
        products() {
            return this.$store.state.products;
        },
    },
    computed: {
        filterProducts() {
            return this.$store.state.products.filter(product => {
            return product.prodName.toLowerCase().includes(this.searchQuery) &&
                (this.searchProduct === '' || product.category === this.searchProduct)
            })
        },
        // searchProd() {
        //     let tech = this.$store.state.products;
        //     let find = this.searchProduct;
        //     let found = tech.filter(prod => {
        //         return prod.prodName.toLowerCase().includes(find.toLowerCase()) || prod.category.toLowerCase().includes(find.toLowerCase());
        //     });
        //     return found
        // },
        sortPrice() {
            let unsorted = this.$store.state.products
            if (unsorted){
                unsorted.sort((a, b) => a.amount - b.amount)
            }
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
        height:370px;
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
    select{
        border-radius:15px;
        background: #1479EA;
        transition: 1s;
    }
    select:hover{
        cursor: pointer;
    }
    h4{
        color:transparent;
    }
</style>
