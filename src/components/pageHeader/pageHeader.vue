<template>
  <div class="pageHeader">
    <div
      v-if="page_now != 1"
      class="header_height"
      style="height: 100px; visibility: hidden"
    ></div>
    <header :class="{ header_home: page_now == 1 && isScroll == false }">
      <img
        v-if="page_now == 1 && isScroll == false"
        src="@/assets/0_common/logo.png"
        alt=""
      />
      <img v-else src="@/assets/0_common/logo_else.png" @click="goPage('Home','/','1')" alt="" />
      <div class="navlist">
        <div
          class="nav"
          v-for="(item, index) in navlist"
          :key="index"
          @click="goPage(item.name, item.url, index + 1)"
        >
          <p>{{ item.title }}</p>
          <div
            class="dash"
            :class="{ dash_chose: page_now == index + 1 }"
          ></div>
        </div>
      </div>
    </header>    
  </div>
</template>

<script>
export default {
  name: "pageHeader",
  data() {
    return {
      navlist: [
        {
          title: "首页",
          name: "Home",
          url: "/",
          index: 1,
        },
        {
          title: "走进大稻",
          name: "About",
          url: "/about",
          index: 2,
        },
        {
          title: "大稻产业",
          name: "Estate",
          url: "/estate",
          index: 3,
        },
        {
          title: "合作伙伴",
          name: "Partner",
          url: "/partner",
          index: 4,
        },
        {
          title: "新闻动态",
          name: "News",
          url: "/news",
          index: 5,
        },
        {
          title: "加入大稻",
          name: "Join",
          url: "/join",
          index: 6,
        },
        {
          title: "联络大稻",
          name: "Contact",
          url: "/contact",
          index: 7,
        },
      ],      
      page_now: 1, //当前页面，默认为1首页
    };
  },
  props: ['isScroll'],
  components: {},
  created () {
  },
  mounted() {
    var path_arr = window.location.href.split('/')
    var path_length = path_arr.length
    var path = '/' + path_arr[path_length-1]    
    for (var i of this.navlist){
      if (i.url == path) {
        this.page_now = i.index
        return
      }
    }    
  },
  methods: {
    goPage(name, url, index) {
      this.page_now = index;
      this.$router.push({
        name: name,
        params: {
          navIndex: index,
        },
      });
    },
    goPage_News(item){
      this.$router.push({
        name: item.name,
        params: {
          newsDetail: item.item
        },
      });
    },
    goPage_Estate(item){
      this.$router.push({
        name: item.name,
        params: {
          navIndex: item.index,
          selectIndex: item.selectIndex
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100px;
  background: #ffffff;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 190px;
    height: 50;
    margin-left: 100px;
    cursor: pointer;
  }

  .navlist {
    margin-right: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav {
      height: 100px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      text-decoration: none;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #616161;
      margin: 0 20px;

      // 导航栏文字不可选中
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .dash {
        width: 100%;
        height: 5px;
        background: #b69d74;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
      }
      .dash_chose {
        visibility: visible;
      }
    }
    .nav:hover {
      .dash {
        visibility: visible;
      }
    }
  }
}

.header_home {
  background: transparent;
  .navlist {
    .nav {
      color: #ffffff;
      .dash {
        width: 100%;
        height: 5px;
        background: #ffffff;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
}
</style>