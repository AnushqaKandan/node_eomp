<template>
  <section>
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             Hi
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             Hey
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             Hello
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             Molo
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             Bonjour
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             Hola
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
    </div>
  </section>

</template>

<script>
import NavBarComp from '../components/NavBarComp.vue';
export default {
  component:{
    NavBarComp
  }
  
}
</script>

<style scoped>
  .home {
    width:100vw;
    height:100vh;
    color:red;
    /* background-color: black; */
  }
  #carouselExample{
    position:relative;
    width: 100vw;
    height:60vh;
  }

</style>
