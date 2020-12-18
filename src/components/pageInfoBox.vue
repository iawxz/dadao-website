<template>
  <div class="infobox">
    <div class="codeBox">
      <p><span></span>关注我们<span></span></p>
      <div class="QRbox">
        <img class="QRcode" src="../assets/0_common/QRcode.png" alt="" />
      </div>
    </div>
    <div class="iconBox">
      <img
        class="icon"
        src="../assets/0_common/icon_email.png"
        style="width: 46px; height: 36px"
        alt=""
      />
      <p>邮箱：postmaster@dadaoqiyun.com</p>
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .QRbox {
      border: 3px solid #B69D74;
      margin-bottom: 26px;
      padding: 3px;
      .QRcode {
        width: 140px;
        height: 140px;
        display: block;        
      }
    }

    p {
      width: 140px;
      text-align: center;
      margin-bottom: 20px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      opacity: 0.7;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 0 10px;
        background-color: #B69D74;
      }
    }
  }

  .iconBox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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