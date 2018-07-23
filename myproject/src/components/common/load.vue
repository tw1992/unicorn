<template>
  <transition name="fade" mode="out-in">
    <div class="loading" v-if="show">
      <!--<img src="../../assets/img/qqq.gif" alt="">-->
    </div>
  </transition>
</template>
<style>
  .loading{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top:0;
    left: 0;
    background-color:rgba(0,0,0,0.5);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading img{
    z-index: 333;

  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<script>
export default{
  props:{
    show:{
      default:false,
    }
  },
  data(){
    return {
        msg: 'hello vue'
    }
  }
}
</script>
