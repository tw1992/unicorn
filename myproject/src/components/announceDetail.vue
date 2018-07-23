<template>
    <div style="background: #edf3f8;padding: 115px 0 60px 0;" class="detail">
      <div style=";padding: 50px;box-sizing: border-box;background: #ffffff;position: relative;" class="containerWidth">
        <div style="padding-bottom: 30px;">
          <div style="font-size: 28px;font-weight: bold;color: #223552;">
            {{content.title}}
          </div>
          <div style="font-size: 14px;margin-bottom: 44px;color: #a5b1c3;margin-top: 25px;">
            <span class="time">{{content.time | time}} </span>
            <span>
              {{content.name}}
            </span>
          </div>
          <div v-html="trendHtml"></div>
        </div>
        <div style="padding-top: 30px;border-top: 1px solid #edf3f8;color: #7b8fac;cursor: pointer;">
          <div v-if="pre" @click="goTo(pre)">
            {{language[$store.state.lang].pre}}：<span>{{pre.title}}</span>
          </div>
          <div v-if="next" @click="goTo(next)">
            {{language[$store.state.lang].next}}：<span>{{next.title}}</span>
          </div>
        </div>
        <div @click="DetailscrollTop" class="arrup arrupPosi">
          <!--<img src="../assets/img/upArrow.png" alt="">-->
        </div>
      </div>
    </div>
</template>
<style>
  .time:after{
    content:" ";
    display: inline-block;
    width:5px;
    height: 5px;
    border-radius: 50%;
    background: #a5b1c3;
    vertical-align: middle;
    margin:0 10px;
  }
  .detail p{
    /*font-size: 14px!important;*/
    line-height: 30px;
    margin:0!important;
  }
  .detail img{
    max-width: 100%;
  }
  .arrupPosi{
    bottom: 0;
    right: -60px;
  }
/*.detailContent{*/
  /*font-size:unset;*/
/*}*/
</style>
<script>
export default{
    computed: {
    trendHtml: function () {
      var body = '';
      if(this.content.body){
        body = this.content.body.replace(/\/ueditor\/php\/upload\/image/g,this.allSrc()+'/ueditor/php/upload/image')
      }
      return body;
    }
  },
    data(){
    return {
        type:'',
        content:{},
        pre:'',
        next:'',
        language:{
          en:{
            read:'read',
            next:'next',
            pre:'pre'
          },
          ch:{
            read:'阅读',
            next:'下一篇',
            pre:'上一篇'
          }
        }
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.New_info(to.params.id,to.params.type);
    next();
  },
  beforeRouteLeave (to, from, next) {
    this.$emit('leave',{enter:false});
    next();
  },
  methods:{
    New_info(id,type){
      var params = id+'/'+(this.$store.state.lang == 'en'?'2':'1');
      params = type>0?(params+'/'+type):params;
      this.interFace('New_info',params).then((res)=>{
        this.content = res.new;
        this.next = res.under;
        this.pre = res.on;
      })
    },
    goTo(item){
      if(item.type == 1){
        window.open(item.url)
      }else{
        this.$router.push({name:'announceDetail',params:{id:item.id,type:this.$route.params.type,lang:this.$store.state.lang}})
      }
    },
    DetailscrollTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created(){
    this.$emit('leave',{enter:true})
    this.$store.state.lang = this.$route.params.lang || 'ch';
    this.New_info(this.$route.params.id,this.$route.params.type);
  }
}
</script>
