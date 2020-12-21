<template>
  <div class="about">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <div class="LR_layout">
        <div class="left">
          <div class="leftBox">
            <p class="title_EN">SERVICE</p>
            <p class="title">大稻启运<br />做商业运营的钟表匠</p>
            <img src="../assets/0_common/leftBox.png" alt="" />
          </div>
        </div>
        <!-- 企业介绍 -->
        <div class="right" v-if="selectIndex == 0">
          <div class="essay">
            <div class="title">关于我们</div>
            <div class="title_EN">ABOUT US</div>
            <div class="text">
              <p>
                大稻启运最早成立于2007年, 总部坐落在美丽的杭州钱塘江畔。核心业务涵盖房地产综合开发<br>
                、商业地产运营、产业地产运营、物业服务管理、工程建设管理、科技产业投资、高端医疗管<br>
                理、文化艺术投资等领域。在不断深化发展创新的理念下，大稻启运积极拓展业务板块，经济<br>
                实力和区域影响力不断地快速提升。<br />
                大稻启运集团定位于"成为中国领先的城市及产业运营商"，以"投资开发"、"运营服务"为两大<br>
                业务战略。目前，集团已开发超5A级写字楼、产业园、高端住宅、精品酒店式公寓等多个核心<br>
                区域优质项目，并赢得市场青睐。为巩固生态运服业务优势，大稻启运集团推出了五个核心概<br>
                念作为自身的运营模式：商业价值、社区整合、教育共享、健康服务、生态艺术。专注打造可<br>
                持续的商业和生活空间。
              </p>
            </div>
          </div>
        </div>
        <!-- 企业理念 -->
        <div class="right" v-else-if="selectIndex == 1" v-cloak>
          <div class="essay essay_img" v-if="departmentStatus == -1" v-cloak>
            <div class="imgBox">
              <img src="../assets/2_about/1.png" alt="组织架构" />
              <div class="navBox">
                <img src="../assets/2_about/2.png" alt="9大运营中心" />
                <div
                  class="nav"
                  v-for="(item, index) in department"
                  :key="index"
                  @click="goDetail(index)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="department" v-else v-cloak>
            <p class="back" @click="goDetail(-1)"><<<返回上一级</p>
            <img
              src="../assets/2_about/department/0.png"
              v-if="departmentStatus == 0"
              alt=""
            />
            <img
              src="../assets/2_about/department/1.png"
              v-else-if="departmentStatus == 1"
              alt=""
            />
            <img
              src="../assets/2_about/department/2.png"
              v-else-if="departmentStatus == 2"
              alt=""
            />
            <img
              src="../assets/2_about/department/3.png"
              v-else-if="departmentStatus == 3"
              alt=""
            />
            <img
              src="../assets/2_about/department/4.png"
              v-else-if="departmentStatus == 4"
              alt=""
            />
            <img
              src="../assets/2_about/department/5.png"
              v-else-if="departmentStatus == 5"
              alt=""
            />
            <img
              src="../assets/2_about/department/6.png"
              v-else-if="departmentStatus == 6"
              alt=""
            />
            <img
              src="../assets/2_about/department/7.png"
              v-else-if="departmentStatus == 7"
              alt=""
            />
            <img
              src="../assets/2_about/department/8.png"
              v-else-if="departmentStatus == 8"
              alt=""
            />
            <!-- <img :src="departmentImg" alt="图片加载不出来"> -->
          </div>
        </div>
        <!-- 企业架构 -->
        <div class="right" v-if="selectIndex == 2">
          <div class="essay">            
            <div class="text" style="padding-top:70px">
              <p>
                犹如艺术般的创造，对完美和极致孜孜以求，大稻启运集团，立志成为商业运营领域的钟表<br>
                匠。<br />
                <span>大</span
                >|是秉承钱塘江大潮的精神涵养，百舸争流，力争上游，奋勇为先；是在当下的杭州勇立<br />
                时代的大潮头；是对城市的大爱，以高度的社会责任感，去回馈城市的关照。<br />
                <span>稻</span
                >|播种，生长，到丰满的收获，走过的完整的生命，成熟饱满的稻穗低垂着头，饱含谦逊<br />
                和丰硕。在江南鱼米之乡，一个稻字就是富足和充实。稻是衣食住行，民之根本，让最本真<br />
                的日常生活变得美好，便近“道”矣。<br />
                <span>启</span
                >|是每一次启程都始终如一，以初心以百分百用心去付出。<br />
                <span>運</span
                >|是顺时顺势，遵循着自然的法则和生命的城市的流向，让美好可持续。<br />
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
export default {
  name: "about",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      selectIndex: 0, //默认为0
      department: [
        //9大运营中心
        {
          index: 0,
          name: "百达翡丽中心-投资开发",
          img: 'require("@/assets/2_about/department/0.png")',
        },
        {
          index: 1,
          name: "宝玑中心-设计管理",
          img: 'require("@/assets/2_about/department/1.png")',
        },
        {
          index: 2,
          name: "朗格中心-工程管理",
          img: 'require("@/assets/2_about/department/2.png")',
        },
        {
          index: 3,
          name: "理查德米勒中心-营销客服",
          img: 'require("@/assets/2_about/department/3.png")',
        },
        {
          index: 4,
          name: "劳力士中心-财务管理",
          img: 'require("@/assets/2_about/department/4.png")',
        },
        {
          index: 5,
          name: "江诗丹顿中心-资产运服",
          img: 'require("@/assets/2_about/department/5.png")',
        },
        {
          index: 6,
          name: "积家中心-物业公司",
          img: 'require("@/assets/2_about/department/6.png")',
        },
        {
          index: 7,
          name: "爱彼中心-综合管理",
          img: 'require("@/assets/2_about/department/7.png")',
        },
        {
          index: 8,
          name: "芝柏中心-成本管理&招采合约",
          img: 'require("@/assets/2_about/department/8.png")',
        },
      ],
      departmentStatus: -1, //当前运营中心状态
      departmentImg: "", //当前运营中心图片
    };
  },
  props: {},
  components: {
    pageNav,
  },
  mounted() {},
  methods: {
    // 获取导航栏索引
    getSelectIndex(index) {
      this.selectIndex = index;
    },
    // 查看运营中心详情
    goDetail(index) {
      this.departmentStatus = index;
      if (index == -1) {
        return;
      }
      this.departmentImg = this.department[index].img;
      console.log(this.department[index].img);
    },
  },
};
</script>

