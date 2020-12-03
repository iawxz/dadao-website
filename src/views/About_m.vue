<template>
  <div class="about">
    <pageHeader_M @sendIndex="getIndex"></pageHeader_M>
    <img
      class="optionImg"
      style="width: 100%; display: block"
      src="../assets/0_common_M/option.png"
      alt=""
    />
    <div class="content">
      <div class="intro" v-if="navIndex == 0">
        <p class="title">关于大稻启运</p>
        <p class="title_EN">ABOUT DA DAO QI YUN</p>
        <p class="text">
          大稻启运最早成立于2007年, 总部坐落在美丽的杭州 钱塘江畔。
        </p>
        <p class="text">
          大稻启运定位于“成为城市商业，产业服务的一流供
          应商。”核心业务包括地产开发、工程建设、产业投 资、高端医疗及艺术投资。
        </p>
        <p class="text">
          在多元化的经营理念下，大稻启运积极拓展业务版图，
          使其经济实力和区域影响力不断地快速提升。
        </p>
      </div>
      <div class="philosophy" v-else-if="navIndex == 1">
        <div
          class="philosophyBox"
          v-for="(item, index) in philosophy"
          :key="index"
        >
          <img :src="item.img" alt="" />
          <p class="title" v-text="item.title"></p>
          <p class="text" v-text="item.text"></p>
        </div>
      </div>
      <div class="architecture" v-else-if="navIndex == 2">
        <img src="../assets/2_about/architecture_m.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      philosophy: [
        {
          img: require("../assets/2_about/icon1.png"),
          title: "企业定位",
          text: "成为城市商业产业服务的一流供应商。",
        },
        {
          img: require("../assets/2_about/icon2.png"),
          title: "企业文化",
          text: "与同道者同行，与同行者同享",
        },
        {
          img: require("../assets/2_about/icon3.png"),
          title: "企业信仰",
          text: "真诚、专注、极致、完美",
        },
      ],
    };
  },
  computed: {},
  props: {},
  components: {},
  mounted() {},
  methods: {
    getIndex(index) {
      this.navIndex = index;
    },
  },
};
</script>

<style scoped>

/* 介绍 */
.intro{
  padding: 40px 75px 0;
}
.intro .title {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #b69d74;
  margin-bottom: 16px;
}
.intro .title_EN {
  font-size: 32px;
  font-family: Roboto;
  font-weight: bold;
  color: #616161;
  opacity: 0.3;
  margin-bottom: 30px;
}
.intro .text {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #616161;
  line-height: 40px;
  opacity: 0.8;
  margin-bottom: 24px;
}
/* 理念 */
.philosophy{
  padding: 40px 75px 0;
}
.philosophyBox{
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.philosophyBox img {
  width: 80px;
  height: 80px;
  display: block;
  margin-bottom: 15px;
}
.philosophyBox p.title {  
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #3d3d3d;
  margin-bottom: 15px;
}

/* 架构 */
.architecture img{
  width: 100%;
  display: block;
}
</style>