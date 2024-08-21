<template>
  <div>
    <NavBarComp>
    </NavBarComp>
    <router-view/>
  </div>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
  export default {
    components:{
      NavBarComp
    }
  }
</script>

<style>

#app {
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Oxygen:wght@300;400;700&family=Share+Tech&display=swap');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  /* background: gray; */
  font-family: "Oxygen", sans-serif;
  
  font-style: normal;
}


</style>
