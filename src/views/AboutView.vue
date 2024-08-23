<template>
  <div id="about">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="text row">
          <div class="col">
            <h1 class="text-white"><b>Our Story</b></h1>
          </div>
            <h5 class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus sit quae ducimus illum possimus nulla alias est. Harum nisi odit quidem nemo iste ducimus inventore veritatis perspiciatis labore ullam.</h5>
        </div>
      </div>
    </div>
    <div class="row story mt-5 mb-5">
      <div class="d-flex align-content-center">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card" style="width: 18rem;">
            <img src="https://anushqakandan.github.io/All-images/Images/Anushqa04.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Anushqa Kandan</h5>
              <p class="card-text">Co-Founder</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card" style="width: 18rem;">
            <img src="https://c0dingforfun.github.io/portfolioimg/Images/Me/Me.png" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Gwiba Mabandla</h5>
              <p class="card-text">Co-Founder</p>
            </div>
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
  .story{
    width:50vw;
    height:50vh;
    margin:auto;
  }
  .card {
    height:300px;
    padding: 0.3em;
    border:groove 2px black;
    transition: 1s;
  }
  .card img{
    height:200px;
  }
  .card:hover{
    cursor: pointer;
    background:#1479EA;
    transform:scale(1.0,2);
    box-shadow:10px 10px 10px rgb(200,220,280,0.8);
  }
</style>