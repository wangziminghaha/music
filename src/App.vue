<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import setRem from '../static/js/rem.js'
export default {
  name: 'App',
  mounted(){
    setRem.setrem();
    window.onresize=setRem.setrem
  }
}
</script>

<style>
@import '../static/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* margin-top: 60px; */
   
}

</style>
