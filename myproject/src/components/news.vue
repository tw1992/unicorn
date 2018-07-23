<template>
    <div class="handImgParent fontSize14">
      <img src="../assets/img/banner2.png" alt="" style="display: block;width: 100%;">
      <div class="banTitle">
        <div class="containerWidth">
          <div style="font-size: 30px;">
            {{language[$store.state.lang].bg.title}}
          </div>
          <div style="margin-top: 10px;color: #9f8cb4;">
            {{language[$store.state.lang].bg.subTitle}}
          </div>
        </div>
      </div>
      <div class="newst">
        <ul class="containerWidth">
          <li :class="{'newslinegradient': -1 == curr}" @click="selectType(-1)">
            {{language[$store.state.lang].all}}
          </li>
          <li v-for="(item,index) in language[$store.state.lang].list" :class="{'newslinegradient':index == curr}" @click="selectType(index,item.id)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div  style="background: #edf3f8;padding: 0 0 50px 0;">
        <div class="boxShade"></div>
        <div class="containerWidth" style="background: #ffffff;">
          <ul>
            <li style="margin: 0 30px;padding: 30px 0;font-size: 0;border-bottom: 1px solid #edf3f8" v-for="item in newsList">
              <div style="display: inline-block;width: 320px;height: 180px;">
                <img :src="allSrc()+item.photo" alt="" style="width: 100%;height:100%;cursor: pointer;display: block;" @click="goTo(item)">
              </div>
              <div style="width: calc(100% - 350px);float: right;font-size: 16px;height: 180px;position: relative;">
                <div style="margin-top: -3px;">
                  <div class="font20 newsTitle" @click="goTo(item)">
                    {{item.title}}
                  </div>
                  <div style="margin-top: 15px;color:#7b8fac;line-height: 24px;" class="fontSize14">
                    {{item.content}}
                  </div>
                </div>
                <div style="position: absolute;bottom: 0px;">
                  <div class="backSource" :class="{'backGreen':(item.name == 'UNICORN官方')||(item.name=='UNICORN'),'backRed':(item.name!='UNICORN官方')&&(item.name!='UNICORN')}">
                    {{item.name}}
                  </div>
                  <span style="margin-left: 20px;font-size: 14px;color:#a5b1c3">
                    {{item.time | time}}
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div style="padding: 30px 0;">
            <pagination :total="page.total * page.value" :currentPage="page.current" :display="page.value" @pagechange="pageChange"></pagination>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import pagination from '../components/common/page.vue'
  export default{
    data(){
      return {
        curr:-1,
        currentType:0,
        page:{
          current:1,
          total:0,
          value:4
        },
        currentCountry:'',
        type:'',
        announce:[],
        language:{
          en:{
            bg:{
              title:'NEWS',
              subTitle:'The first time to understand the industry information and the latest announcement'
            },
            list:[],
            all:"ALL"
          },
          ch:{
            bg:{
              title:'最新动态',
              subTitle:'第一时间了解行业资讯 最新公告'
            },
            list:[],
            all:"全部动态"
          }
        },
        newsList:[],
        typeReq:'',
      }
    },
    beforeRouteLeave (to, from, next) {
      this.$emit('leave',{enter:false});
      next();
    },
    watch:{
      '$store.state.lang':'New_type'
    },
    methods:{
      New_type(){
        this.interFace('New_type',this.$store.state.lang=='ch'?'1':'2').then((res)=>{
          this.language[this.$store.state.lang].list = res;
          this.New_list();
        })
      },
      pageChange(data){
        this.page.current = data;
        this.New_list(this.currentType)
      },
      New_list(type){
        var params = this.page.current - 1 + '/' + this.page.value + '/' + (this.$store.state.lang=='ch'?'1':'2');
        params = type?(params+'/'+type):params;
        this.interFace('New_list',params).then((res)=>{
          this.newsList = res.new;
          this.page.total = res.list;
        })
      },
      selectType(index,id){
        if(index != this.curr){
          this.curr = index;
          this.currentType = id;
          this.page.current = 1;
          this.New_list(id);
        }
      },
      goTo(type){
        if(type.type == 1){
          window.open(type.url);
        }else{
          window.open('#/announceDetail/'+ type.id + '/-1/'+this.$store.state.lang);
        }
      }
    },
    created(){
      this.$emit('leave',{enter:true})
//      this.type = this.languageType();
      this.$store.state.lang = this.$route.params.lang || 'ch';
      this.typeReq = this.$store.state.lang=='ch'?'1':'2';
      this.New_type();
    },
    components:{
      pagination
    },
  }
</script>
<style>
  .newst{
    background: #FFFFFF;
  }
  .newst li{
    display: inline-block;
    padding:0 20px;
    cursor: pointer;
    line-height: 50px;
  }
  .newslinegradient{
    color: #5c58eb;
    background: -webkit-linear-gradient(#e0e0fa,white);
    background: -o-linear-gradient(#e0e0fa,white);
    background: -moz-linear-gradient(#e0e0fa,white);
    background:linear-gradient(#e0e0fa,white);
  }
  .backGreen{
    background: #9d9bf3;
  }
  .backRed{
    background: #fa9fa8;
  }
  .backSource{
    padding:3px 10px;
    border-radius: 10px;
    font-size: 12px;
    color: #FFFFFF;
    display: inline-block;
  }
  .boxShade{
    height: 30px;
    background: -webkit-linear-gradient(#dbe6f1,#edf3f8);
    background: -o-linear-gradient(#dbe6f1,#edf3f8);
    background: -moz-linear-gradient(#dbe6f1,#edf3f8);
    background:linear-gradient(#dbe6f1,#edf3f8);
  }
</style>
