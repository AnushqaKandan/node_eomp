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
  @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  background: gray;
  font-family: "Comic Neue", cursive;
  font-weight: 400;
  font-style: normal;
}


</style>
