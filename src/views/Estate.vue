<template>
  <div class="estate">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" :sendSelect="selectIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <!-- 大稻地产 -->
      <div class="property" v-if="selectIndex == 0">
        <div class="propertyLists" v-if="isDetail == false">
          <div
            class="propertyList"
            v-for="(item, index) in property"
            :key="index"
            @click="goDetail(item)"
          >
            <img :src="item.img || item.titleimg" alt="" />
            <p class="name">{{ item.name || item.title }}</p>
            <p class="usefor">项目用途：{{ item.usefor || item.category }}</p>
            <p class="address">项目地址：{{ item.address }}</p>
          </div>
        </div>
        <propertyDetail
          v-else
          :propertyDetail="propertyDetail"
          @back="backDetail"
        ></propertyDetail>
      </div>
      <!-- 大稻建设 -->
      <div class="build LR_layout" v-if="selectIndex == 1">
        <div class="left">
          <pageInfoBox></pageInfoBox>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="infoBox">
            <p class="title">大稻建设</p>
            <p class="title_EN">DA DAO CONSTRUCTION</p>
            <div class="essay">
              <p class="subtitle">巨门项目</p>
              <p>
                本项目位于杭州萧山区钱江世纪城核心区域，东北侧为规划的亚运村，周边拟建大量超高层办公楼及
                大型居住小区。
              </p>
              <p>
                地块总用地面积13741平方米，用地性质为商业金融业、文化娱乐用地。建筑高度150米。
              </p>
              <div class="img"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产业投资 -->
      <div class="invest LR_layout" v-if="selectIndex == 2">
        <div class="left">
          <pageInfoBox></pageInfoBox>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="infoBox">
            <p class="title">产业投资</p>
            <p class="title_EN">INDUSTRY INVESTMENT</p>
            <div class="essay">
              <p class="subtitle">恒领科技产业园</p>
              <p>
                本项目南至机场高速路，西至新城路，北侧为规划道路。地块总用地面积13362平方米，建筑高度
                100米。
              </p>
              <p>
                投资创新科技产业作为大稻集团的重点产业板块之一，为全面提升企业竞争力奠定了良好的基础。大
                稻集团充分发挥综合性地产开发优势，以自身标志性项目和现代服务业集聚区为阵地，在自身商业品
                牌独立运营及自主品牌建设的同时，积极寻求与国际国内知名企业的战略合作，借力发展，合作共赢。
              </p>
              <div class="img"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 大健康 -->
      <div class="health LR_layout" v-if="selectIndex == 3">
        <div class="left">
          <pageInfoBox></pageInfoBox>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="infoBox">
            <p class="title">大健康产业</p>
            <p class="title_EN">HEALTH INDUSTRY</p>
            <div class="essay">
              <p>
                浙江大稻健康科技有限公司成立于2014年。公司集国内、外流的医疗资源为有健康需求的精英人士提
                供健康管理、海外医疗、体检全程咨询与服务的专业机构。
              </p>
              <p>
                秉承“做客户身边值得信赖的健康管家”的服务理念，提供系统化顶级医疗服务。现有50人的专业的医
                疗服务团队，应用行业领先的服务工具，打造了科学实用的健康管理服务平台。公司积累了丰富的实
                际管理经验，先后成功为五百多位尊贵客户提供服务。公司发展立足杭州、面向全国及海内外，竭诚
                为个人高端客户、家庭客户、企业团队客户提供定制服务。
              </p>
              <p>
                VIP就医服务体系，提供包括专属预约分诊、专属名医预约、专属导医陪护、专属专家会诊、专属住院
                管家、专属名医上门、专属药物代寄、配送在内的VIP专属就医服务。
              </p>
              <div class="img"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 文化艺术 -->
      <div class="art LR_layout" v-if="selectIndex == 4">
        <div class="left">
          <pageInfoBox></pageInfoBox>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="infoBox">
            <p class="title">文化艺术</p>
            <p class="title_EN">CULTURE AND ART</p>
            <div class="essay">
              <p>
                大稻文化专注于提升地产艺术形象及为开发商提供创新的艺术营销策划服务，坚守美学信仰，以艺术
                的载体追求本真，让建筑与自然、与艺术、与文化精神往来，旨在创造出充分体现生活感受和艺术价
                值的人居生活。
              </p>
              <p>
                结合国内外顶尖艺术家及设计师力量，为本地社区提供优质的人文艺术环境。
              </p>
              <div class="img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageNav from "../components/pageNav";
