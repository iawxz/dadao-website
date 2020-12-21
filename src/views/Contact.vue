<template>
  <div class="contact">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <div class="LR_layout" v-if="selectIndex == 0">
        <div class="left">
          <div class="title">
            <img src="../assets/7_contact/dadao_logo.png" alt="">
            <p>Craftsmanship and quality</p>
            <p>匠心千里，品质百代</p>
          </div>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="infoBox">
            <div class="info location">
              <img
                src="../assets/0_common/icon_location.png"
                style="width: 35px; height: 45px"
                alt=""
              />
              <p>
                公司地址：浙江省杭州市萧山区鸿宁路钱江世纪城望京商务中心B座40A
              </p>
            </div>
            <div class="info email">
              <img
                src="../assets/0_common/icon_email.png"
                style="width: 46px; height: 34px"
                alt=""
              />
              <p>电子邮箱：postmaster@dadaoqiyun.com</p>
            </div>
            <div class="info phone">
              <img
                src="../assets/0_common/icon_phone.png"
                style="width: 46px; height: 45px"
                alt=""
              />
              <p>联系电话：0571-82901288</p>
            </div>
            <baidu-map class="map" :center="{ lng, lat }" :zoom="15">
              <bm-marker
                :position="{ lng, lat }"
                :dragging="true"
                animation="BMAP_ANIMATION_BOUNCE"
              >
              </bm-marker>
            </baidu-map>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageNav from "../components/pageNav";
export default {
  name: "contact",
  data() {
    return {
      lat: 30.244508044642444,
      lng: 120.26040902327983,
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
.contact {
  height: 100%;
  .content {
    .LR_layout {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-around;

      .left {
        width: 40%;
        .title {
          margin-top: 60px;
          margin-left: 357px;
          img{
            width: 246px;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          p:nth-child(2) {
            // width: 194px;
            height: 56px;
            font-size: 24px;
            font-family: Roboto;
            font-weight: bold;
            color: #616161;
            line-height: 36px;
            opacity: 0.2;
            margin-top: 34px;
            margin-bottom: 20px;
            text-align: center;
          }
          p:nth-child(3) {
            // width: 171px;
            height: 19px;
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #b69d74;
            // line-height: 54px;
            text-align: center;
          }
        }
      }
      .splitline {
        position: absolute;
        left: 40%;
        top: 0;
        width: 2px;
        height: 100%;
        z-index: -1;
        background: #efefef;
      }
      .right {
        width: 60%;
        .infoBox {
          margin-top: 60px;
          margin-left: 36px;
          .info {
            margin-bottom: 30px;
            img {
              display: block;
              margin-bottom: 22px;
            }
            p {
              font-size: 18px;
              font-family: '宋体';
              font-weight: bold;
              color: #3d3d3d;
              opacity: 0.9;
            }
          }
        }
      }
    }
    .map {
      width: 769px;
      height: 360px;
      margin-bottom: 40px;
      ::v-deep .anchorBL {
        display: none;
      }
    }
  }
}
</style>