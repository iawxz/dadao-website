<template>
  <div class="home">
    <pageHeader ref="borrow" :isScroll="isScroll"></pageHeader>
    <div class="swiperBox">
      <swiper
        v-if="swiperImg.length > 1"
        :options="swiperOption"
        :not-next-tick="notNextTick"
        ref="mySwiper"
      >
        <swiper-slide>
          <div class="swiper_video">
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
            class="swiper_img"
            :style="{ backgroundImage: 'url(' + item.img + ')' }"
          ></div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>

    <div class="info">
      <div class="splitline"></div>
      <div class="infoBox">
        <div class="profile">
          <img src="../assets/1_home/logo_profile.png" alt="" />
          <p>
            大稻启运最早成立于2007年, 总部坐落在美丽的杭州钱塘江畔。核心业务包括地产开发、工程建设、产业投资等。在多元化的经营理念下，大稻启运积极拓展业务版图，使其经济实力和区域影响力不断地快速提升。
          </p>
        </div>
        <div class="splitline_y"></div>
        <div class="headline" @click="goNews(headline)">
          <p class="title">{{ headline.title }}</p>
          <p class="time">{{ headline.create_time }}</p>
          <p class="content" v-html="headline.text"></p>
        </div>
        <div class="splitline_y"></div>
        <div class="newsBox">
          <div class="type">
            <div
              class="typename"
              :class="{ typename_chose: news_type == 0 || news_type == -1 }"
              @click="typeChose(0)"
            >
              <p>集团新闻</p>
              <div
                class="underline"
                v-show="news_type == 0 || news_type == -1"
              ></div>
            </div>
            <div
              class="typename"
              :class="{ typename_chose: news_type == 1 }"
              @click="typeChose(1)"
            >
              <p>版块动态</p>
              <div class="underline" v-show="news_type == 1"></div>
            </div>
          </div>
          <div class="newsBox_con" v-if="news_type == -1">
            <div class="newsList">
              <div
                class="news"
                v-for="(item, index) in news"
                :key="index"
                @click="goNews(item)"
              >
                <p>
                  <span>{{ item.create_time }}</span>{{ item.title }}
                </p>
              </div>
            </div>
          </div>
          <div class="newsBox_con" v-else>
            <div
              class="newsList"
              :class="[news_type == '0' ? 'scrollMove_down' : 'scrollMove_up']"
            >
              <div
                class="news"
                v-for="(item, index) in news"
                :key="index"
                @click="goNews(item)"
              >
                <p><span>{{ item.create_time }}</span>{{ item.title }}</p>
              </div>
            </div>
            <div
              class="newsList"
              :class="[news_type == '0' ? 'scrollMove_down' : 'scrollMove_up']"
            >
              <div
                class="news"
                v-for="(item, index) in tendency"
                :key="index"
                @click="goNews(item)"
              >
                <p>
                  <span>{{ item.create_time }}</span
                  >{{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="introBox" v-for="(item, index) in intro" :key="index">
        <img :src="item.img" alt="" />
        <p class="introTitle">{{ item.title }}</p>
        <p class="introText">{{ item.text }}</p>
      </div>
    </div>
    <div class="estate">
      <div class="estateImg" @click="goEstate(0)"></div>
      <div class="estateImg" @click="goEstate(1)"></div>
      <div class="estateImg" @click="goEstate(2)"></div>
      <div class="estateImg" @click="goEstate(3)"></div>
      <div class="estateImg" @click="goEstate(4)"></div>
    </div>
    <pageFooter></pageFooter>
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
      swiperImg: [
        { img: require("../assets/1_home/swiper1.jpg") },
        { img: require("../assets/1_home/swiper2.jpg") },
        { img: require("../assets/1_home/swiper3.jpg") },
      ],
      intro: [
        {
          img: require("../assets/1_home/intro1.png"),
          title: "企业定位",
          text: "成为城市商业产业服务的一流供应商。",
        },
        {
          img: require("../assets/1_home/intro2.png"),
          title: "企业文化",
          text: "与同道者同行，与同行者同享。",
        },
        {
          img: require("../assets/1_home/intro3.png"),
          title: "企业信仰",
          text: "真诚、专注、极致、完美",
        },
      ],
      news: [
        // {
        //   time: "2020.07.30",
        //   title: "浙商全国500强研讨会圆满举办",
        // },
        // {
        //   time: "2020.07.30",
        //   title: "诚稻 中南签约仪式",
        // },
        // {
        //   time: "2020.07.30",
        //   title: "望朝开工典礼隆重举行",
        // },
        // {
        //   time: "2020.07.30",
        //   title: "大稻启运携手透明售房网",
        // },
      ],
      tendency: [
        // {
        //   time: "2018.11.25",
        //   title: "望朝开工典礼隆重举行",
        // },
        // {
        //   time: "2018.11.07",
        //   title: "望朝开工典礼隆重举行",
        // },
        // {
        //   time: "2020.07.30",
        //   title: "望朝开工典礼隆重举行",
        // },
        // {
        //   time: "2020.07.30",
        //   title: "大稻启运携手透明售房网",
        // },
      ],
      headline: {},
      news_type: -1, //新闻类型，0为集团新闻，1为板块动态，-1为未切换过类型
    };
  },
  props: ["isScroll"],
  components: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(1, 1000, false);
    this.getNews();
  },
  methods: {
    // 获取新闻动态列表
    getNews() {
      this.$axios({
        url: "http://news.youtuosoftware.com/API/Article/GetArticleList",
        method: "post",
        data: {
          pageNum: 1,
          pageSize: 10,
        },
      }).then((res) => {
        var Textrules = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
        if (this.news_type <= 0) {
          var news = [];
          for (var i of res.data.datalist) {
            if (i.type == "资讯") {
              news.push(i);
            }
            i.create_time = i.create_time.split("T")[0];
            i.text = i.content.replace(Textrules, "");
          }
          this.news = news;
          this.headline = this.news[0];
        } else {
          var news = [];
          for (var i of res.data.datalist) {
            if (i.type == "动态") {
              news.push(i);
            }
            i.create_time = i.create_time.split("T")[0];
            i.text = i.content.replace(Textrules, "");
          }
          this.tendency = news;
          this.headline = this.tendency[0];
        }
      });
    },
    // 前往新闻页
    goNews(item) {
      var pageitem = {
        name: "News",
        url: "/news",
        index: 5,
        item,
      };
      this.$refs.borrow.goPage_News(pageitem);
    },
    // 文章类型选择
    typeChose(index) {
      this.news_type = index;
      this.getNews();
    },
    // 跳转至产业页
    goEstate(selectIndex) {
      var pageitem = {
        name: "Estate",
        url: "/estate",
        index: 3,
        selectIndex,
      };
      this.$refs.borrow.goPage_Estate(pageitem);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .swiperBox {
    margin-top: 100px;
    // 轮播内容
    .swiper_video {
      width: 100%;
      height: 790px;
      video {
        min-width: 100%;
        min-height: 100%;
        height: auto;
        width: auto;
        source {
          min-width: 100%;
          min-height: 100%;
          height: auto;
          width: auto;
        }
      }
    }
    .swiper_img {
      width: 100%;
      height: 790px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    // 左右箭头
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      background-image: url("../assets/0_common/slider_L.png");
      left: 120px;
    }
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      background-image: url("../assets/0_common/slider_R.png");
      right: 120px;
    }
    // 轮播分页器
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
      width: 100%;
      left: 25%;
      bottom: 80px;
    }
    ::v-deep .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      border: 2px solid #ffffff;
      border-radius: 50%;
      // background: rgba($color: #000000, $alpha: 0.2);
      margin: 0 6px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      background-color: #ffffff;
      width: 50px;
      height: 16px;
      background: #ffffff;
      border-radius: 8px;
    }
  }
  .info {
    .splitline {
      height: 20px;
      background: #b69d74;
    }
    .infoBox {
      height: 230px;
      padding-top: 53px;

      background-image: url(../assets/1_home/info_back.png);
      background-position: center;
      background-repeat: repeat;
      background-size: 113%;

      display: flex;
      // align-items: center;
      justify-content: center;

      .splitline_y {
        width: 4px;
        height: 163px;
        background: #ededed;
        margin: 0 28px;
      }
      .profile {
        img {
          width: 147px;
          height: 38px;
          display: block;
          margin-bottom: 17px;
        }
        width: 419px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #666666;
        line-height: 31px;
      }

      .headline {
        cursor: pointer;
        .title {
          width: 354px;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          opacity: 0.85;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .time {
          font-size: 18px;
          font-family: Roboto;
          font-weight: 500;
          color: #666666;
          margin: 10px 0 20px;
          opacity: 0.6;
        }
        .content {
          width: 381px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #666666;
          line-height: 31px;
          overflow: hidden;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }
      }
      .newsBox {
        .type {
          display: flex;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #262626;
          cursor: pointer;
          .typename {
            margin-right: 25px;
            p {
              margin-bottom: 5px;
            }
            .underline {
              width: 100%;
              height: 4px;
              background: #b69d74;
              margin-bottom: 22px;
            }
          }
          .typename_chose {
            color: rgba($color: #262626, $alpha: 0.7);
          }
        }
        .newsBox_con {
          width: 360px;
          height: 120px;
          overflow: hidden;
          p {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            span {
              display: inline-block;
              margin-right: 15px;
            }
          }
          .newsList {
            width: 100%;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #666666;
            line-height: 31px;
            .news {
              cursor: pointer;
            }
            .news:hover {
              color: #b69d74;
            }
          }
          .scrollMove_up {
            animation: scrollMove_up 2s linear;
            transform: translateY(-125px);
          }
          .scrollMove_down {
            animation: scrollMove_down 2s linear;
            transform: translateY(0);
          }
          @keyframes scrollMove_up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-125px);
            }
          }
          @keyframes scrollMove_down {
            0% {
              transform: translateY(-125px);
            }
            100% {
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
  .intro {
    height: 150px;
    background: #b69d74;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .introBox {
      width: 274px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 60px;
        height: 60px;
        display: block;
        margin-bottom: 10px;
      }
      p.introTitle {
        font-size: 20px;
        font-family: '宋体';
        font-weight: 800;
        color: #ffffff;
        margin-bottom: 5px;
      }
      p.introText {
        font-size: 14px;
        font-family: '宋体';
        font-weight: bold;
        color: #ffffff;
        opacity: 0.9;
      }
    }
  }
  .estate {
    display: flex;
    align-items: center;
    justify-content: center;
    .estateImg {
      cursor: pointer;
      display: block;
      height: 340px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: 1s;
    }
    .estateImg:nth-child(1) {
      width: 27%;
      background-image: url("../assets/1_home/estate1.png");
    }
    .estateImg:nth-child(1):hover {
      width: 35%;
    }
    .estateImg:nth-child(2) {
      width: 18%;
      background-image: url("../assets/1_home/estate2.png");
    }
    .estateImg:nth-child(2):hover {
      width: 25%;
    }
    .estateImg:nth-child(3) {
      width: 21%;
      background-image: url("../assets/1_home/estate3.png");
    }
    .estateImg:nth-child(4) {
      width: 11%;
      background-image: url("../assets/1_home/estate4.png");
      background-position: 55% 0%;
    }
    .estateImg:nth-child(4):hover {
      width: 26%;
    }
    .estateImg:nth-child(5) {
      width: 23%;
      background-image: url("../assets/1_home/estate5.png");
    }
    .estateImg:nth-child(5):hover {
      width: 34%;
    }
  }
}
</style>