<template>
  <div class="news">
    <pageHeader_M></pageHeader_M>
    <img
      class="optionImg"
      style="width: 100%; display: block"
      src="../assets/0_common_M/option.png"
      alt=""
    />
    <div class="content">
      <!-- 新闻列表 -->
      <div class="newsList" v-if="!isDetail">
        <div
          class="news"
          v-for="(item, index) in newslist"
          :key="index"
          @click="goDetail(item, true)"
        >
          <p class="time">{{ item.create_time }}</p>
          <p class="title">{{ item.title }}</p>
          <p class="text">{{ item.text }}</p>
        </div>
        <div class="getMore" @click="getMoreNews" v-if="isMore">更多新闻</div>
        <div class="noMore" v-else>抱歉，暂无更多新闻...</div>
      </div>
      <!-- 新闻详情 -->
      <div class="neswDetail" v-else>
        <div class="backList" @click="goDetail(false)"><<<返回列表</div>
        <p class="time">{{ newsDetail.create_time }}</p>
        <p class="title">{{ newsDetail.title }}</p>
        <div class="newsContent" v-html="newsDetail.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      newslist: [],
      newsCount: 3,
      isDetail: false, //判断是否在新闻详情页
      newsDetail: {},
      isMore: true, //判断是否还有更多新闻
    };
  },
  computed: {},
  props: {},
  components: {},
  mounted() {
    this.getNews();
  },
  methods: {
    // 获取新闻
    getNews() {
      this.$axios({
        url: "http://news.youtuosoftware.com/API/Article/GetArticleList",
        method: "post",
        data: {
          pageNum: 1,
          pageSize: this.newsCount,
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
        if (this.newsCount > this.newslist.length) {
          this.isMore = false;
        }
      });
    },
    // 获取更多新闻
    getMoreNews() {
      this.newsCount += 3;
      this.getNews();
    },
    // 前往新闻详情页
    goDetail(item, is) {
      this.newsDetail = item;
      this.isDetail = is;

      var content = this.newsDetail.content.replace(
        /<img [^>]*src=['"]([^'"]+)[^>]*>/gi,
        function (match, capture) {
          // console.log(match)
          // console.log(capture)
          return match.replace(
            new RegExp("(" + capture + ")", "g"),
            "http://news.youtuosoftware.com/" + capture
          );
        }
      );
      // console.log(content)
      // console.log(this.newsDetail.content)
      this.newsDetail.content = content
    },
  },
};
</script>

<style scoped>
.content {
  padding: 40px 75px 0;
}
.time {
  margin: 15px 0;
  font-size: 32px;
  font-family: Roboto;
  font-weight: 500;
  color: #b69d74;
  opacity: 0.6;
}
.title {
  margin-bottom: 18px;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  opacity: 0.9;
}
/* .newsList */
.news {
  width: 100%;
  height: 250px;
  border-bottom: 3px dashed #e6e6e6;
}
.news .text {
  margin-bottom: 15px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 36px;
  opacity: 0.7;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.getMore {
  margin: 20px 0 30px;
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background: #efefef;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #b69d74;
}
.noMore {
  width: 100%;
  text-align: center;
  margin: 20px 0 30px;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
}
/* .newsDetail */
.neswDetail{
  margin-bottom: 30px;
}
.neswDetail .backList {
  width: 100%;
  padding-bottom: 20px;
  font-size: 28px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3d3d3d;
  border-bottom: 3px dashed #e6e6e6;
}
.newsContent >>>img{
  width: 100%;
}
</style>