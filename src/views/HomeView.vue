<template>
  <Navbar-Comp/>
  <div class="home">
    <div>
      <div id="carouselExample mt-5" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             lknflevebrlbergbl
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             lknflevebrlbergbl
          </div>
          <div class="carousel-item">
            <!-- <img src="..." class="d-block w-100" alt="..."> -->
             lknflevebrlbergbl
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
  </div>
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
    color:aliceblue;
    /* background-color: black; */
  }
  .carouselExample{
    width: 100vw;
    height:20vh;
  }

</style>
