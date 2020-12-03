<template>
  <div class="home">
    <pageHeader_M ref="borrow"></pageHeader_M>
    <div class="content">
      <!-- 轮播 -->
      <div class="swiper">
        <swiper
          v-if="swiperImg.length > 1"
          :options="swiperOption"
          :not-next-tick="notNextTick"
          ref="mySwiper"
        >
          <swiper-slide>
            <div class="swiperVideo">
              <video autoplay loop muted>
                <source
                  src="../assets/1_home/Timelapse_Crown.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </swiper-slide>
          <swiper-slide v-for="(item, index) in swiperImg" :key="index">
            <div
              class="swiperImg"
              :style="{ backgroundImage: 'url(' + item.img + ')' }"
            ></div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 关于 -->
      <div class="about">
        <p class="title">关于大稻启运</p>
        <p class="subTitle">ABOUT DA DAO QI YUN</p>
        <p class="text">
          大稻启运最早成立于2007年,总部坐落<br />
          在美丽的杭州钱塘江畔。核心业务包括地产开发、<br />
          工程建设、产业投资、高端医疗及艺术投资。<br />
          在多元化的经营理念下，大稻启运积极<br />
          拓展业务版图，使其经济实力和区域<br />
          影响力不断地快速提升。<br />
        </p>
      </div>
      <!-- 介绍 -->
      <div class="intro">
        <div class="introBox" v-for="(item, index) in intro" :key="index">
          <img :src="item.img" alt="" />
          <p class="title">{{ item.title }}</p>
          <p class="text" v-html="item.text"></p>
        </div>
      </div>
      <!-- 产业 -->
      <div class="estate">
        <div
          class="estateBox"
          v-for="(item, index) in estate"
          :key="index"
          :style="{ backgroundImage: 'url(' + item.img + ')' }"
          @click="goEstate(index)"
        >
          <div class="textBox">
            <p class="title_EN" v-html="item.title_EN"></p>
            <p class="title">{{ item.title }}</p>
          </div>
          <img src="../assets/1_home_M/icon_go.png" alt="" />
        </div>
      </div>
    </div>
    <pageFooter_M></pageFooter_M>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        effect: "fade",
        autoplay: 7000,
        speed: 3000,
        loop: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        bserver: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
      },
      swiperImg: [
        { img: require("../assets/1_home_M/swiper1.png") },
        { img: require("../assets/1_home_M/swiper2.png") },
        { img: require("../assets/1_home_M/swiper3.png") },
      ],
      intro: [
        {
          img: require("../assets/1_home_M/intro1.png"),
          title: "企业定位",
          text: "成为城市商业产业<br>服务的一流供应商。",
        },
        {
          img: require("../assets/1_home_M/intro2.png"),
          title: "企业文化",
          text: "与同道者同行，<br>与同行者同享。",
        },
        {
          img: require("../assets/1_home_M/intro3.png"),
          title: "企业信仰",
          text: "真诚、专注、<br>极致、完美。",
        },
      ],
      estate: [
        {
          title: "大稻地产",
          title_EN: "DA DAO<br>REAL ESTATE",
          img: require("../assets/1_home_M/estate1.png"),
        },
        {
          title: "企业建设",
          title_EN: "ENTERPRISE<br>CONSTRUCTION",
          img: require("../assets/1_home_M/estate2.png"),
        },
        {
          title: "产业投资",
          title_EN: "INDUSTRY<br>INVESTMENT",
          img: require("../assets/1_home_M/estate3.png"),
        },
        {
          title: "大健康",
          title_EN: "HEALTH",
          img: require("../assets/1_home_M/estate4.png"),
        },
        {
          title: "文化艺术",
          title_EN: "CULTURE<br>AND ART",
          img: require("../assets/1_home_M/estate5.png"),
        },
      ],
    };
  },
  props: {},
  components: {},
  mounted() {},
  methods: {
    goEstate(index) {
      this.$refs.borrow.outChoose(2);
      this.$refs.borrow.navChildChoose(index);
    },
  },
};
</script>

<style scoped>
/* 轮播 */
.swiperVideo {
  width: 100%;
  height: 800px;
}
.swiperVideo video {
  width: auto;
  height: 800px;
}
.swiperVideo video source {
  width: auto;
  height: 800px;
}
.swiperImg {
  width: 100%;
  height: 800px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  width: 100%;
  bottom: 44px;
}
.swiper-pagination >>> .swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  display: inline-block;

  opacity: 1;
  border: 5px solid #ffffff;
  border-radius: 50%;
  background: transparent;
}
.swiper-pagination >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffffff;
  width: 50px;
  height: 16px;
  border-radius: 8px;
}
/* 关于 */
.about {
  width: 100%;
  /* height: 292px; */
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.about p.title {
  margin-bottom: 10px;
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #b69d74;
}
.about p.subTitle {
  margin-bottom: 10px;
  font-size: 26px;
  font-family: Roboto;
  font-weight: bold;
  color: #616161;
  opacity: 0.3;
}
.about p.text {
  letter-spacing: 5px;
  text-align: center;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 40px;
  opacity: 0.8;
}
/* 介绍 */
.intro {
  width: 100%;
  height: 235px;
  background: #f7f7f7;

  display: flex;
  align-items: center;
  justify-content: space-around;
}
.intro .introBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.intro .introBox img {
  width: 60px;
  height: 60px;
  display: block;
  margin-bottom: 8px;
}
.intro .introBox p.title {
  margin-bottom: 10px;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #3d3d3d;
}
.intro .introBox p.text {
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  line-height: 26px;
  opacity: 0.9;
  /* text-align: center; */
}
/* 产业 */
.estate {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 38px 0 38px;
}
.estate .estateBox {
  width: 80%;
  height: 230px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 12px 0 12px;
}
.estate .estateBox .textBox {
  position: absolute;
  left: 81px;
  top: 50px;
}
.estate .estateBox .textBox .title_EN {
  margin-bottom: 8px;
  font-size: 28px;
  font-family: Helvetica;
  font-weight: 400;
  color: #fefefe;
}
.estate .estateBox .textBox .title {
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #fefefe;
}
.estate .estateBox img {
  width: 53px;
  height: 28px;
  position: absolute;
  right: 48px;
  bottom: 24px;
}
</style>