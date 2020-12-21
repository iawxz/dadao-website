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
        margin-left: 20px;
        .title {          
          font-size: 22px;
          font-weight: bold;
          font-family: '宋体';
          color: #808080;
          margin-bottom: 30px;
        }
        .text {                    
          font-size: 18px;
          font-family: '宋体';
          color: #505050;
          line-height: 35px;
          margin-bottom: 30px;
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