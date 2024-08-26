<template>
  <div id="about">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <div class="row">
          <div class="col">
            <h1 class="text-white"><b>About Us</b></h1>
          </div>
            <h5 class="text-white">At GeniTech Store, our vision is to empower individuals and businesses to harness the power of technology to achieve their goals and transform their lives. We believe that technology should be accessible, affordable, and easy to use, and we're committed to making that a reality.</h5>
        </div>
      </div>
    </div>
    <div class="mt-5 w-50 mx-auto">
      <h2>Our Story</h2>
      <h5>GeniTech Store was founded by a team of passionate tech enthusiasts who were frustrated with the lack of innovative and affordable technology solutions available in the market. We saw an opportunity to create a platform that would bridge the gap between technology and people, and provide a seamless shopping experience that would make technology accessible to everyone.</h5>
    </div>
    <div class="mt-5 w-50 mx-auto">
      <h2>Our Vision</h2>
      <h5>At GeniTech Store, our vision is to empower individuals and businesses to harness the power of technology to achieve their goals and transform their lives. We believe that technology should be accessible, affordable, and easy to use, and we're committed to making that a reality.</h5>
    </div>
    <div class="row story mt-5 mb-5">
      <div class="d-flex align-items-center justify-content-center">
        <div class="col-lg-2 col-md-2 col-sm-12"></div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <img src="https://anushqakandan.github.io/All-images/Images/Anushqa04.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Anushqa Kandan</h5>
              <p class="card-text">Co-Founder</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="card">
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
    display:flex;
    justify-content: center;
    width:100vw;
    height:50vh;
    margin:auto;
  }
  .card {
    width:18rem;
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
    transform:scale(1.1);
    box-shadow:10px 10px 10px #046de6ba;
  }
</style>