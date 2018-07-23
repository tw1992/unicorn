<template>
    <div>
      <nav>
        <ul class="pagination">
          <li :class="{'disabled': current == 1}" @click="setCurrent(current - 1)"> < </li>
          <li v-for="p in grouplist" :class="{'active': current == p.val}" @click="setCurrent(p.val)">{{ p.text }}</li>
          <li :class="{'disabled': current == page}" @click="setCurrent(current + 1)"> ></li>
        </ul>
      </nav>
    </div>
</template>
<script>
    export default{
      props: {
        total: {            // 数据总条数
          type: Number,
          default: 0
        },
        display: {            // 每页显示条数
          type: Number,
          default: 10
        },
        currentPage: {            // 当前页码
          type: Number,
          default: 1
        },
        pagegroup: {        // 分页条数 -- 奇数
          type: Number,
          default: 5,
          coerce:function(v){
            v = v > 0 ? v : 5;
            return v % 2 === 1 ? v : v + 1;
          }
        }
      },
      data(){
        return {
//          current:this.currentPage
        }
      },
      computed: {
        current:function(){
          return this.currentPage;
        },
        page:function() { // 总页数
          return Math.ceil(this.total / this.display);
        },
        grouplist:function(){ // 获取分页页码
          var len = this.page , temp = [], list = [], count = Math.floor(this.pagegroup / 2) ,center = this.current;
          if( len <= this.pagegroup ){
            while(len--){ temp.push({text:this.page-len,val:this.page-len});};
            return temp;
          }
          while(len--){ temp.push(this.page - len);};
          var idx = temp.indexOf(center);
          (idx < count) && ( center = center + count - idx);
          (this.current > this.page - count) && ( center = this.page - count);
          temp = temp.splice(center - count -1, this.pagegroup);
          do {
            var t = temp.shift();
            list.push({
              text: t,
              val: t
            });
          }while(temp.length);
          if( this.page > this.pagegroup ){
            (this.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });
            (this.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });
          }
          return list;
        }
      },
      methods: {
        setCurrent: function(idx) {
          if( this.current != idx && idx > 0 && idx < this.page + 1) {
            var data = idx;
            this.$emit('pagechange',data);
          }
        }
      }
    }
</script>
<style>
  .pagination{
    text-align: center;
    font-size: 0;
  }
  .pagination li{
    display: inline-block;
    border:1px solid #ebf2f8;
    width:25px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    margin:0 5px;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
  }
  .active{
    background: #5c58eb;
    color: #FFFFFF;
  }
  .active a{
    color: #FFFFFF;
  }
  nav{
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
</style>
