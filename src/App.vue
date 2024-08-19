<template>
  <nav-bar-comp/>
  <router-view/>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  background: black;
}

</style>
