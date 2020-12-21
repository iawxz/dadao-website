<template>
  <div class="estate">
    <pageHeader></pageHeader>
    <pageNav
      :navIndex="navIndex"
      :sendSelect="selectIndex"
      @send="getSelectIndex"
    ></pageNav>
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
            <div
              class="propertyImg"
              :style="{ backgroundImage: 'url(' + item.titleimg + ')' }"
            ></div>
            <!-- <img :src="item.titleimg" alt="" /> -->
            <p class="name">{{ item.name || item.title }}</p>
          </div>
        </div>
        <propertyDetail
          v-else
          :propertyDetail="propertyDetail"
          @back="backDetail"
        ></propertyDetail>
      </div>
      <!-- 大稻建设 -->
      <div class="build" v-if="selectIndex == 1">
        <div class="build_content">
          <div class="build_title">大稻建设</div>
          <div class="build_title_EN">DA DAO CONSTRUCTION</div>
          <div class="build_text">
            大稻建设是由大稻启运下属商业管理公司为主体推出的轻资产战略平台，大稻启运精耕<br>
            商业地产十数年，依托专业的商业开发及运营管理团队实现商业地产代建、代运营业务<br>
            的延伸，从甲方思维转换到管理人和服务者思维，对外实施商业开发品牌输出和建设运<br>
            营管理输出，与外部机构开展项目合作开发，形成“土地资源委托代建”、“投资资本<br>
            委托代建”和“政府委托代建”三大业务模式。建设类型涉及商业办公、产业园区、文<br>
            旅商业及商业综合体项目。项目代建业务的基本模式是合作双方签约委托大稻启运集团<br>
            进行开发销售环节的全过程管理，提供项目定位、规划设计、工程管理、成本管理、招<br>
            投标管理、营销管理、品牌管理、竣工交付管理及物业管理等开发全过程服务。
          </div>
        </div>
        <img class="build_img" src="../assets/3_estate/build.png" alt="" />
      </div>
      <!-- 产业投资 -->
      <div class="invest LR_layout" v-if="selectIndex == 2">
        <div class="left">
          <pageInfoBox></pageInfoBox>
        </div>
        <div class="splitline"></div>
        <div class="right" v-if="investIndex == -1">
          <div class="infoNav">
            <p class="title">产业投资</p>
            <p class="title_EN">INDUSTRY INVESTMENT</p>
            <div class="navBox">
              <div class="nav" @click="investGo(0)">
                <img src="../assets/3_estate/invest1.png" alt="恒领产业园" />
                <p>恒领产业园</p>
              </div>
              <div class="nav" @click="investGo(1)">
                <img
                  src="../assets/3_estate/invest2.png"
                  alt="大稻医疗健康产业园"
                />
                <p>大稻医疗健康产业园</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right" v-else-if="investIndex == 0">
          <div class="infoBox">
            <div class="essay">
              <p class="subtitle" @click="investGo(-1)"><<<恒领科技产业园</p>
              <p>
                本项目南至机场高速路,西至新城路,北侧为规划道路。地块总用地面积13362平方米,建筑<br>
                高度100米。
              </p>
              <p>
                投资创新科技产业作为大稻集团的重点产业板块之一, 为全面提升企业竞争力奠定了良好<br>
                的基础。大稻集团充分发挥综合性地产开发优势, 以自身标志性项目和现代服务业集聚区<br>
                为阵地, 在自身商业品牌独立运营及自主品牌建设的同时, 积极寻求与国际国内知名企业<br>
                的战略合作, 借力发展, 合作共赢。
              </p>
              <div class="img img_invest"></div>
            </div>
          </div>
        </div>
        <div class="right" v-else-if="investIndex == 1">
          <div class="infoBox">
            <div class="essay">
              <p class="subtitle" @click="investGo(-1)">
                <<<大稻医疗健康产业园
              </p>
              <p>
                浙江大稻健康科技有限公司成立于2014年。公司集国内、外流的医疗资源为有健康需求的精英<br>
                人士提供健康管理、海外医疗、体检全程咨询与服务的专业机构。
              </p>
              <p>
                秉承“做客户身边值得信赖的健康管家”的服务理念, 提供系统化顶级医疗服务。现有50人的<br>
                专业的医疗服务团队, 应用行业领先的服务工具, 打造了科学实用的健康管理服务平台。公司<br>
                积累了丰富的实际管理经验, 先后成功为五百多位尊贵客户提供服务。公司发展立足杭州、面<br>
                向全国及海内外, 竭诚为个人高端客户、家庭客户、企业团队客户提供定制服务。
              </p>
              <p>
                VIP就医服务体系, 提供包括专属预约分诊、专属名医预约、专属导医陪护、专属专家会诊、<br>
                专属住院管家、专属名医上门、专属药物代寄、配送在内的VIP专属就医服务。
              </p>
              <div class="img img_health"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 大健康 -->
      <div class="health" v-if="selectIndex == 3">
        <div class="left">
          <img src="../assets/3_estate/heath_left.png" alt="" />
        </div>
        <div class="right">
          <div class="essay">
            <p class="title">大健康企业</p>
            <p class="title_EN">HEALTH INDUSTRY</p>
            <div class="health_outer">
              <div class="health_inner">
                <p>
                  浙江大稻健康科技有限公司隶属于浙江大稻集团有限公司，是浙江省最早成立的专业健康管理<br>
                  服务公司之一，是一家专业提供一站式个性化高端健康管理服务的公司，是浙江省高端健康服<br>
                  务行业标杆企业。
                </p>
                <p>
                  浙江大稻健康科技有限公司秉承“做客户身边值得信赖的健康管家”的服务理念，整合顶级医<br>
                  疗资源，提供系统化顶级医疗服务。以“检测、诊断、干预、评估”的服务模式，为个人、家<br>
                  庭、企业、金融机构等企业单位提供综合性的健康管理服务。
                </p>
                <p class="service_title">服务内容</p>
                <p class="serviceBox">
                  <b>VIP尊享服务</b>
                  <br />大稻健康为每位高净值尊贵客户提供VIP尊享服务。
                </p>
                <p class="serviceBox">
                  <b>健康管理解决方案</b>
                  <br />大稻健康为企事业单位提供个性化的健康管理解决方案,让企事业员工可以亲临体验一站式、<br>
                  全方位、专业化顾问式服务的理念和水准。
                </p>
                <p class="serviceBox">
                  <b>海外健检医疗</b>
                  <br />大稻健康汇集美国、日本、台湾、新加坡等多个国家和地区首屈一指的世界级顶级医疗机构<br>
                  和临床专家资源，为您量身定制一站式海外就医服务。
                </p>
                <p class="serviceBox">
                  <b>体检服务</b>
                  <br />大稻健康建立了以三甲医院为主导，商业体检中心为辅的全国性体检服务平台，提供检前咨<br>
                  询、体检套餐设计、体检预约、陪检、检后报告解读、健康评估等全方位的服务。
                </p>
                <p class="serviceBox">
                  <b>就医协助服务</b>
                  <br />大稻健康为每一位会员提供类健康管家的一站式就医协助服务，帮助会员解决就医过程中遇<br>
                  到的各种琐碎问题。
                </p>
                <p class="serviceBox">
                  <b>私属健康团队</b>
                  <br />大稻健康的每一位会员都配属由全科医生、营养师、健康管家组成的健康管理团队，提供全<br>
                  方位的健康管理服务。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 文化艺术 -->
      <div class="art" v-if="selectIndex == 4">
        <div class="left">
          <div class="leftBox">
            <p class="title">ART</p>
            <p class="text">艺术能抵达更美好的未来</p>
            <img src="../assets/3_estate/art.png" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="infoBox">
            <p class="title">文化艺术</p>
            <p class="title_EN">CULTURE AND ART</p>
            <div class="essay">
              <p>
                艺术, 是想象力的源泉, 它为人类插上翅膀, 把我们带到很远的地方。人类的真正感情、内<br>
                心生活的奥秘和对世界的热情, 也都藏身于艺术。我们都希望艺术最终抵达的不是另一个艺<br>
                术, 而是直抵自己内在真诚、善好、柔软的内心。<br />
              </p>
              <p>
                大稻启运在艺术投资领域与世界知名画廊、艺术机构、艺术家建立合作, 期望通过艺术品投<br>
                资收藏、艺术展览空间以及艺术沙龙活动, 构建起高端艺术鉴赏与交流的平台。
              </p>
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
      investIndex: -1, //投资模块index，0恒领，1大医疗
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
  created() {
    if (this.$route.params.selectIndex) {
      this.selectIndex = this.$route.params.selectIndex;
    }
  },
  methods: {
    // 产业投资跳转子页面
    investGo(index) {
      this.investIndex = index;
    },
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
      console.log(item);
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
        width: 1330px;
        // height: 874px;
        margin: 60px auto;
        display: flex;
        // align-items: center;
        // justify-content: center;
        flex-wrap: wrap;
        .propertyList {
          cursor: pointer;
          margin: 0 15px 40px;
          .propertyImg {
            width: 300px;
            height: 400px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          // img {
          //   width: 380px;
          //   height: 220px;
          // }
          p {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #616161;
            opacity: 0.7;
            margin-bottom: 8px;
          }
          .name {
            text-align: center;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #201816;
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
    .build {
      margin: 60px auto;
      display: flex;
      justify-content: center;
      .build_content {
        width: 700px;
        min-height: 500px;
        padding-right: 45px;                                
        .build_title {
          font-size: 22px;
          font-weight: bold;
          font-family: '宋体';
          color: #808080;
          margin-bottom: 5px;
        }
        .build_title_EN {
          font-size: 18px;
          margin-bottom: 30px;
        }
        .build_text {
          font-size: 18px;
          font-family: '宋体';
          color: #505050;
          line-height: 35px;
        }
      }
      .build_img {
        display: block;
        width: 500px;
        height: 300px;
        margin-top: 90px;
      }
    }
    .health {
      display: flex;
      .left {
        width: 40%;
        border-right: 2px solid #efefef;
        display: flex;
        justify-content: flex-end;
        padding-bottom: 30px;
        img {
          width: 410px;
          height: 447px;
          display: block;
          margin-top: 60px;
        }
      }
      .right {
        width: 60%;
        .essay {
          margin-top: 60px;
          margin-left: 30px;
          margin-bottom: 60px;
          .title {
            font-size: 22px;
            font-weight: bold;
            font-family: "宋体";
            color: #808080;
            margin-bottom: 5px;
          }
          .title_EN {
            font-size: 18px;
            margin-bottom: 30px;
          }
          .health_outer,
          .health_inner {
            width: 760px;
            height: 500px;
          }
          .health_outer {
            position: relative;            
            overflow: hidden;
            margin-left: -20px;
            .health_inner {
              position: absolute;              
              right: -20px;
              overflow: auto;
              
              font-family: "宋体";
              line-height: 35px;
              font-size: 18px;
              color: #505050;
              .service_title{
                font-size: 24px;
                font-weight: bold;
                color: #a5a5a5;
                margin-top: 30px;
              }
              .serviceBox{
                margin-top: 30px;
                font-size: 18px;
                color: #505050;
                b{
                  color: #606060;                  
                }
              }
            }
          }
        }
      }
    }
    .art {
      display: flex;
      min-height: 580px;
      .left {
        position: relative;
        width: 40%;
        color: #3c3c3c;
        font-family: "宋体";
        .leftBox {
          position: absolute;
          right: 0;
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-weight: bold;
          padding-top: 60px;
          padding-bottom: 60px;
          border-right: 2px solid #efefef;
          .title {
            font-size: 50px;
          }
          .text {
            font-size: 22px;
            margin: 20px 0 20px;
          }
          img {
            width: 330px;
            
          }
        }
      }
      .right {
        margin-top: 60px;
        margin-left: 40px;
        width: 60%;
        // color: #5a5a5a;
        font-size: 24px;

        .title {
          font-size: 22px;
          font-weight: bold;
          font-family: "宋体";
          color: #808080;
          margin-bottom: 5px;
        }
        .title_EN {
          font-size: 18px;
          margin-bottom: 30px;
        }
        .essay {
          width: 760px;
          font-size: 18px;
          font-family: '宋体';
          color: #505050;          
          line-height: 35px;
          margin-bottom: 150px;
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
          margin: 60px 0 60px 30px;
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
              cursor: pointer;
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #616161;
              opacity: 0.9;
              margin-bottom: 18px;
            }
            p {
              width: 750px;
              font-size: 18px;
              font-family: '宋体';              
              color: #505050;
              line-height: 35px;
              margin-bottom: 20px;
            }
            .img {
              width: 700px;
              height: 266px;
              background-image: url("../assets/3_estate/imgtext.png");
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .img_build {
              height: 460px;
              background-image: url("../assets/3_estate/build.png");
            }
            .img_invest {
              height: 450px;
              background-image: url("../assets/3_estate/invest_tech.png");
            }
            .img_health {
              height: 542px;
              background-image: url("../assets/3_estate/invest_health.jpg");
            }
            .img_art {
              height: 396px;
              background-image: url("../assets/3_estate/art.png");
            }
          }
        }
        .infoNav {
          margin: 60px 0 60px 30px;
          .title {
            font-size: 22px;
            font-weight: bold;
            font-family: '宋体';
            color: #808080;
            margin-bottom: 5px;
          }
          .title_EN {
            font-size: 18px;
            margin-bottom: 30px;
          }
          .navBox {
            margin-top: 40px;
            display: flex;
            .nav {
              margin-right: 60px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              p {
                font-size: 18px;
                font-family: '宋体';
                color: #505050;
                line-height: 35px;
                margin-top: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>