<template>
  <div>
    <NavBarComp>
    </NavBarComp>
    <router-view/>
    <FooterComp/>
  </div>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
  export default {
    components:{
      NavBarComp,
      FooterComp
    }
  }
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  background: rgb(236, 233, 233);
  font-family: "Oxygen", sans-serif;
  font-style: normal;
}
.card{
  width:18rem;
}

@media screen and (max-width: 600px){
  .card{
    width:15rem;
  }
  
}

</style>
