<template>
  <div class="partner">
    <pageHeader_M @sendIndex="getIndex"></pageHeader_M>
    <img
      class="optionImg"
      style="width: 100%; display: block"
      src="../assets/0_common_M/option.png"
      alt=""
    />
    <div class="content">
      <div class="infoBox" v-for="(item, index) in info" :key="index">
        <div
          class="img"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
        ></div>
        <p v-text="item.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partner",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      info: [
        {
          img: require("../assets/7_contact/icon_address.png"),
          text:
            "公司地址：浙江省杭州市萧山区鸿宁路钱江世纪城望京商务中心B座40A",
        },
        {
          img: require("../assets/7_contact/icon_email.png"),
          text: "电子邮箱：postmaster@dadaoqiyun.com",
        },
        {
          img: require("../assets/7_contact/icon_phone.png"),
          text: "联系电话：0571-82901288",
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
.content {
  padding: 40px 75px 0;
}
.infoBox{
  display: flex;
  margin-bottom: 38px;
  /* align-items: center; */
  /* justify-content: center; */
}
.infoBox .img {
  width: 36px;
  height: 36px;
  background-repeat: no-repeat;
  background-size:contain;
  background-position: center;
  margin-right: 15px;
}
.infoBox p {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  opacity: 0.9;
}
</style>