/**
 * Created by gm on 2017/12/21.
 */
export default{
  install(Vue){
    var global = {
        'New_list':'Untoken/New_list/',
        'New_type':'Untoken/New_type/',
        'New_info':'Untoken/New_info/',
    };
    if(window.location.host.indexOf("uicbase.io")>-1 || window.location.host.indexOf("116.62.171.233")>-1){//线上环境  接口前缀
      var urlOri = window.location.protocol +'//'+ window.location.host+'/';
      // var urlOri = '//webapi.uicbase.io/';
    }else{//测试环境  接口前缀 http://116.62.171.233:8011
      var urlOri = '/api/';
    }
    Vue.prototype.allSrc = function(){
      if(window.location.host.indexOf("uicbase.io")>-1){//线上环境  接口前缀
        var urlOri = window.location.protocol +'//'+ window.location.host+'/';
      }else{//测试环境  接口前缀
        var urlOri = 'http://192.168.2.29';
      }
      return urlOri;
    }
    Vue.prototype.interFace = function(urlParam,params){
      var url = urlOri + global[urlParam] + params;
      var promise = new Promise((resolve, reject)=>{
        var that = this;
        this.$http.get(url).then(function(res){
          if(res.data.status == 1){
            resolve(res.data.body)
          }
        }).catch(function(err){
          reject(err)
        })
      })
      return promise;
    };
    Vue.filter('time', function (value) {
      if (!value) return '';
      var now = new Date(value*1000),m = now.getMonth() + 1,d = now.getDate();
      return (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 5);
    });
    Vue.filter('timeYMDHMS', function (value) {
      if (!value) return '';
      function timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '/';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
        var D = date.getDate() + ' ';
        var h = date.getHours()<10?'0'+date.getHours() : date.getHours() + ':';
        var m = date.getMinutes()<10?'0'+date.getMinutes() : date.getMinutes()+ ':';
        var s = date.getSeconds()<10?'0'+date.getSeconds() : date.getSeconds();
        return Y+M+D+h+m+s;
      }
      return timestampToTime(value*1000)
    });
    Vue.filter('replacesrc',function(value){
      if (!value) return '';
      console.log(value);
      return '<p>sgfasdfasdfasdf</p>'
    })
  }
}

