<template>
  <footer>
    <!-- 版权信息 -->
    <div class="copyright">
      <p>版权所有：大稻启运集团 I 备案号 <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备18048792号-1</a></p>
      <p>联系大稻启运：400011000</p>
    </div>
    <!-- 媒体平台 -->
    <div class="media">
      <p>关注大稻启运</p>
      <div class="iconBox">
        <div class="icon">
          <img src="@/assets/0_common/icon_wechat.png" alt="" />
          <div class="show">
            <p>扫码关注公众号</p>
            <img src="../../assets/0_common/QRcode.png" alt="" />
          </div>
        </div>
        <div class="icon">
          <img src="@/assets/0_common/icon_miniP.png" alt="" />
          <div class="show">
            <p>扫码使用小程序</p>
            <img src="../../assets/0_common/miniCode.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "pageFooter",
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
footer {
  width: 100%;
  height: 100px;
  background: #3f3f3f;

  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .copyright {
    p:first-child {
      margin-bottom: 10px;
      a{
        color: white;
        text-decoration: none;
      }
      a:hover{
        color: rgb(0, 132, 255);
      }
    }
  }
  .media {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin-right: 23px;
    }
    .iconBox {
      display: flex;
      .icon {
        position: relative;
        margin-right: 12px;
        img {
          width: 42px;
          height: 42px;
        }
        .show {
          display: none;
        }
      }
      .icon:hover {
        .show {
          display: block;
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);

          width: 170px;
          height: 150px;
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            width: 15px;
            margin: 0;
            margin-right: 5px;
            color: #666666;
          }
          img{
            width: 130px;
            height: 130px;
          }
        }
      }
    }
  }
}
</style>