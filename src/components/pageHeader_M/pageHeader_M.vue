<template>
  <header>
    <div class="header">
      <img
        class="nav"
        src="@/assets/0_common_M/icon_nav_open.png"
        v-if="!isOpen"
        @click="openNavLists"
        alt=""
      />
      <img
        class="nav"
        src="@/assets/0_common_M/icon_nav_close.png"
        v-else-if="isOpen"
        @click="openNavLists"
        alt=""
      />
      <img src="@/assets/0_common_M/logo.png" alt="" />
    </div>
    <div
      class="navlists"
      :class="[
        isOpened == true ? (isOpen == true ? 'navShow' : 'navHide') : '',
      ]"
    >
      <div
        class="navlist"
        v-for="(item, index) in navlist"
        :key="index"
        @click="navChoose(item.children, index)"
      >
        {{ item.title }}
        <img
          v-if="item.children.length"
          src="@/assets/0_common_M/icon_expand.png"
          alt=""
        />
      </div>
      <div class="navChildren" :class="{ navBack: navChild.length == 0 }">
        <div
          class="list"
          v-for="(item, index) in navChild"
          :key="index"
          @click="navChildChoose(index)"
        >
          {{ item.title }}
        </div>
        <div class="back" @click="navChooseBack">
          <img src="@/assets/0_common_M/icon_back_R.png" alt="" />
          <p>返回</p>
        </div>
      </div>
    </div>
    <div class="mask" v-if="isOpen == true" @click="navClose"></div>
    <div class="headerBody"></div>
  </header>
</template>

<script>
export default {
  name: "pageHeader_M",
  data() {
    return {
      navlist: [
        {
          title: "首页",
          name: "Home_m",
          url: "/home_m",
          index: 1,
          children: [],
        },
        {
          title: "走进大稻",
          name: "About_m",
          url: "/about_m",
          index: 2,
          children: [
            {
              title: "企业介绍",
              index: 1,
            },
            {
              title: "企业理念",
              index: 2,
            },
            {
              title: "企业架构",
              index: 3,
            },
          ],
        },
        {
          title: "大稻产业",
          name: "Estate_m",
          url: "/estate_m",
          index: 3,
          children: [
            {
              title: "大稻地产",
              index: 1,
            },
            {
              title: "大稻建设",
              index: 2,
            },
            {
              title: "产业投资",
              index: 3,
            },
            {
              title: "大健康",
              index: 4,
            },
            {
              title: "文化艺术",
              index: 5,
            },
          ],
        },
        {
          title: "合作伙伴",
          name: "Partner_m",
          url: "/partner_m",
          index: 4,
          children: [
            {
              title: "设计单位",
              index: 1,
            },
            {
              title: "知名企业",
              index: 2,
            },
            {
              title: "俱乐部",
              index: 3,
            },
          ],
        },
        {
          title: "新闻动态",
          name: "News_m",
          url: "/news_m",
          index: 5,
          children: [],
        },
        {
          title: "加入大稻",
          name: "Join_m",
          url: "/join_m",
          index: 6,
          children: [
            {
              title: "组织文化",
              index: 1,
            },
            {
              title: "人才招聘",
              index: 2,
            },
          ],
        },
        {
          title: "联络大稻",
          name: "Contact_m",
          url: "/contact_m",
          index: 7,
          children: [],
        },
      ],
      isOpen: false, //是否打开 导航栏
      isOpened: false, //是否打开过 导航栏
      navChild: [],
      navIndex: "",
      navChildIndex: "",
    };
  },
  props: [],
  components: {},
  mounted() {},
  methods: {
    openNavLists() {
      this.isOpen = !this.isOpen;
      this.isOpened = true;
    },
    navChooseBack() {
      this.navChild = [];
    },
    navChoose(item, index) {
      this.navChild = item;
      this.navIndex = index;
      if (this.navlist[index].children.length == 0) {
        this.isOpen = false;
        // console.log("前往 " + this.navlist[index].title + " 页");
        this.$router.push({
          name: this.navlist[index].name
        });
      }
    },
    outChoose(index){
      this.navIndex = index;
    },
    navChildChoose(index) {
      this.navChildIndex = index;
      this.isOpen = false;
      // console.log(
      //   "前往 " +
      //     this.navlist[this.navIndex].title +
      //     "-" +
      //     this.navChild[this.navChildIndex].title +
      //     " 页"
      // );
      this.$router.push({
        name: this.navlist[this.navIndex].name,
        params: {
          navIndex: index,
        },
      });
      this.$emit('sendIndex',index)
      this.navChild = [];
    },
    navClose() {
      this.isOpen = false;
      this.navChild = [];
    },
  },
};
</script>

<style scoped>
.headerBody {
  width: 100%;
  height: 140px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 200;
}
.header .nav {
  margin-left: 75px;
  width: 78px;
  height: 82px;
}
.header img {
  margin-right: 75px;
  width: 279px;
  height: 80px;
  display: block;
}
.navlists {
  overflow: hidden;
  position: fixed;
  top: -700px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0px);

  width: 600px;
  height: 700px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 150;
}
.navShow {
  animation: navDown 0.5s linear;
  transform: translate(-50%, 850px);
}
.navHide {
  animation: navUp 0.5s linear;
  transform: translate(-50%, 0px);
}
@keyframes navDown {
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, 850px);
  }
}
@keyframes navUp {
  0% {
    transform: translate(-50%, 850px);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
.navlists .navlist {
  width: 200px;

  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  opacity: 0.7;
  margin-bottom: 35px;

  display: flex;
  align-items: center;
}
.navlists .navlist img {
  width: 31px;
  height: 30px;
  display: block;
  margin-left: 20px;
}
.navlists .navChildren {
  position: absolute;
  top: 0;
  right: -600px;

  width: 600px;
  height: 700px;
  background: linear-gradient(0deg, #b48942 0%, #cfa765 100%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: navChildrenShow 0.5s linear;
  transform: translateX(-600px);
}
.navlists .navBack {
  animation: navChildrenHide 0.5s linear;
  transform: translateX(0px);
}
@keyframes navChildrenShow {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-600px);
  }
}
@keyframes navChildrenHide {
  0% {
    transform: translateX(-600px);
  }
  100% {
    transform: translateX(0);
  }
}
.navlists .navChildren .list {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 35px;
}
.navlists .navChildren .back {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.navlists .navChildren .back img {
  width: 56px;
  height: 56px;
  display: block;
}
.navlists .navChildren .back p {
  margin-top: 10px;
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
  animation: maskShow 1s;
}
@keyframes maskShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>