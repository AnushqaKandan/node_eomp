<template>
  <section>
      <div id="carouselExample" class="carousel slide" >
        <div class="carousel-inner" v-for="(slide,index) in carousel()" :key="slide" :class="{'active':index==0}">
          <div class="carousel-item">
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

      </div>
    </div>
  </section>
  <section class="b1">

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
    position:relative;
    width: 100vw;
    height:60vh;
    background-color:red ;
  }
  .b1{
    margin:auto;
    background:rgb(26, 26, 26);
    width:99vw;
    height:300px;
    border-radius:10%;
  }
  .carousel-item img{
    object-fit:contain;
    height:300px;
    transform: rotateX(90deg);
    perspective: 300px;
  }

</style>
