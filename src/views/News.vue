<template>
  <div class="news">
    <pageHeader></pageHeader>
    <pageNav :navIndex="navIndex" @send="getSelectIndex"></pageNav>
    <div class="content">
      <div class="LR_layout">
        <div class="left">
          <pageInfoBox></pageInfoBox>
        </div>
        <div class="splitline"></div>
        <div class="right">
          <div class="newsLists" v-if="!isDetail">
            <div
              class="newsList"
              v-for="(item, index) in newslist"
              :key="'news' + index"
              v-show="index < showLength"
              @click="goDetail(item)"
            >
              <div class="newsTime">{{ item.create_time }}</div>
              <div class="newsText">
                <p>{{ item.title }}</p>
                <p v-html="item.text"></p>
              </div>
            </div>
            <div class="getMoreNews" @click="getMore" v-if="isShow">
              更多新闻
            </div>
            <div class="getMoreNews noMoreNews" v-else>
              抱歉，暂无更多新闻动态...
            </div>
          </div>
          <div class="newsDetail" v-else>
            <div class="goLists" @click="goLists"><<<返回列表</div>
            <div class="titleBox">
              <p class="newsTime">{{ newsDetail.create_time }}</p>
              <p class="newsTitle" v-html="newsDetail.title"></p>
            </div>
            <div class="imgTextBox" v-html="newsDetail.content"></div>
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
  name: "news",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
      selectIndex: 0, //默认为0
      newslist: [],
      newsDetail: [],
      isDetail: false, //是否展示新闻详情页
      newsImg: [
        require("../assets/5_news/newsImg1.png"),
        require("../assets/5_news/newsImg2.png"),
        require("../assets/5_news/newsImg3.png"),
      ],
      showLength: 10,
      isShow: true,
    };
  },
  props: {},
  components: {
    pageNav,
    pageInfoBox,
  },
  mounted() {
    this.getNews();
  },
  created() {
    if (this.$route.params.newsDetail) {
      this.isDetail = true;
      this.newsDetail = this.$route.params.newsDetail;
      var content = this.newsDetail.content.replace(
        /<img [^>]*src=['"]([^'"]+)[^>]*>/gi,
        function (match, capture) {
          return match.replace(
            new RegExp("(" + capture + ")", "g"),
            "http://news.youtuosoftware.com/" + capture
          );
        }
      );
      this.newsDetail.content = content;
    }
  },
  activated() {
    document.getElementsByClassName("news").scrollTop = 0;
  },
  methods: {
    getSelectIndex(index) {
      this.selectIndex = index;
    },
    // 获取新闻
    getNews() {
      this.$axios({
        url: "http://news.youtuosoftware.com/API/Article/GetArticleList",
        method: "post",
        data: {
          pageNum: 1,
          pageSize: this.showLength,
        },
      }).then((res) => {
        this.newslist = res.data.datalist;
        var i = 0;
        var Textrules = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
        for (var item of this.newslist) {
          this.newslist[i].create_time = item.create_time.split("T")[0];
          this.newslist[i].text = this.newslist[i].content.replace(
            Textrules,
            ""
          ); //执行替换成空字符
          i++;
        }
        // 判断是否还有更多新闻
        if (this.showLength > this.newslist.length) {
          this.isShow = false;
        }
        // console.log(this.newslist);
      });
    },
    // 查看新闻详情
    goDetail(item) {
      window.pageYOffset = document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.isDetail = true;
      this.newsDetail = item;

      var content = this.newsDetail.content.replace(
        /<img [^>]*src=['"]([^'"]+)[^>]*>/gi,
        function (match, capture) {
          return match.replace(
            new RegExp("(" + capture + ")", "g"),
            "http://news.youtuosoftware.com/" + capture
          );
        }
      );
      this.newsDetail.content = content;
    },
    // 返回新闻列表
    goLists() {
      this.isDetail = false;
    },
    // 更多新闻
    getMore() {
      this.showLength = this.showLength + 3;
      this.getNews();
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
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
      height: 890px;
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
      .newsLists {
        margin-top: 60px;
        margin-left: 30px;
        .newsList {
          display: flex;
          margin-bottom: 23px;
          cursor: pointer;
          .newsTime {
            width: 135px;
            font-size: 24px;
            font-family: Roboto;
            font-weight: 500;
            color: #b69d74;
            opacity: 0.6;
            margin-right: 30px;
          }
          .newsText {
            p:first-child {
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #3d3d3d;
              opacity: 0.9;
              margin-bottom: 20px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            p:nth-child(2) {
              width: 613px;
              height: 75px;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba($color: #000000, $alpha: 0.7);
              line-height: 31px;
              padding-bottom: 25px;
              border-bottom: 2px dashed #efefef;
              overflow: hidden;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              display: -webkit-box;
            }
          }
        }
        .getMoreNews {
          width: 612px;
          height: 47px;
          background: #efefef;
          cursor: pointer;

          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #b69d74;

          padding-left: 154px;
          padding-top: 33px;

          margin-bottom: 100px;
        }
        .noMoreNews {
          cursor: default;
          background: transparent;
          color: #666666;
        }
      }
      .newsDetail {
        width: 765px;
        margin: 30px 0 0 30px;
        .goLists {
          width: 100%;
          padding-bottom: 15px;
          text-align: right;
          

          cursor: pointer;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #666666;
        }
        .titleBox {
          width: 100%;
          height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-bottom: 2px dashed #efefef;
          p:first-child {
            font-size: 24px;
            font-family: Roboto;
            font-weight: 500;
            color: #b69d74;
            opacity: 0.6;
            margin-bottom: 18px;
          }
          p:nth-child(2) {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #3d3d3d;
            opacity: 0.9;
          }
        }
        .imgTextBox {
          width: 765px;
          margin-top: 15px;
          ::v-deep img {
            width: 765px;
          }
        }
      }
    }
  }
}
</style>