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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  background: rgb(236, 233, 233);
  font-family: "Oxygen", sans-serif;
  font-style: normal;
}


</style>
