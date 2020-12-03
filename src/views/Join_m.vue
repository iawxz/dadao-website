<template>
  <div class="join">
    <pageHeader_M @sendIndex="getIndex"></pageHeader_M>
    <img
      class="optionImg"
      style="width: 100%; display: block"
      src="../assets/0_common_M/option.png"
      alt=""
    />
    <div class="content">
      <div class="culture" v-if="navIndex == 0">
        <p class="title">大稻口号：</p>
        <p class="text">一家人、一件事、一起干、一定赢!</p>
        <p class="title">大稻精神：</p>
        <p class="text">对上以敬、对事以真、对人以诚。</p>
        <p class="title">大稻信念：</p>
        <p class="text">这个世界上最快的捷径便是脚踏实地。</p>
      </div>
      <div class="flow" v-else-if="navIndex == 1">
        <div class="info">
          <div
            class="infoBox"
            :class="{ infoBox_reverse: index % 2 != 0 }"
            v-for="(item, index) in info"
            :key="index"
          >
            <img :src="item.img" alt="" />
            <div class="textBox">
              <p class="title" v-text="item.title"></p>
              <p class="text" v-html="item.text"></p>
            </div>
          </div>
        </div>
        <img src="../assets/6_join_M/flow.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "join",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      info: [
        {
          img: require("../assets/6_join_M/1.png"),
          title: "岗位说明",
          text:
            "有意者可在智联招聘、猎聘网、前程无忧等招聘网站搜索“诚稻置业”查看最新招聘动态并投递简历。",
        },
        {
          img: require("../assets/6_join_M/2.png"),
          title: "薪酬福利",
          text:
            "具体岗位薪资面议；五险一金、高温补贴、包吃、节目福利、员工旅游、部门活动、内部培训等等。",
        },
        {
          img: require("../assets/6_join_M/3.png"),
          title: "联系方式",
          text:
            "公司地址：杭州市钱江世纪城望京商务中心40A层(地铁2号线盈丰路站A出口);<br>邮箱投递：249339298@qq.com",
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
.culture {
  padding: 40px 75px 0;
}
.culture .title {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #b69d74;
  margin-bottom: 20px;
}
.culture .text {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 31px;
  opacity: 0.7;
  margin-bottom: 40px;
}
.flow .info {
  padding: 0 73px;
}
.flow .info .infoBox {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}
.flow .info .infoBox img {
  width: 250px;
}
.flow .info .infoBox .textBox {
  /* width: 370px; */
  margin-left: 20px;
}
.flow .info .infoBox .textBox .title {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  opacity: 0.9;
  margin-bottom: 10px;
}
.flow .info .infoBox .textBox .text {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  line-height: 36px;
  opacity: 0.8;
}
.flow .info .infoBox_reverse {
  flex-direction: row-reverse;
}
.flow .info .infoBox_reverse .textBox {
  margin-right: 20px;
  margin-left: 0;
}
.flow img {
  width: 100%;
}
</style>