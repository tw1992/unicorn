<template>
  <div id="app">
    <hello-world :showbg="showBg" :showopacity="showOpacity" :lang="$store.state.lang"></hello-world>
    <transition name="fade" mode="out-in">
      <router-view class="container" :scroll="scrollTop" @leave="leave" @scrollFn="scrollFn" @lang="lang"></router-view>
    </transition>
    <footer-content :lang="$store.state.lang"></footer-content>
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue';
  import FooterContent from './components/FooterContent.vue';
  export default {
      name: 'app',
      components: { HelloWorld,FooterContent },
      data(){
        return {
          language:'',
          showOpacity:true,
          showBg:false,
          scrollTop:0
        }
      },
    methods:{
      handleScroll(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>100){
          this.showBg = true;
        }else{
          this.showBg = false;
        }
        this.scrollTop = scrollTop;
      },
      leave(data){
        if(data.enter){
          this.showOpacity = true;
        }else{
          this.showOpacity = false;
        }
      },
      lang(data){
        this.language = data
      },
      scrollFn(data){
        document.body.scrollTop = data;
        document.documentElement.scrollTop = data;
        this.scrollTop = data;
      }
    },
    created(){
      window.addEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style>
.container{
  width: 100%;
  overflow: hidden;
}
#app {
  font-family: "“Microsoft YaHei",'Avenir', Helvetica, Arial, sans-serif;
  /*font-family: BiauKai;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1200px!important;
  position: relative;
}
</style>
