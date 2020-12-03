<template>
  <div class="partner">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <!-- 设计单位 -->
      <div class="designer" v-if="selectIndex == 0">
        <img src="../assets/4_partner/1.png" alt="">
      </div>
      <!-- 相关企业 -->
      <div class="enterprise" v-else-if="selectIndex == 1">
        <img src="../assets/4_partner/2.png" alt="">
      </div>
      <!-- 俱乐部 -->
      <div class="club" v-else-if="selectIndex == 2">
        <img src="../assets/4_partner/3.png" alt="">
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
    height: 770px;
    display: flex;
    justify-content: center;
    img{
      width: 100%;
    }
  }
}
</style>