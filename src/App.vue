<template>
  <div id="app" @scroll="scrollGet($event)">
    <router-view :isScroll="isScroll" />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isScroll: false, //是否滚动页面进入页面,默认未滚动
    };
  },    
  props: {},
  components: {},
  created() {},
  mounted() {    
    if (this._isMobile()) {
      // alert("手机端");
      this.$router.replace('/home_m');
    } else {
      // alert("pc端");
      this.$router.replace('/');
    }
    // window.addEventListener("load", () => {            
    //   for(var i of this.navlist){
    //     if(i.url == this.$route.path){
    //       this.page_now = i.index
    //     }
    //   }
    //   // 刷新后返回官网首页
    //   // if (this.$route.path !== "/") {
    //   //   // /print 表示首页
    //   //   this.$router.replace("/"); // 切换到首页
    //   // }
    // });
  },
  watch: {
    '$route': function(to,from){
　    document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  methods: {
    // 判断是否用通信设备打开网页
    _isMobile() {
  	  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	    return flag;
    },
    scrollGet(e) {
      // console.log(e.srcElement.scrollTop, e.target.scrollTop)
      localStorage.setItem("isScroll","value");
      if (e.srcElement.scrollTop === 0) {
        this.isScroll = false
      } else {
        this.isScroll = true
      }
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  // touch-action: none;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  overflow-y: auto;
  position: relative;
}
</style>
