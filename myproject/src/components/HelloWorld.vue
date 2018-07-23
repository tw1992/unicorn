<template>
  <div class="header bbbb fontSize16" :class="{'headerBg':showbg || $route.name == 'announceDetail','showOpacity':showopacity,'hideOpacity':!showopacity}">
    <div class="containerWidth">
       <span style="cursor: pointer;" @click="$router.push({name:'index'})">
         <img src="../assets/img/logo.png" alt="" style="margin-top: 20px;">
       </span>
        <span>
          <ul class="heaUl">
            <li class="heaUlli">
              <router-link :to="'/index/'+$store.state.lang">
                {{language[$store.state.lang].about}}
                <span class="ulLiImg" :style="$store.state.lang == 'en'?{left: '4px'}:{left:'-3px'}">
                  <img src="../assets/img/line.png" alt="">
                </span>
              </router-link>
            </li>
             <li class="heaUlli">
              <router-link :to="'/news/'+$store.state.lang">
                {{language[$store.state.lang].news}}
                <span class="ulLiImg" :style="$store.state.lang == 'en'?{left: '3px'}:{left:'-3px'}">
                  <img src="../assets/img/line.png" alt="">
                </span>
              </router-link>
            </li>
            <li class="heaUlli">
              <router-link :to="'/reply/'+$store.state.lang">
                {{language[$store.state.lang].contact}}
                <span class="ulLiImg" :style="$store.state.lang == 'en'?{left: '-4px'}:{left:'-3px'}">
                  <img src="../assets/img/line.png" alt="">
                </span>
              </router-link>
            </li>
            <li class="seleLang fontSize16" style="width: 90px;text-align: center;" :style="$store.state.lang=='en'?{marginLeft: '25px'}:{marginLeft: '10px'}">
              {{language[$store.state.lang].eng}}
               <img src="../assets/img/arrDown.png" class="arrow" alt="">
                <ul class="dropDown">
                  <li @click="seleDrop('en')" style="border-bottom: 1px solid #522094;" class="seleHeaderLang">
                    <span class="fontSize16">ENGLISH</span>
                  </li>
                  <li @click="seleDrop('ch')" class="seleHeaderLang">
                    <span class="fontSize16">
                      中文
                    </span>
                  </li>
                </ul>
            </li>
          </ul>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showbg:{
      default:false
    },
    showopacity:{
      default:true
    }
  },
  name: 'HelloWorld',
  data () {
    return {
      showDrop:false,
      language:{
        en:{
          about:'HOME',
          news:'NEWS',
          contact:'FAQ',
          eng:'ENGLISH'
        },
        ch:{
          about:'首页',
          news:'动态',
          contact:'F&Q',
          eng:'中文'
        }
      }
    }
  },
  methods:{
    seleDrop(type){
      this.$store.state.lang = type;
      this.$router.push({name:this.$route.name,params:{lang: this.$store.state.lang}});
    }
  }
}
</script>
<style>
  .bbbb{
    -webkit-transition-property: background-color;
    -webkit-transition-duration: 0.8s;
    -webkit-transition-timing-function: ease;
  }
  .bbbb a{
    font-size: 16px;
  }
  .headerBg{
    background-color: #2d0050;
  }
  .underBackground{
    position: absolute;
    top: 60px;
    width: 100%;
    display: inline-block;
    height: 15px;
    left:2px;
    border-top: 2px solid #5c58eb;
  }
  .showOpacity{
    opacity: 1;
    transition: opacity 1s;
  }
  .hideOpacity{
    opacity: 0;
    transition: opacity .2s;
  }
  .seleHeaderLang{
    color:rgba(255,255,255,0.6);
    transition: color .3s ease;
  }
  .seleHeaderLang:hover{
    color:rgba(255,255,255,1);
  }
</style>
