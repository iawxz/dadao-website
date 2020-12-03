<template>
  <div class="estate">
    <pageHeader_M @sendIndex="getIndex"></pageHeader_M>
    <img
      class="optionImg"
      style="width: 100%; display: block"
      src="../assets/0_common_M/option.png"
      alt=""
    />
    <div class="content">
      <div class="property" v-if="navIndex == 0">
        <div v-if="!isDetail">
          <div
            class="propertyBox"
            v-for="(item, index) in property"
            :key="index"
            @click="goDetail(true, item)"
          >
            <div
              class="propertyImg"
              :style="{ backgroundImage: 'url(' + item.titleimg + ')' }"
            ></div>
            <p class="title">{{ item.title }}</p>
            <p class="usefor">项目用途：{{ item.category }}</p>
            <p class="address">项目地址：{{ item.address }}</p>
          </div>
        </div>
        <div class="propertyDetail" v-else>
          <div class="backList" @click="goDetail(false)"><<<返回列表</div>

          <div class="swiperBox">
            <swiper
              :options="swiperOption"
              :not-next-tick="notNextTick"
              ref="mySwiper"
            >
              <swiper-slide
                v-for="(item, index) in detail.imglist"
                :key="'img' + index"
              >
                <div
                  class="detailImg"
                  :style="{ backgroundImage: 'url(' + item + ')' }"
                ></div>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>

          <div class="detailText">
            <p class="title" v-text="detail.title"></p>
            <p class="text">项目地址：{{ detail.address }}</p>
            <p class="text">联系电话：{{ detail.contact }}</p>
            <p class="text">{{ detail.abstract }}</p>

            <p class="title">楼盘详情</p>
            <div class="text">
              <div class="subtitle">开发商：</div>
              {{ detail.developer }}
            </div>
            <div class="text">
              <div class="subtitle">车位数：</div>
              {{ detail.parking_number }}个
            </div>
            <div class="text">
              <div class="subtitle">占地面积：</div>
              {{ detail.cover_area }}m²
            </div>
            <div class="text">
              <div class="subtitle">物业公司：</div>
              {{ detail.property_company }}
            </div>
            <div class="text">
              <div class="subtitle">建筑面积：</div>
              {{ detail.construction_area }}m²
            </div>
            <div class="text">
              <div class="subtitle">建筑类别：</div>
              {{ detail.category }}
            </div>
            <div class="text">
              <div class="subtitle">绿化率：</div>
              {{ detail.green_rate }}%
            </div>

            <p class="title">项目殊荣</p>
            <p
              class="text"
              v-for="(item, index) in detail.honor"
              :key="'honor' + index"
            >
              ● {{ item }}
            </p>

            <p class="title">周边配套</p>
            <p
              class="text"
              v-for="(item, index) in detail.support"
              :key="'support' + index"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
      <div class="else" v-else>
        <p class="title" v-text="estate[navIndex - 1].title"></p>
        <p class="title_EN" v-text="estate[navIndex - 1].title_EN"></p>
        <div class="text" v-html="estate[navIndex - 1].text"></div>
        <img
          src="../assets/3_estate_M/estate_m.png"
          style="width: 100%; display: block; margin-top: 20px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "estate",
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        effect: "fade",
        autoplay: 7000,
        speed: 3000,
        loop: true,
        grabCursor: true, //鼠标触及变成手掌形状
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        // mousewheelControl: true,//鼠标滚轮控制轮播
        bserver: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // onTransitionStart(swiper) {
        //   console.log(swiper);
        // },
      },
      navIndex: this.$route.params.navIndex,
      count: 5,
      isDetail: false, //是否为详情页面
      property: [],
      detail: [], //项目详情
      estate: [
        {
          title: "大稻建设",
          title_EN: "DA DAO CONSTRUCTION",
          text:
            "<b style='opacity:0.9'>巨门项目</b><br>本项目位于杭州萧山区钱江世纪城核心区域，东北侧为规划的亚运村，周边拟建大量超高层办公楼及大型居住小区。<br>地块总用地面积13741平方米，用地性质为商业金融业、文化娱乐用地。建筑高度150米。",
          img: "../assets/3_estate_M/estate_m.png",
        },
        {
          title: "大健康产业",
          title_EN: "HEALTH INDUSTRY",
          text:
            "浙江大稻健康科技有限公司成立于2014年。公司集国内、外流的医疗资源为有健康需求的精英人士提供健康管理、海外医疗、体检全程咨询与服务的专业机构。<br>秉承“做客户身边值得信赖的健康管家”的服务理念，提供系统化顶级医疗服务。现有50人的专业的医疗服务团队，应用行业领先的服务工具，打造了科学实用的健康管理服务平台。公司积累了丰富的实际管理经验，先后成功为五百多位尊贵客户提供服务。公司发展立足杭州、面向全国及海内外，竭诚为个人高端客户、家庭客户、企业团队客户提供定制服务。<br>VIP就医服务体系，提供包括专属预约分诊、专属名医预约、专属导医陪护、专属专家会诊、专属住院管家、专属名医上门、专属药物代寄、配送在内的VIP专属就医服务。<br>",
          img: "../assets/3_estate_M/estate_m.png",
        },
        {
          title: "产业投资",
          title_EN: "INDUSTRY INVESTMENT",
          text:
            "本项目南至机场高速路，西至新城路，北侧为规划道路。地块总用地面积13362平方米，建筑高度100米。<br>投资创新科技产业作为大稻集团的重点产业板块之一，为全面提升企业竞争力奠定了良好的基础。大稻集团充分发挥综合性地产开发优势，以自身标志性项目和现代服务业集聚区为阵地，在自身商业品牌独立运营及自主品牌建设的同时，积极寻求与国际国内知名企业的战略合作，借力发展，合作共赢。",
          img: "../assets/3_estate_M/estate_m.png",
        },
        {
          title: "文化艺术",
          title_EN: "CULTURE AND ART",
          text:
            "大稻文化专注于提升地产艺术形象及为开发商提供创新的艺术营销策划服务，坚守美学信仰，以艺术的载体追求本真，让建筑与自然、与艺术、与文化精神往来，旨在创造出充分体现生活感受和艺术价值的人居生活。<br>结合国内外顶尖艺术家及设计师力量，为本地社区提供优质的人文艺术环境。",
          img: "../assets/3_estate_M/estate_m.png",
        },
      ],
    };
  },
  computed: {},
  props: {},
  components: {},
  mounted() {
    this.getProperty();
  },
  methods: {
    getIndex(index) {
      this.navIndex = index;
    },
    // 获取项目列表
    getProperty() {
      this.$axios({
        url: "http://news.youtuosoftware.com/API/Industry/GetIndustryList",
        method: "post",
        data: {
          pageNum: 1,
          pageSize: this.count,
        },
      }).then((res) => {
        this.property = res.data.datalist;
        var i = 0;
        for (var item of this.property) {
          if (!item.category) {
            this.property[i].category = " 规划中";
          }
          this.property[i].titleimg =
            "http://news.youtuosoftware.com" + item.titleimg;
          i++;
        }
      });
    },
    // 查看项目详情
    goDetail(is, item) {
      this.isDetail = is;
      if (item) {
        item.createtime = item.createtime.split("T")[0];
        item.imglist = item.imglist.split(",");
        for (var i in item.imglist) {
          item.imglist[i] = "http://news.youtuosoftware.com" + item.imglist[i];
        }
        item.honor = item.honor.split(";");
        if (!item.honor[0]) {
          item.honor = ["暂无评比结果"];
        }
        item.support = item.support.split(";");
        if (!item.support[0]) {
          item.support = ["暂无规划数据"];
        }
        this.detail = item;
        console.log(this.detail);
      }
    },
  },
};
</script>

