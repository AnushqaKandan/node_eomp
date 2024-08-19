<template>   
    <nav class="navbar navbar-expand-lg fixed-top shadow">
                <div class="container-fluid">
                    <!-- <img src="https://c0dingforfun.github.io/portfolioimg/Images/Logo/Logo.png" alt="My Logo" loading="lazy"> -->
                     kbjvkjbv
                    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">                    
                      <span class="text-white p-2" style="font-size:30px;">&#9776;</span>                      
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width:100%;background-color: rgb(0,0,0,0.8);">
                      <div class="offcanvas-header">
                        <img src="https://c0dingforfun.github.io/portfolioimg/Images/Logo/Logo.png" alt="My Logo" loading="lazy">
                        <button type="button" class="btn-close bg-white pt-2" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                      </div>
                      <div class="offcanvas-body text-center">                   
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 p-3 f-3">                     
                          <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" href="#about">About</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" href="#resume">Products</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" href="#projects">Contact</router-link>
                          </li>                     
                        </ul>                    
                      </div>
                    </div>
                  </div>
              </nav>       
</template>
<script>
export default {
}
</script>
<style scoped>
    nav {
      background-color:grey;
    }

    nav a {
        font-weight: bold;
        font-size:20px;
        color:white;
        text-decoration: none;
        transition: 1s;
    }
    nav a:hover{
        color:white;
        text-shadow:4px 4px black;
    }
    nav img{
      width:50px;
      height:50px;
    }


</style>