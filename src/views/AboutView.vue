<template>
  <div id="about">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="text row">
          <div class="col">
            <h1><b>Our Story</b></h1>
          </div>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus sit quae ducimus illum possimus nulla alias est. Harum nisi odit quidem nemo iste ducimus inventore veritatis perspiciatis labore ullam.</h5>
        </div>
      </div>
    </div>
    <div class="story">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="card" style="width: 18rem;">
          <img src="https://anushqakandan.github.io/All-images/Images/Anushqa04.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12">
        <div class="card" style="width: 18rem;">
          <img src="https://c0dingforfun.github.io/portfolioimg/Images/Me/Me.png" class="card-img-top" alt="">
          <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
  #about{
    display:flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://c0dingforfun.github.io/node-images/Images/About/about.gif');
    background-size: cover;
    width:100vw;
    height:60vh;

  }
  .text{ 
    backdrop-filter: blur(2px);
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
  }
  .story{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:60vh;
  }
  .card {
    height:20vh;
  }
  .card img{
    /* height:10vh; */
  }
</style>