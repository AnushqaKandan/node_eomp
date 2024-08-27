<template>
  <section>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item " v-for="(slide,index) in carousel()" :key="index" :class="{'active':index==0}">
             <div class="slider row ">
              <div class="col-lg-1 col-md-1 col-sm-12"></div>
                <div class="col-lg-5 col-md-5 col-sm-12">
                  <div>
                    <h5>{{ slide.brand }}</h5>
                  </div>
                  <div>
                    <h2><b>{{ slide.type }}</b></h2>
                  </div>
                  <div>
                    <h1>{{ slide.category }}</h1>
                  </div>
                  <div class="mt-2">
                    <router-link to="/products">View More</router-link>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <img :src="slide.image">
                </div>
             </div>
          </div>
        </div>
        <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

  </section>
  <section class="service">
    <div class="row mt-5 meh">
      <div class="col-3">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <i class="las la-truck"></i>
          </div>
          <div class="col-5">
            <h5><b>Free shipping</b></h5>
            <p>Free Shipping On All Orders</p>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <div class="col-3">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <i class="las la-check-circle"></i>
          </div>
          <div class="col-5">
            <h5><b>Money Guarantee</b></h5>
            <p>30 Day Money Back</p>
          </div>
          <div class="col-1"></div>
        </div>
        
      </div>
      <div class="col-3">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <i class="las la-headphones"></i>
          </div>
          <div class="col-5">
            <h5><b>Online Support 24/7</b></h5>
            <p>Technical Support 24/7</p>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <div class="col-3">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <i class="las la-wallet"></i>
          </div>
          <div class="col-5">
            <h5><b>Secure Payment</b></h5>
            <p>AI Cash Accepted</p>
          </div>
          <div class="col-1"></div>
        </div>
       
      </div>
    </div>
  </section>
  <section class="banner mt-5 my-auto">
    <div class="row b">
      <div class="col">
        <img src="https://anushqakandan.github.io/Node_images/Smart4.png">
      </div>
      <div class="col d-flex align-content-center">
        <h1>It's time to upgrade.</h1>
      </div>
    </div>
  </section>
  <h2 class="text-center mt-2">Recent News</h2>
  <section class="mt-2 mb-2 news">
    <div class="row" v-for="news in news()" :key="news">
        <div class="card mt-5">
          <img :src="news.image" class="card-img-top">
        <div class="card-body">
          <div>
            <p class="card-text">{{ news.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    getData(){
      return this.$store.dispatch('getData');
    },
    carousel(){
      return this.$store.state.carousel
    },
    news(){
      return this.$store.state.news
    }
  },
  mounted() {
    this.getData();
  },
}
</script>

<style scoped>
  .home {
    width:100vw;
    height:auto;
  }
  #carouselExample{
    width: 98vw;
    height:500px;
    margin:auto;
    border-radius: 10px;
    border:groove 2px #1479EA;

  }
  .carousel-item img{
    object-fit:contain;
    height:40vh;
  }
  .slider{
    margin-top:8vh;
    width:100vw;
    display:flex;
    align-content: center;
  }
  .slider h1{
    z-index:0;
    font-size:7vw;
  }
  a {
  position: relative;
  height: 3.5em;
  padding:0.3em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color: black;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

a::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
  transform-origin: center;
}

a::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
}

a:hover::before, button:hover::after {
  transform: scale(0)
}

a:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
  color:white;
}
  .banner{
      margin:auto;
      background:#1479EA;
      width:98vw;
      height:35vh;
      border-radius:20px;
      display:flex;
      justify-content: space-between;
  }
  .banner img{
    object-fit: contain;
    height:33vh;
  }
  .b{
    display: flex;
    align-items: center;
    width:97vw;
    height:15vh;
    color:aliceblue;
  }
  .service{
    width:95vw;
    height:100px;
    display:flex;
    justify-content: center;
  }
  .service h5{
    font-size:15px;
  }
  .service p{
    font-size:14px;
  }
  .service i{
    font-size:30px;
  }
  .service .meh{
    width:90vw;
  }
  .news{
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    place-items: center;
    width:100vw;
    margin:auto;
    height:80vh;
  }
  .news img{
    object-fit:cover;
    height: 40vh;
  } 
  .card{
    border: none;
    background: none;
    height:70vh;
    width:16rem;
  }
  h1{
    font-size:5vw;
  }
</style>
