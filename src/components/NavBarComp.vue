<template>   
    <nav class="navbar navbar-expand-lg sticky-top shadow">
                <div class="container-fluid" id="nav">
                    <router-link to="/"><img src="https://c0dingforfun.github.io/node-images/Images/Logo/Logo.png" class="logo" alt="My Logo" loading="lazy"></router-link>
                    <button class="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">                    
                      <span class="text-white p-2" style="font-size:30px;">&#9776;</span>                      
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width:50%;background-color: rgb(200,220,280,0.8);">
                      <div class="offcanvas-header">
                        <h1>MENU</h1>
                        <button type="button" class="btn-close bg-white pt-2" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                      </div>
                      <div class="offcanvas-body text-center">                   
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 p-3 f-3">                     
                          <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/"><i class="las la-home"></i>Home</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/about" aria-current="page"><i class="las la-users"></i>About</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/products" aria-current="page"><i class="las la-store-alt"></i>Products</router-link>
                          </li>
                          <li class="nav-item">
                            <router-link class="nav-link" to="/admin" aria-current="page"><i class="las la-user-cog"></i>Admin</router-link>
                          </li> 
                          <li class="nav-item">
                            <router-link class="nav-link" to="/contact" aria-current="page"><i class="las la-phone-square"></i>Contact</router-link>
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
      background-color:transparent;
    }
    nav a {
        font-weight: bold;
        font-size:18px;
        color:#696969;
        text-decoration: none;
        font-weight: 200;
        transition: 1s;
    }
    nav a:hover{
        color:#1479EA;
        text-shadow:4px 4px #67acd1;
    }
    #nav .logo{
      width:140px;
      height:120px;
    }
    nav img{
      width:50px;
      height:50px;
    }
    nav i{
      font-size: 25px;
    }
    h1{
      color:#1479EA;
    }

</style>