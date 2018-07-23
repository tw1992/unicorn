<template>
    <div class="allContent">
      <div style="margin: 35px 0;">
        <titlec :content="language[type].title" :font="36"></titlec>
        <ul class="clear contact">
          <li v-for="item in liList" @click="$router.push({name:'announceDetail',params:{id:item.id}})">
            <span class="contactLiLf">
              {{item.title}}
            </span>
            <span class="contactLiRig">
              {{item.time | timeYMDHMS}}
            </span>
          </li>
          <li style="text-align: center;cursor: pointer" @click="load()">
            {{page.req?language[type].load:language[type].loadTip}}
          </li>
        </ul>
      </div>
      <loading :show="showLoading"></loading>
    </div>
</template>
<style>
</style>
<script>
import titlec from '../components/common/title.vue'
import loading from '../components/common/load.vue'
export default{
  data(){
    return {
      showLoading:'',
        type:'',
        language:{
          en:{
            title:'Announcement',
            load:'Loading',
            loadTip:'No More Date',
          },
          ch:{
            title:'公告',
            load:'加载更多',
            loadTip:'没有更多数据'
          }
        },
       liList:[],
       page:{
          current:1,
          total:0,
          value:5,
          req:true,//如果请求完了全部  就不需要再请求了
       },
      disable:true,
    }
  },
  methods:{
    load(){
      if(this.page.req){
        this.showLoading = true;
      }
      this.page.current++;
      this.bulletin();
    },
    bulletin(){
      if(this.page.req){
        if(this.disable){
          this.disable = false;
          this.interFace('bulletin',{
            language:this.typeReq,
            list:this.page.current - 1,
            value:this.page.value,
          }).then((res)=>{
            this.disable = true;
            this.liList = this.liList.concat(res.array);
            if(this.page.current == res.list){
              this.page.req = false;
            }
            this.showLoading = false;
          })
        }
      }
    },
  },
  created(){
    this.showLoading = true;
    this.type = this.languageType();
    this.bulletin()
  },
  components:{
    titlec,loading
  }
}
</script>
