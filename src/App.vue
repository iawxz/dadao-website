<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  props: {},
  components: {},
  created() {
    console.log(document.documentElement.scrollTop,document.body.scrollTop,window.pageYOffset)
  },
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      this.$router.replace("/home_m");
    } else {
      // alert("pc端");
      this.$router.replace("/");
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

  methods: {
    // 判断是否用通信设备打开网页
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
  overflow-y: auto;
  position: relative;
}
</style>
