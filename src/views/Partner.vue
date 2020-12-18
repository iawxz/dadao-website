<template>
  <div class="partner">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <!-- 设计单位 -->
      <div class="designer contentBox" v-if="selectIndex == 0">
        <div class="essay">
          <p class="title">大稻启运 全球知名合作伙伴</p>
          <p class="text">
            大稻启运集团始终与世界顶尖的建筑设计力量一起，思考中国核心城市未来商业地产发展趋势，并以自身的产品追求与专业速度，广泛赢得世界级设计团队的尊重，并形成长期合作伙伴。
          </p>
        </div>
        <img src="../assets/4_partner/1.png" alt="" />
      </div>
      <!-- 平台资源 -->
      <div class="enterprise contentBox" v-else-if="selectIndex == 1">
        <img src="../assets/4_partner/2.png" alt="" />
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageNav from "../components/pageNav";
export default {
  name: "partner",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      selectIndex: 0, //默认为0
    };
  },
  props: {},
  components: {
    pageNav,
  },
  mounted() {},
  methods: {
    getSelectIndex(index) {
      this.selectIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.partner {
  height: 100%;
  .content {
    display: flex;
    justify-content: center;
    .contentBox {
      width: 60%;
      margin: 60px auto;
      .essay {
        width: 53%;
        font-family: '宋体';        
        .title {
          margin-bottom: 30px;
          font-size: 25px;
          font-weight: bold;
          color: #9fa0a5;
        }
        .text {          
          margin-bottom: 30px;
          font-size: 16px;
          color: 353535;
          line-height: 30px;
        }
      }
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>