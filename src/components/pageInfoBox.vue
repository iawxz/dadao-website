<template>
  <div class="infobox">
    <div class="codeBox">
      <p>● 关注我们 ●</p>
      <img class="QRcode" src="../assets/0_common/QRcode.png" alt="" />
    </div>
    <div class="iconBox">
      <img
        class="icon"
        src="../assets/0_common/icon_email.png"
        style="width: 46px; height: 36px"
        alt=""
      />
      <p>邮箱：hzyj_51hm@163.com</p>
    </div>
    <div class="iconBox">
      <img
        class="icon"
        src="../assets/0_common/icon_phone.png"
        style="width: 46px; height: 45px"
        alt=""
      />
      <p>电话：0571-8277 9395/ 9299 6725</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.infobox {
  margin-top: 60px;
  margin-left: 357px;
  .codeBox {
    .QRcode {
      width: 140px;
      height: 140px;
      display: block;
      margin-bottom: 26px;
    }
    p{
      width: 140px;
      text-align: center;
      margin-bottom: 20px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      opacity: 0.7;
    }
  }

  .iconBox {
    margin-bottom: 26px;
    .icon {
      display: block;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      opacity: 0.7;
    }
  }
}
</style>