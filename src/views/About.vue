<template>
  <div class="about">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <!-- 企业介绍 -->
      <div class="intro LR_layout" v-if="selectIndex == 0">
        <div class="left">
          <div class="title">
            <p>Craftsmanship<br />and quality</p>
            <p>匠心千里，品质百代</p>
          </div>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="essay">
            <div class="title">关于大稻启运</div>
            <div class="title_EN">about da dao qi yun</div>
            <div class="text">
              <p>
                大稻启运最早成立于2007年, 总部坐落在美丽的杭州钱塘江畔。<br />
                核心业务涵盖房地产综合开发、商业地产运营、产业地产运营、物业服务管理、工程建设管理、科技
                产业投资、高端医疗管理、文化艺术投资等领域。在不断深化发展创新的理念下，大稻启运积极拓展
                业务版图，使其经济实力和区域影响力不断地快速提升。<br />
                大稻启运集团定位于“成为中国领先的城市及产业运营商”，以“投资开发”、“运营服务”为两大业务
                战略。目前，集团已开发超5A级写字楼、产业园、高端住宅、精品酒店式公寓等多个核心区域优质项
                目，并赢得市场青睐。为巩固生态运服业务优势，大稻启运集团推出了五个核心概念作为自身的运营
                模式:商业价值、社区整合、教育共享、健康服务、生态艺术。专注打造可持续的商业和生活空间。
              </p>
              <p>
                <span>商业价值：</span>创造共赢的商业纽带<br />
                <span>社区整合：</span
                >提供基于场景化、体验化、社群化下的多元空间服务<br />
                <span>教育共享：</span>提供并创新运营服务与客户共发展<br />
                <span>健康服务：</span
                >为客户创造精准的健康绿色通道及健康办公模式<br />
                <span>生态艺术：</span
                >通过艺术促进商务及居住关系的和谐发展<br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 企业理念 -->
      <div class="philosophy LR_layout" v-if="selectIndex == 1">
        <div class="left">
          <div class="title">
            <p>Craftsmanship<br />and quality</p>
            <p>匠心千里，品质百代</p>
          </div>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="box">
            <div class="list" v-for="(item, index) in philosophy" :key="index">
              <img :src="item.img" alt="" />
              <p class="title">{{ item.title }}</p>
              <p class="text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 企业架构 -->
      <div class="architecture" v-else-if="selectIndex == 2">
        <div class="architectureImg"></div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import pageNav from "../components/pageNav";
export default {
  name: "about",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      selectIndex: 0, //默认为0
      philosophy: [
        {
          img: require("../assets/2_about/icon1.png"),
          title: "企业定位",
          text: "成为城市商业产业服务的一流供应商。",
        },
        {
          img: require("../assets/2_about/icon2.png"),
          title: "企业文化",
          text: "与同道者同行，与同行者同享。",
        },
        {
          img: require("../assets/2_about/icon3.png"),
          title: "企业信仰",
          text: "真诚、专注、极致、完美",
        },
      ],
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
.about {
  height: 100%;
}
.content {
  .LR_layout {
    width: 100%;
    min-height: 700px;
    position: relative;
    display: flex;
    // align-items: baseline;
    justify-content: space-around;

    .left {
      width: 40%;
      .title {
        margin-top: 60px;
        margin-left: 357px;
        p:first-child {
          width: 194px;
          height: 56px;
          font-size: 24px;
          font-family: Roboto;
          font-weight: bold;
          color: #616161;
          line-height: 36px;
          opacity: 0.2;
          // margin-bottom: 20px;
        }
        p:nth-child(2) {
          width: 171px;
          height: 19px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #b69d74;
          line-height: 54px;
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
      .essay {
        margin-top: 60px;
        margin-left: 30px;
        .title {
          width: 152px;
          height: 23px;
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #b69d74;
          line-height: 54px;
          margin-bottom: 17px;
        }
        .title_EN {
          width: 335px;
          height: 26px;
          font-size: 32px;
          font-family: Roboto;
          font-weight: bold;
          color: #616161;
          line-height: 54px;
          opacity: 0.3;
          margin-bottom: 39px;
        }
        .text {
          width: 700px;
          height: 17px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          line-height: 31px;
          opacity: 0.7;
          p {
            margin-bottom: 30px;
            span {
              color: #b69d74;
            }
          }
        }
      }
      .box {
        margin-top: 60px;
        margin-left: 30px;
        display: flex;
        .list {
          margin-right: 43px;
          margin-bottom: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          img {
            width: 60px;
            height: 60px;
            display: block;
          }
          p.title {
            margin-top: 9px;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 800;
            color: #3d3d3d;
          }
          p.text {
            margin-top: 19px;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #3d3d3d;
            opacity: 0.9;
          }
        }
      }
    }
  }
  .architecture {
    text-align: center;
    .architectureImg {
      width: 100%;
      height: 800px;
      background-image: url("../assets/2_about/architecture.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
    }
  }
}
</style>