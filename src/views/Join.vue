<template>
  <div class="join">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <!-- 企业文化 -->
      <div class="culture LR_layout" v-if="selectIndex == 0">
        <div class="left">
          <pageInfoBox></pageInfoBox>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="cultureBox">
            <p class="title">大稻口号</p>
            <p class="text">一家人、一件事、一起干、一定赢!</p>
            <p class="title">大稻精神</p>
            <p class="text">对上以敬、对事以真、对人以诚。</p>
            <p class="title">大稻信念</p>
            <p class="text">这个世界上最快的捷径便是脚踏实地.</p>
          </div>
          <div class="cultureImg"></div>
        </div>
      </div>
      <!-- 人才招聘 -->
      <div class="recruit" v-if="selectIndex == 1">
        <div class="introBox">
          <div class="intro">
            <img src="../assets/0_common/icon_email.png" alt="" />
            <p>
              简历投递：<br />
              349339298@qq.com
            </p>
            <div class="contact">
              <a href="mailto:349339298@qq.com">立即联系</a>
            </div>
          </div>
          <div
            class="intro"
            v-for="(item, index) in intro"
            :key="index"
            :style="{ backgroundImage: 'url(' + item.img + ')' }"
          >
            <div class="hoverBox">
              <div class="title">{{ item.title }}</div>
              <div class="hoverContent">
                <p v-text="item.title"></p>
                <p v-html="item.text"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="processBox">
          <p class="title">入职流程</p>
          <p class="title_EN">IN THE PROCESS</p>
          <div class="process" v-for="(item, index) in process" :key="index">
            <img :src="item.img" alt="" />
            <p class="title">{{ item.title }}</p>
            <p class="subtitle">{{ item.subtitle }}</p>
            <p class="name">{{ item.name }}</p>
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
export default {
  name: "join",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      selectIndex: 0, //默认为0
      intro: [
        {
          img: require("../assets/6_join/intro1.png"),
          title: "岗位说明",
          text:
            "有意者可在智联招聘、猎聘网、前程无忧等招聘网站搜索“诚稻置业”查看最新招聘动态并投递简历。",
        },
        {
          img: require("../assets/6_join/intro2.png"),
          title: "薪资福利",
          text:
            "1、具体岗位薪资面议；<br>2、五险一金、高温补贴、包吃、节目福利、员工旅游、部门活动、内部培训等等。",
        },
        {
          img: require("../assets/6_join/intro3.png"),
          title: "联系方式",
          text:
            "公司地址：杭州市钱江世纪城望京商务中心40A层（地铁2号线盈丰路站A出口）；<br>简历投递：249339298@qq.com",
        },
      ],
      process: [
        {
          img: require("../assets/6_join/step1.png"),
          title: "填写申请表",
          subtitle: "附带证件",
          name: "第1步",
        },
        {
          img: require("../assets/6_join/step2.png"),
          title: "测试(笔试)",
          subtitle: "认知能力测试和性格测试",
          name: "第2步",
        },
        {
          img: require("../assets/6_join/step3.png"),
          title: "面试(初试、复试)",
          subtitle: "重要岗位增加董事长面试",
          name: "第3步",
        },
        {
          img: require("../assets/6_join/step4.png"),
          title: "拟录用通知",
          subtitle: "含体检要求",
          name: "第4步",
        },
        {
          img: require("../assets/6_join/step5.png"),
          title: "背景调查",
          subtitle: "",
          name: "第5步",
        },
        {
          img: require("../assets/6_join/step6.png"),
          title: "背景调查",
          subtitle: "",
          name: "第6步",
        },
        {
          img: require("../assets/6_join/step7.png"),
          title: "审批、入职",
          subtitle: "",
          name: "第7步",
        },
      ],
    };
  },
  props: {},
  components: {
    pageNav,
    pageInfoBox
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
.join {  
  .content {
    .LR_layout {
      width: 100%;
      position: relative;
      display: flex;
      justify-content: space-around;

      .left {
        width: 40%;
        height: 790px;
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
      }
    }
    .culture {
      .cultureBox {
        margin: 60px 0 0 30px;
        .title {
          font-size: 22px;
          font-weight: bold;
          font-family: '宋体';
          color: #808080;
          margin-bottom: 15px;
        }
        .text {
          font-size: 18px;
          font-family: '宋体';
          color: #505050;
          line-height: 35px;
          margin-bottom: 25px;
        }
      }
      .cultureImg {
        margin: 40px 0 0 30px;
        width: 767px;
        height: 266px;
        background-image: url("../assets/6_join/culture.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
    .recruit {
      height: 750px;
      .introBox {
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 60px 0 64px 0;
        .intro {
          width: 280px;
          height: 200px;
          overflow: hidden;
          margin: 0 15px;
          position: relative;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          img {
            width: 46px;
            height: 34px;
            display: block;
            margin-bottom: 15px;
          }
          p {
            font-size: 16px;
            font-family: '宋体';
            font-weight: bold;
            color: rgba($color: #000000, $alpha: 0.7);
            line-height: 24px;
            margin-bottom: 15px;
          }
          .contact {
            cursor: pointer;
            width: 110px;
            height: 36px;
            text-align: center;
            line-height: 36px;
            background: #b69d74;
            border-radius: 18px;
            a {
              font-size: 16px;
              font-family: '宋体';
              font-weight: bold;
              color: #ffffff;
              text-decoration: none;
            }
          }
          .hoverBox {
            position: absolute;
            left: 0;
            bottom: -200px;
            .title {
              width: 121px;
              height: 36px;
              text-align: center;
              line-height: 36px;
              background: #b69d74;
              border-radius: 0px 30px 0px 0px;

              font-size: 16px;
              font-family: '宋体';
              font-weight: bold;
              color: #ffffff;
            }
            .hoverContent {
              width: 220px;
              height: 120px;
              padding: 40px 30px;
              background: #b69d74;
              opacity: 0.9;
              p:first-child {
                font-size: 16px;
                font-family: '宋体';                
                color: #ffffff;
                margin-bottom: 15px;
              }
              p:nth-child(2) {
                width: 226px;
                font-size: 14px;
                font-family: '宋体';                
                color: #ffffff;
              }
            }
          }
        }
        .intro:hover {
          .hoverBox {
            .title {
              visibility: hidden;
            }
            transition: 1s;
            transform: translateY(-200px);
          }
        }
      }
      .processBox {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        p.title {
          width: 100%;
          text-align: center;
          font-size: 24px;
          font-family: '宋体';
          font-weight: 800;
          color: #b69d74;
          margin-bottom: 17px;
        }
        p.title_EN {
          width: 100%;
          text-align: center;
          font-size: 32px;
          font-family: '宋体';
          font-weight: bold;
          color: #616161;
          opacity: 0.3;
          margin-bottom: 31px;
        }
        .process {
          width: 160px;
          margin: 0 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          img {
            width: 120px;
            height: 120px;
            display: block;
            margin-bottom: 16px;
          }
          p.title {
            font-size: 16px;
            font-family: '宋体';
            font-weight: bold;
            color: #616161;
            margin-bottom: 11px;
          }
          p.subtitle {
            height: 21px;
            font-size: 14px;
            font-family: '宋体';            
            color: #616161;
            opacity: 0.8;
            margin-bottom: 15px;
          }
          p.name {
            height: 19px;
            font-size: 24px;
            font-family: '宋体';
            font-weight: 800;
            color: #b69d74;
          }
        }
      }
    }
  }
}
</style>