<style scoped>
.content {
  padding: 40px 75px;
}
/* .property */
.property .propertyBox {
  margin-bottom: 40px;
}
.property .propertyBox .propertyImg {
  width: 100%;
  height: 230px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
}
.property .propertyBox p {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #616161;
  margin-bottom: 5px;
  opacity: 0.7;
}
.property .propertyBox .title {
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #b69d74;
  margin-bottom: 15px;
}
/* .propertyDetail */
.propertyDetail .backList {
  width: 100%;
  padding-bottom: 20px;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  border-bottom: 3px dashed #e6e6e6;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("../assets/3_estate_M/slide_L.png");
  left: 64px;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("../assets/3_estate_M/slide_R.png");
  right: 64px;
}
.propertyDetail .detailImg {
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;
}
.propertyDetail .detailText {
  margin: 40px 0 20px;
}
.propertyDetail .detailText .title {
  margin-top: 40px;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #b69d74;
}
.propertyDetail .detailText .text {
  margin-top: 10px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #616161;
  line-height: 36px;
  opacity: 0.8;
  display: flex;
}
.propertyDetail .detailText .text .subtitle {
  width: 120px;
  text-align: right;
}
/* .else */
.else .title {
  font-size: 30px;
  font-family: PingFang SC;
  font-weight: 800;
  color: #b69d74;
  margin-bottom: 15px;
}
.else .title_EN {
  font-size: 32px;
  font-family: Roboto;
  font-weight: bold;
  color: #616161;
  opacity: 0.3;
  margin-bottom: 23px;
}
.else .text {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 600;
  color: #3d3d3d;
  line-height: 40px;
  opacity: 0.7;
}
</style>