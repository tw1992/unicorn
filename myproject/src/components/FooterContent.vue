<template>
    <div class="footer fontSize14" style="color: #797f96;">
      <img src="../assets/img/but-banner.png" alt="" style="display: block">
      <div style="position: absolute;top: 0;padding: 40px 0;width: 100%;">
        <div class="containerWidth" style="border-bottom: 1px solid #292252;" :style="$store.state.lang == 'en'?{paddingBottom:'26px'}:{paddingBottom:'38px'}">
          <div style="color: #a5b1c3;" class="clear">
            <img src="../assets/img/logo.png" alt=""><br>
            <div class="clear" style="margin-top: 25px;position: relative;">
              <div style="float: left;width: 79%;">
                <div style="margin-bottom: 10px;margin-top: -5px;">
                  {{language[$store.state.lang].p1}}
                </div>
                <div>
                  {{language[$store.state.lang].p2}}
                </div>
              </div>
              <div style="position: absolute;right: 0;bottom: 0;">
                <span class="imgList">
                  <img src="../assets/img/weibo.png" alt="">
                  <img src="../assets/img/weixin.png" alt="">
                  <img src="../assets/img/facebook.png" alt="">
                  <img src="../assets/img/twitter.png" alt="">
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align: center;position: absolute;bottom: 20px;width: 100%;">
        Copyright 2018  uicbase.io  All Rights Reserved
      </div>
    </div>
</template>
<style>
</style>
<script>
export default{
    data(){
        return {
          type:'',
            language:{
              en:{
                p1:'It was gathered by a group of core ideas that Nakamoto So believed in creating bitcoins.',
                p2:'One CPU one vote nature expected to return to work proof (POW) mechanism Building a decentralized trust network ecosystem through incentive mechanism'
              },
              ch:{
                p1:'是由一群信奉中本聪创立比特币时的核心理念汇聚而成',
                p2:'希望回归工作量证明（POW）机制的一CPU一票本质，通过激励机制构建去中心化的信任网络生态'
              }
            }
        }
    }
}
</script>
