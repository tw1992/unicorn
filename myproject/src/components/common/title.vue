<template>
    <div>
      <div class="titles" :style="titlestyle">
        <span style="position: relative;display: inline-block">
          <span style="font-size: 28px;">{{content}}</span>
          <img src="../../assets/img/tu.png" alt="">
          <slot name="subTitle"></slot>
          <img src="../../assets/img/arrUpLight.png" alt="" :class="{'topPosition':showslot,'noSlot':!showslot}">
        </span>
      </div>
    </div>
</template>
<script>
export default{
  props:{
     content:{
       type: String,
       default:''
     },
    showslot:{
       default:false
    },
    titlestyle:{
      default: function () {
        return {
          marginTop:'130px'
        }
      }
    }
  }
}
</script>
<style>
  .titles{
    font-weight: bold;
    text-align: center;
  }
  .titles img{
    position: absolute;
  }
  .titles img:nth-of-type(1){
    top:-5px;
    left: -20px;
  }
  .noSlot{
    bottom: -10px;
    left:calc(50% - 3px);
  }
  .topPosition{
    top: 107px;
    left:50%;
  }
</style>