import pageInfoBox from "../components/pageInfoBox";
import propertyDetail from "../components/propertyDetail";
export default {
  name: "estate",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      selectIndex: 0, //默认为0
      property: [],
      propertyDetail: {},
      isDetail: false, //是否为项目详情页，默认为false
    };
  },
  props: {},
  components: {
    pageNav,
    pageInfoBox,
    propertyDetail,
  },
  mounted() {
    this.getProperty();
  },
  created () {
    if(this.$route.params.selectIndex){
      this.selectIndex = this.$route.params.selectIndex      
    }    
  },
  methods: {
    getSelectIndex(index) {
      this.selectIndex = index;
    },
    // 获取项目内容
    getProperty() {
      this.$axios({
        url: "http://news.youtuosoftware.com/API/Industry/GetIndustryList",
        method: "post",
        data: {
          pageNum: 1,
          pageSize: 10,
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
    goDetail(item) {
      if (!this.isDetail) {
        this.isDetail = true;
        this.propertyDetail = item;
        if (item) {
          item.createtime = item.createtime.split("T")[0];
          item.imglist = item.imglist.split(",");
          for (var i in item.imglist) {
            item.imglist[i] =
              "http://news.youtuosoftware.com" + item.imglist[i];
          }
          item.honor = item.honor.split(";");
          if (!item.honor[0]) {
            item.honor = ["暂无评比结果"];
          }
          item.support = item.support.split(";");

          for (var s in item.support) {
            item.support[s] = item.support[s].split("：");
          }

          this.detail = item;
          console.log(this.detail);
        }
      }
    },
    backDetail(index) {
      this.isDetail = false;
      this.propertyDetail = {};
    },
  },
};
</script>

<style lang="scss" scoped>
.estate {
  height: 100%;
  .content {
    .property {
      width: 100%;
      .propertyLists {
        width: 1230px;
        height: 874px;
        margin: 60px auto;
        display: flex;
        // align-items: center;
        // justify-content: center;
        flex-wrap: wrap;
        .propertyList {
          cursor: pointer;
          margin: 0 15px 40px;
          img {
            width: 380px;
            height: 220px;
          }
          p {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #616161;
            opacity: 0.7;
            margin-bottom: 8px;
          }
          .name {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #b69d74;
            margin-top: 16px;
            margin-bottom: 10px;
          }
        }
      }
      .propertyDetail {
        width: 1230px;
        margin: 60px auto;
        .goLists {
          width: 100%;
          padding-bottom: 15px;
          text-align: left;
          border-bottom: 2px solid #efefef;

          cursor: pointer;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #666666;
        }
        .imgBox {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 30px;
          margin-bottom: 56px;
          .imgShow {
            width: 705px;
            height: 390px;
            background-image: url("../assets/3_estate/imgShow.png");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }
          .imgMore {
            width: 465px;
            height: 390px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("../assets/3_estate/imgMore.png");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            img {
              display: block;
              width: 94px;
              height: 94px;
            }
          }
        }
        .content {
          .intro {
            margin-bottom: 40px;
            p {
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #616161;
              line-height: 30px;
              opacity: 0.8;
              margin-bottom: 20px;
            }
            .title {
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: 800;
              color: #b69d74;
              margin-bottom: 30px;
            }
            .introBox {
              .subtitle {
                font-size: 20px;
                font-family: PingFang SC;
                font-weight: bold;
                color: #616161;
                margin-bottom: 25px;
              }
              .honourBox {
                margin-bottom: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                .honour {
                  margin: 12px 20px;

                  width: 300px;
                  height: 70px;
                  background: #b69d74;
                  border-radius: 10px;

                  font-size: 16px;
                  font-family: PingFang SC;
                  font-weight: bold;
                  color: #ffffff;
                  line-height: 30px;
                  text-align: center;

                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
              .detailBox {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                .detail {
                  display: flex;
                  .title {
                    width: 67px;
                    margin-bottom: 15px;
                    text-align: right;
                    margin-right: 25px;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: #616161;
                    opacity: 0.8;
                  }
                  .text {
                    width: 400px;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: #616161;
                  }
                }
              }
              .facilityBox {
                display: flex;
                // align-items: center;
                justify-content: space-between;
                .map {
                  width: 705px;
                  height: 360px;
                  background-image: url("../assets/3_estate/map.png");
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-position: center;
                }
                .facility {
                  width: 465px;
                  .facilityTitle {
                    height: 60px;
                    text-align: center;
                    line-height: 60px;
                    background: #b69d74;

                    font-size: 18px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: #ffffff;
                    margin-bottom: 35px;
                  }
                  .facilities {
                    display: flex;
                    flex-wrap: wrap;
                    div {
                      font-size: 16px;
                      font-family: PingFang SC;
                      font-weight: bold;
                      color: #616161;
                      opacity: 0.9;
                      line-height: 30px;
                      span {
                        color: #b69d74;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .LR_layout {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-around;

      .left {
        width: 40%;
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
        // height: 610px;
        .infoBox {
          margin: 60px 0 120px 30px;
          .title {
            font-size: 24px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #b69d74;
            margin-bottom: 17px;
          }
          .title_EN {
            font-size: 32px;
            font-family: Roboto;
            font-weight: bold;
            color: #616161;
            line-height: 54px;
            opacity: 0.3;
            margin-bottom: 42px;
          }
          .essay {
            .subtitle {
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #616161;
              line-height: 54px;
              opacity: 0.9;
              margin-bottom: 18px;
            }
            p {
              width: 764px;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #000000;
              line-height: 31px;
              opacity: 0.7;
              margin-bottom: 23px;
            }
            .img {
              width: 767px;
              height: 266px;
              background-image: url("../assets/3_estate/imgtext.png");
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
  }
}
</style>