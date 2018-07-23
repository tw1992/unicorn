<template>
    <div class="fontSize14">
      <div style="position: fixed;height: 100vh;width: 100%;background-color:rgba(0,0,0,0.5);z-index: 4;display: flex;justify-content: center;align-items: center;" v-if="show" @click="show=!show">
        <div>
          <video src="../../static/media/WeChatSight.mp4" controls="controls" width="500">
            your browser does not support the video tag
          </video>
        </div>
      </div>
      <!--第一个模块-->
        <div style="position: relative;height: 900px;" class="handImgParent">
          <img src="../assets/img/banner-bg.png" alt="" style="display: block">
          <div style="position: absolute;top:213px;width: 100%">
            <div class="firstbig">
              <img src="../assets/img/banner_logo.png" alt="" style="margin-left: -50px;">
            </div>
            <div class="butParent clear">
              <div class="whiteBook whiteBookHover" @click="downLoadFn" style="height: 50px;vertical-align: top;">
                 <span class="fontSize16 firstWhite">{{language[$store.state.lang].first.downLoad}}</span>
              </div>
              <div class="whiteBook secWhite" style="overflow: hidden;">
                <span class="fontSize16">{{language[$store.state.lang].first.getScore}}</span>
                <img src="../assets/img/qrcode.png" alt="" style="width: 120px;height: auto;">
              </div>
            </div>
          </div>
        </div>
      <div class="indexBgPic">
        <!--&lt;!&ndash;第二个模块&ndash;&gt;.83*.85*x = .17-->
        <div style="padding-top: 130px;">
          <div class="containerWidth">
            <titlec :content="language[$store.state.lang].sec.title" :showslot="true" :titlestyle="{marginTop:'0px'}"/>
            <div slot="subTitle" style="color: #a5b1c3;margin-top: 10px;text-align: center;">
              {{language[$store.state.lang].sec.subTitle}}
            </div>
            </titlec>
          </div>
          <div class="transRight" :class="{'transCenter':twoModel}" ref="twoModelRef">
            <ul class="clear indexModelMar containerWidth" style="position: relative;">
              <li v-for="item in language[$store.state.lang].sec.content" style="width: 33%;box-sizing: border-box;float: left;padding: 20px 50px;text-align: center;color: #7b8fac;">
                <img :src='item.img' alt="" style="margin: 40px 0 45px 0;">
                <div style="text-align: left;line-height: 24px;">
                  {{item.content}}
                </div>
              </li>
            </ul>
          </div>

        </div>
        <!--第三个模块-->
        <div>
          <div class="containerWidth">
            <titlec :content="language[$store.state.lang].third.title"/>
          </div>
          <div class="indexModelMar">
            <ul>
              <li v-for="(item,index) in newsList" class="transRight" :class="{'transCenter':thirdModel[index].show}" :ref="'third'+index">
                <div class="containerWidth indexNews" style="padding-bottom: 30px;">
                  <img src="../assets/img/yuan.png" alt="" style="position: absolute;left: -10px;top: 0;opacity: 1;background: white;">
                  <div class="indexNewsTitle" @click="goTo(item)">
                    {{item.title}}
                  </div>
                  <p style="margin: 13px 0 0;padding-bottom: 20px;color: #a5b1c3;">
                    {{item.content}}
                  </p>
                </div>
              </li>
              <li style="padding-top: 10px;">
                <div class="loadMore" @click="goTo(0)">
                  <span class="loadMoreFace">{{language[$store.state.lang].third.more}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--&lt;!&ndash;第四个模块&ndash;&gt;-->
        <div class="containerWidth" style="margin-bottom: 50px;">
          <titlec :content="language[$store.state.lang].four.title" :titlestyle="{marginTop:'115px'}" />
          <ul class="clear indexModelMar fadeHide" style="color: #ffffff;" v-for="(item1,index) in language[$store.state.lang].four.liArr" :ref="'four'+index" :class="{'fadeShow':fourModel[index].show}">
            <li v-for="item,index1 in item1" :class="{'fourLiGrap':(index1 != 2)}" class="fourLi">
              <img :src="item.src" alt="">
              <div  class="fourBot" >
                <div class="clear" style="min-height: 80px;padding:10px 20px 0 20px;box-sizing: border-box">
                  <div style="float:left;width: 70%;box-sizing: border-box;">
                    <div style="font-size: 15px;font-weight: bold;margin-top: 8px;" :style="type == 'en'?{marginBottom:'0px'}:{marginBottom:'8px'}">
                      {{item.title}}
                    </div>
                    <div>
                      {{item.subTitle}}
                    </div>
                  </div>
                  <div class="indexstatus" :class="{'noComponent':item.status != '已完成' && item.status != 'Done'}">
                    {{item.status}}
                  </div>
                </div>
                <div style="height: 110px;padding:0 20px;">
                  {{item.content}}
                </div>
                <div class="fourBott clear" v-if="index == 0 && index1 == 0">
                  <div style="height: 20px;line-height: 20px;">
                      <span @click="vadioClick('vadio')">
                        {{language[$store.state.lang].other.project}}
                      </span>
                    <span @click="vadioClick('more')">
                      {{language[$store.state.lang].other.more}}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--&lt;!&ndash;第五个模块&ndash;&gt;-->
        <div style="background: #edf3f8;padding: 10px 0 70px 0;">
          <div class="containerWidth">
            <titlec :content="language[$store.state.lang].five.title"  :titlestyle="{marginTop:'43px'}"></titlec>
            <div class="indexModelMar">
              <ul style="background: white;box-shadow: 0 0 1px 1px #e6eef5;">
                <li v-for="item,index in language[$store.state.lang].five.fiveArr" style="padding: 26px 30px;" :class="{'linegradient':index == 1,'fiveLiBg':index == 2,'fadeShow':fiveModel[index].show}" :ref="'five'+index" class="fadeHide">
                  <div style="font-size: 16px;color: #4a5468;">{{item.title}}</div>
                  <span class="indexFiveunder" :class="{'indexFiveunder1':index != 0}"></span>
                  <div v-for="itemCon in item.content" style="color: #a5b1c3;line-height: 25px;">
                    {{itemCon}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--&lt;!&ndash;第六个模块&ndash;&gt;-->
        <div class="sixBg">
          <div class="containerWidth">
            <titlec :content="language[$store.state.lang].six.title"  :titlestyle="{marginTop:'0px'}"></titlec>
            <div class="indexModelMar">
              <ul class="sixPanner">
                <li class="sixImgParent" @mouseover="mouseIndex('1')" @mouseleave="mouseLeave">
                  <img src="../assets/img/rongdu.png" alt="" :class="{'showSix':activeIndex != 1,'hideSix':activeIndex == 1}">
                  <img src="../assets/img/rongdu2.png" alt="" :class="{'showSix':activeIndex == 1,'hideSix':activeIndex != 1}">
                </li>
                <li @mouseover="mouseIndex('2')" @mouseleave="mouseLeave">
                  <img src="../assets/img/dasheng.png" alt="" :class="{'showSix':activeIndex != 2,'hideSix':activeIndex == 2}">
                  <img src="../assets/img/dasheng2.png" alt="" :class="{'showSix':activeIndex == 2,'hideSix':activeIndex != 2}">
                </li>
                <li @mouseover="mouseIndex('3')" @mouseleave="mouseLeave">
                  <img src="../assets/img/caijing.png" alt="" :class="{'showSix':activeIndex != 3,'hideSix':activeIndex == 3}">
                  <img src="../assets/img/caijing2.png" alt="" :class="{'showSix':activeIndex == 3,'hideSix':activeIndex != 3}">
                </li>
                <li @mouseover="mouseIndex('4')" @mouseleave="mouseLeave">
                  <img src="../assets/img/changhong.png" alt="" :class="{'showSix':activeIndex != 4,'hideSix':activeIndex == 4}">
                  <img src="../assets/img/changhong2.png" alt="" :class="{'showSix':activeIndex == 4,'hideSix':activeIndex != 4}">
                </li>
                <li @mouseover="mouseIndex('5')" @mouseleave="mouseLeave">
                  <img src="../assets/img/yanjiuyuan.png" alt="" :class="{'showSix':activeIndex != 5,'hideSix':activeIndex == 5}">
                  <img src="../assets/img/yanjiuyuan2.png" alt="" :class="{'showSix':activeIndex == 5,'hideSix':activeIndex != 5}">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
  import titlec from '../components/common/title.vue'
  import img1 from "../assets/img/icon1.png"
  import img2 from "../assets/img/icon2.png"
  import img3 from "../assets/img/icon3.png"
  import imgBg1 from "../assets/img/1.png"
  import imgBg2 from "../assets/img/2.png"
  import imgBg3 from "../assets/img/3.png"
  import imgBg4 from "../assets/img/4.png"
  import imgBg5 from "../assets/img/5.png"
  import imgBg6 from "../assets/img/6.png"
export default{
  props:{
    scroll:{
      default:0,
      String:Number
    }
  },
  watch:{
    'scroll':'animate',
    '$store.state.lang':'New_list'
  },
  data(){
    return {
      activeIndex:0,
      twoModel:false,
      twoModelTop:0,
      thirdModel:[{show:false},{show:false},{show:false},{show:false}],
      thirdModelTop:[0,0,0,0],
      fourModel:[{show:false},{show:false}],
      fourModelTop:[0,0],
      fiveModel:[{show:false},{show:false},{show:false}],
      fiveModelTop:[0,0,0],
      show:false,
      type:this.$store.state.lang,
      newsList:[],
      language:{
        en:{
          first:{
            big:'UNICORN',
            small:'A Secure Descentralised Mobile Infrastructure',
            downLoad:"WHITEPAPER",
            getScore:"UIC INTEGRAL"
          },
          sec:{
            title:'POW Consensus algorithm +Equipment fingerprint',
            subTitle:'Curb centralized mining pools, reduce energy consumption of mining, and provide a basis for large-scale application of mobile ecological chain.',
            content:[{img:img1,content:'based on Digital equipment fingerprinting and LBS，Design a new set of POW Consensus algorithm，Mobile intelligent terminal as a computing node Build a safe low consumption、decentration、Distributed of Mobile trust network system'},{img:img2,content:'unicorn adopt the consensus mechanism of workload proof，At the same time increase the adjustment mechanism to curb hashrate monopoly and concentrated mining，The core elements of the adjustment mechanism are UIC device ID and location information of the device.'},{img:img3,content:'Unicorn using the operating system API to obtain the equipment vendor information, hardware parameters, system version and other parameters, and confuse these information combinations in a specific way, and use the hash algorithm to generate a unique identity of the device: UIC device ID'}]
          },
          third:{
            title:'NEWS',
            more:'MORE'
          },
          four:{
            title:'Powerful ecosystem',
            liArr:[[{title:'Unicorn intelligent equipment',subTitle:'First section chain cell phone Changhong R8 Kirin',content:'UIC Wallet is the official purse of Unicorn, which is used to preserve the private key of the user, to manage the balance of the account, to provide the application of the UIC transaction, including the mobile wallet, the desktop purse, and the Internet wallet.',status:'Done',src:imgBg1},
              {title:'UIC Browser',subTitle:'A tool for querying blocks',content:'UIC Explorer is the official browser of Unicorn, which is used to publicly display the basic information such as block information, transaction information, account information and contract information on the Unicorn block chain, and provide information query function.',status:'Done',src:imgBg5},
              {title:'UIC Wallet',subTitle:'Safe and convenient block Chain Purse',content:'UIC Wallet is the official purse of Unicorn, which is used to preserve the private key of the user, to manage the balance of the account, to provide the application of the UIC transaction, including the mobile wallet, the desktop purse, and the Internet wallet.',status:'Doing',src:imgBg3}],
              [{title:'UIC Store',subTitle:'It is full of applications developed by block chain technology',content:'UIC Store is the official application market of Unicorn, which is developed by Unicorn eco developers based on Unicorn to Store, and can be paid to the users of the application according to the market demand, and UIC Store is an important part of Unicorn ecosystem.',status:'Doing',src:imgBg4},{title:'UIC IDE',subTitle:'Intelligent contract development tool',content:'UIC IDE is an intelligent contract development tool provided by Unicorn, which is used to compiling and compiling Unicorn intelligent contracts.',status:'Doing',src:imgBg2},
                {title:'DAPPS',subTitle:'More UIC based block chain applications are coming.，',content:'UIC DApp is built on the Unicorn block chain application, which is made up of intelligent contract and client code. According to the needs of the users and the characteristics of the mobile trust network, the DApp based on Unicorn is the basic unit of the ecological construction of Unicorn. With the evolution of the mobile trust network, it is pregnant with huge application space and business opportunities.',status:'Doing',src:imgBg6}]]
          },
          five:{
            title:'Project progress',
            fiveArr:[{title:'The third stage is to open the mobile trust network API, and initially form a business ecosystem.',content:['2018.Q2 on-line UIC Explorer, design intelligent contract development tool UIC IDE, define Unicorn standard Open API, launch a variety of Unicorn exclusive DApp.', '2018.Q3 opens the Unicorn standard API 1 version, develops UIC IDE, Unicorn cooperation ecology promotes at least one DApps, expands more mobile intelligence terminal cooperation partner.',"2018.Q4 Unicorn cooperation ecosystem launched a variety of DApp, developing Unicorn hardware wallet, initially forming a commercial application ecosystem."]},{title:'The second stage is to release mobile trust network and launch the first mobile intelligent terminal  (The team has completed all the second stages)',content:['2017.Q4 validifies the digital device fingerprint algorithm on the mobile intelligent terminal, and integrates the device ID and mobile location service into the block chain, and builds the minimum feasible mobile trust test network.', '2018.Q1 development completes Unicorn APP to realize the function of mining and wallet, deploying the first intelligent contract support equipment ID verification, designing UIC Explorer, selling the first mobile intelligent terminal, and completing the initial construction of the mobile trust network.']},{title:'The first stage is to build mobile trust test network on mobile intelligent terminals  (The team has completed all the first stages)',content:['2017.Q2 completes the design of the block chain underlying structure, defines the POW consensus mechanism optimization scheme, determines the digital equipment fingerprint algorithm, and defines the characteristics of the mobile phone equipment.', '2017.Q3 established the first mobile intelligent terminal co operator, developed digital device fingerprint algorithm, initially realized a new POW consensus mechanism, and built the least feasible testing environment.']}]
          },
          six:{
            title:'Cooperative partner'
          },
          other:{
            project:'Video',
            more:'Learn More'
          }
        },
        ch:{
            first:{
              big:'UNICORN',
              small:'A Secure Descentralised Mobile Infrastructure',
              downLoad:"白皮书下载",
              getScore:"获取UIC积分"
            },
            sec:{
              title:'POW共识算法 + 设备指纹技术',
              subTitle:'遏制集中式采矿池，降低采矿能源消耗，并为移动生态链的大规模应用提供了基础',
              content:[{img:img1,content:'基于数字设备指纹和移动位置服务技术，设计一套全新的POW共识机制，将移动智能终端作为计算节点，构建出一个安全低耗、去中介化、分布式的移动信任网络体系。'},{img:img2,content:'Unicorn采用工作量证明（POW）的共识机制，同时增加了调节机制，来遏制算力垄断和集中挖矿。调节机制核心要素是UIC设备ID和设备的位置信息。'},{img:img3,content:'Unicorn通过操作系统API获取设备的厂商信息，硬件参数，系统版本等参数，并特定方式将这些信息组合和混淆起来，再运用哈希算法生成一个该设备的唯一设备标识：UIC Device ID'}]
            },
            third:{
              title:'最新动态',
              more:'更多动态'
            },
            four:{
              title:'强大的生态系统',
              liArr:[[{title:'unicorn 智能设备',subTitle:'首款区块链手机长虹R8麒麟',content:'UIC Wallet是Unicorn的官方钱包，用于保存用户的私钥，管理账户余额，提供优克(UIC)交易的应用，包括移动钱包，桌面钱包、互联网钱包。',status:'已完成',src:imgBg1},
                {title:'UIC Browser',subTitle:'用于查询区块的工具',content:'UIC Explorer是Unicorn的官方浏览器，用于公开展示Unicorn区块链上区块信息，交易信息，账户信息和合约信息等基本信息，并提供信息查询功能。',status:'已完成',src:imgBg5},
                {title:'UIC Wallet',subTitle:'安全方便的区块链钱包',content:'UIC Wallet是Unicorn的官方钱包，用于保存用户的私钥，管理账户余额，提供优克(UIC)交易的应用，包括移动钱包，桌面钱包、互联网钱包。',status:'开发中',src:imgBg3}],
                [{title:'UIC Store',subTitle:'里面全是用区块链技术开发的应用',content:'UIC Store是Unicorn官方的应用市场，由Unicorn生态开发者基于Unicorn开发的DApp到Store，并可以根据市场需求，向应用的使用者收取指定数量UIC作为报酬，UIC Store是Unicorn生态重要组成部分。',status:'开发中',src:imgBg4},
                  {title:'UIC IDE',subTitle:'智能合约开发工具',content:'UIC IDE是Unicorn官方提供的智能合约开发工具，用于编写，编译Unicorn的智能合约。',status:'开发中',src:imgBg2},
                  {title:'DAPPS',subTitle:'更多基于UIC的区块链应用，',content:'UIC DApp是建立在Unicorn区块链上应用程序，是由智能合约和客户端代码构成的。由开发者根据用户的需求，结合移动信任网络的特点，基于Unicorn开发出的DApp是Unicorn生态建设的基础单位，随着移动信任网络的演进，孕育着巨大的应用空间和商业机会。',status:'筹备中',src:imgBg6}]]
            },
            five:{
              title:'项目进度',
              fiveArr:[{title:'第三阶段   开放移动信任网络API，初步形成商业生态',content:['2018.Q2 上线UIC Explorer，设计智能合约开发工具UIC IDE，定义Unicorn标准Open API 推出多款Unicorn独家DApp。', '2018.Q3 开放Unicorn标准API 1.0版本，开发UIC IDE，Unicorn合作生态推出至少一款DApps，拓展更多移动智能终端合作商。', '2018.Q4 Unicorn合作生态推出多款DApp，开发Unicorn硬件钱包，初步形成商业应用生态系统。']},{title:'第二阶段   发布移动信任网络，推出首款移动智能终端（目前团队已完成第二阶段全部事项 )',content:['2017.Q4 在移动智能终端上验证数字设备指纹算法，将设备ID和移动位置服务融入区块链中，搭建最小可行的移动信任测试网络。', '2018.Q1 开发完成Unicorn APP实现挖矿和钱包功能，部署首个智能合约支持设备ID验证，设计UIC Explorer，发售首款移动智能终端，完成移动信任网络初步构建。']},{title:'第一阶段   在移动智能终端上构建移动信任测试网络（目前团队已完成第一阶段全部事项 )',content:['2017.Q2 完成区块链底层架构设计，明确POW共识机制优化方案，确定数字设备指纹算法，定义需要手机设备特征。', '2017.Q3 确立首家移动智能终端合作商，开发数字设备指纹算法，初步实现全新POW共识机制，构建最小可行的测试环境。']}]
            },
            six:{
              title:'合作伙伴'
            },
            other:{
              project:'产品视频',
              more:'了解更多'
            }
          }
        }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$emit('leave',{enter:false});
    next();
  },
  methods:{
    mouseIndex(index){
      this.activeIndex = index;
    },
    mouseLeave(){
      this.activeIndex = 0;
    },
    getRads (degrees) {
      return (Math.PI * degrees) / 180;
    },
    vadioClick(type){
      if(type == 'more'){
        window.open('http://www.51ykzx.com');
      }else{
        this.show = true;
      }
    },
    New_list(type){
      var params = '0/4/' + (this.$store.state.lang=='ch'?'1':'2');
      this.interFace('New_list',params).then((res)=>{
        this.newsList = res.new;
        this.$nextTick(()=>{
          for(var i = 0;i<res.new.length;i++){
            this.thirdModelTop[i] = this.$refs['third'+i][0].offsetTop - (window.innerHeight || document.documentElement.clientHeight);
          }
          for(var i = 0;i<2;i++){
            this.fourModelTop[i] = this.$refs['four'+i][0].offsetTop - (window.innerHeight || document.documentElement.clientHeight);
          }
          for(var i = 0;i<3;i++){
            this.fiveModelTop[i] = this.$refs['five'+i][0].offsetTop - (window.innerHeight || document.documentElement.clientHeight);
          }
        })
      })
    },
    goTo(type){
      if(type){
        if(type.type == 1){
          window.open(type.url)
        }else{
          window.open('#/announceDetail/'+ type.id + '/-1/'+this.$store.state.lang);
        }
      }else{
        this.$router.push({name:'news',params: {lang: this.$store.state.lang}});
      }
    },
    animate(){
      if(this.scroll<this.twoModelTop)return;
      if(this.scroll>this.twoModelTop){
        this.twoModel = true;
      }
      for(var i= 0;i<4;i++){
        if(this.scroll>this.thirdModelTop[i]){
          this.$set(this.thirdModel[i],'show',true);
        }
      }
      for(var i = 0;i<2;i++){
        if(this.scroll>this.fourModelTop[i]){
          this.$set(this.fourModel[i],'show',true);
        }
      }
      for(var i = 0;i<3;i++){
        if(this.scroll>this.fiveModelTop[i]){
          this.$set(this.fiveModel[i],'show',true);
        }
      }
    },
    downLoadFn(){
      window.open("../../static/pdf/white-paper-"+this.$store.state.lang+".pdf");
    }
  },
  created(){
    this.$emit('leave',{enter:true})
//    this.type = this.languageType(this.$route.params.lang);
    this.$store.state.lang = this.$route.params.lang || 'ch';
//    this.type = this.$route.params.lang;
    this.New_list();
    var that = this;
    this.$nextTick(function () {
      that.twoModelTop = that.$refs.twoModelRef.offsetTop - (window.innerHeight || document.documentElement.clientHeight);
    })
  },
  components:{
    titlec
  }
}
</script>
<style>
  video::-internal-media-controls-download-button {
    display:none;
  }

  video::-webkit-media-controls-enclosure {
    overflow:hidden;
  }

  video::-webkit-media-controls-panel {
    width: calc(100% + 30px);
  }
  .cir{
    display: inline-block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    box-sizing: border-box;
    float: left;
    background: white;
  }
  .cirD6{
    border:5px solid #CCD0D6;
  }
  .cir00{
    border:5px solid #FF9900;
  }
  .Basic,.system{
    display: inline-block;
    float: left;
    width: 85%;
  }
  .Basic > li,.system>li{
    display: inline-block;
    float: left;
    width: 47%;
  }
  .Basic > li>img,.system> li>img{
    width: 100%;
    max-width: 388px;
    display: inline-block;
    text-align: center;
    margin-top: 5px;
  }
  .system>li:nth-of-type(2),.Basic > li:nth-of-type(2){
    float: right;
  }
  .fourLeft{
    display: inline-block;
    width: 15%;
    float: left;
    font-size: 24px;
  }
  .fourLeft>span{
    color: #000033;
  }
  .ch1{
    margin-top: 30px;
  }
  .ch{
    margin-top: 10px;
  }
  p{
    color: #666666;
    font-family:'PingFang SC','Avenir', Helvetica, Arial, sans-serif;
  }
  .baseAndSys{
    color: #000033;
  }
  .accessLR{
    width: 100%;
    display: inline-block;
    text-align: center;
    margin-top: 5px;
    padding: 15px 0;
    color: #000033;
  }
  .videoStyle{
    float: right;
    margin-top: 220px;
    text-align: center;
    max-width: 514px;
    width:42%;
  }
  .videoStyle video{
    width:100%;
    box-shadow: 0 0 25px 25px #F8F9FB;
  }
.core7{
  display: inline-block;
  width: 20%;
  text-align: center;
  float: left;
  box-sizing:content-box;
  height: 100%;
}
  .core7 img{
    width: 150%;
  }
  .linegradient{
    background: -webkit-linear-gradient(#ebf1f7,white,white,white,white);
    background: -o-linear-gradient(#ebf1f7,white,white,white,white);
    background: -moz-linear-gradient(#ebf1f7,white,white,white,white);
    background:linear-gradient(#ebf1f7,white,white,white,white);
  }
  .fiveLiBg{
    background: #f6f9fc;
  }
  .indexFiveunder{
    display: inline-block;
    border-top: 2px solid #5c58eb;
    width: 20px;
    margin: 10px 0 14px 0;
  }
  .indexFiveunder1{
    border-top: 2px solid #d2d8e1;
  }
  .indexBgPic{
    background: url('../assets/img/indexBigBg.png') no-repeat;
    background-position-y: -80px ;
  }
  .sixPanner{
    overflow: hidden;
  }
  .sixPanner li{
    float: left;
    cursor: pointer;
  }
  .sixPanner li img{
    display: block;
  }
  .sixBg{
    background: url('../assets/img/bg.png') no-repeat;
    padding-top: 79px;
    height: 320px;
    box-sizing: border-box;
  }
  .hideSix{
    display: none!important;
  }
  .showSix{
    display: block!important;
  }
</style>
