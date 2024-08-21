<template>
  <section>
      <div id="carouselExample" class="carousel slide" >
        
        <div class="carousel-inner" >
          <div class="carousel-item" v-for="(slide,index) in carousel()" :key="index" :class="{'active':index==0}">
            <!-- style="{background-Image: url(`${slide.background}`)}" -->
             <div class="slider row">
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
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

  </section>
  <section>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12">

        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          
        </div>
      </div>
  </section>
  <!-- <section class="b1">

  </section> -->
</template>

<script>
export default {
  // props:[background=string],
  methods:{
    getData(){
      return this.$store.dispatch('getData');
    },
    carousel(){
      return this.$store.state.carousel
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
    width: 100vw;
    height:500px;
  }
  .carousel-item img{
    object-fit:contain;
    height:350px;
  }
  .slider{
    margin-top:8vh;
    width:100vw;
    display:flex;
    align-content: center;
  }
  .slider h1{
    z-index:0;
    font-size:10vw;
  }
  
  a{
    width:6vw;
    height:6vw;
    border-radius:10%;
    padding:1vw;
    color:whitesmoke;
    background: rgb(3, 108, 213);
    transition:0.5s;
    text-decoration: none;
  }
  a:hover{
    color:white;
    background: rgb(2, 21, 40);
  }
  .b1{
      margin:auto;
      background:rgb(26, 26, 26);
      width:99vw;
      height:300px;
      border-radius:10%;
  }
</style>
