<template>
  <section>
      <div id="carouselExample" class="carousel slide" >
        
        <div class="carousel-inner" >
          <div class="carousel-item" v-for="(slide,index) in carousel()" :key="index" :class="{'active':index==0}">
            <!-- style="background-Image: url(`${slide.background}`)" -->
           <img :src="slide.image">
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
    <div>
      <div class="row">
        hi
      </div>
    </div>
  </section>
  <section class="b1">

  </section>
</template>

<script>
export default {
  // props:{
  // }
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
    height:400px;
  }
  .carousel-item img{
    object-fit:contain;
    height:300px;
    /* transform: rotateY(100deg);
    perspective: 300px; */
  }
  .b1{
    margin:auto;
    background:rgb(26, 26, 26);
    width:99vw;
    height:300px;
    border-radius:10%;
  }
  

</style>