<style lang="scss" scoped>
[v-cloak]{display:none!important}
.about {
  height: 100%;
}
.content {
  .LR_layout {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;

    .left {
      width: 40%;
      position: relative;
      .leftBox {
        position: absolute;
        top: 60px;
        right: 0;
        padding-bottom: 130px;
        p {
          font-weight: 600;
        }
        p.title_EN {
          margin-bottom: 20px;
          font-size: 70px;
          font-family: "新宋体";
          color: #9d9995;
        }
        p.title {
          margin-bottom: 35px;
          line-height: 50px;
          font-size: 34px;
          font-family: "宋体";
          color: #2e2620;
        }
      }
    }
    .right {
      width: 60%;
      min-height: 560px;
      overflow: hidden;
      .essay {
        margin: 60px 0 ;
        padding-left: 30px;
        min-height: 524px;
        border-left: 3px solid #b69d74;        
        .title {          
          font-size: 22px;
          font-weight: bold;
          font-family: '宋体';
          color: #808080;
          padding-top: 30px;
          margin-bottom: 5px;
        }
        .title_EN {          
          font-size: 18px;          
        }
        .text {
          width: 760px;
          padding-top: 30px;
          p {
            font-size: 18px;
            font-family: "宋体";
            color: #505050;
            line-height: 35px;            
            span {
              font-family: "楷体";
              font-size: 28px;
              font-weight: bold;
            }
          }
        }
      }
      .essay_img {
        padding-left: 30px;
        .imgBox {
          display: flex;
          img {
            width: 580px;
            height: 489px;
          }
          .navBox {
            position: relative;
            .nav {
              position: absolute;
              top: 80px;
              left: 20px;
              cursor: pointer;
              width: 150px;
              height: 90px;
              // border: 1px solid red;
              opacity: 0;
            }
            .nav:nth-child(3) {
              left: 190px; //20+150+20
            }
            .nav:nth-child(4) {
              left: 360px; //190+150+20
            }
            .nav:nth-child(5) {
              top: 200px; //80+90+30
            }
            .nav:nth-child(6) {
              left: 190px;
              top: 200px;
            }
            .nav:nth-child(7) {
              left: 360px;
              top: 200px;
            }
            .nav:nth-child(8) {
              top: 320px; //200+90+30
            }
            .nav:nth-child(9) {
              left: 190px;
              top: 320px;
            }
            .nav:nth-child(10) {
              left: 360px;
              top: 320px;
            }
          }
        }
      }
      .department {
        margin: 60px 0;
        padding-left: 30px;
        border-left: 3px solid #b69d74;
        .back {
          cursor: pointer;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #666666;
        }
        img {
          width: 750px;
        }
      }
    }
  }
}
</style>