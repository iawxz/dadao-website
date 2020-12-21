<template>
  <div class="pageNav">
    <div class="back">
      <img src="../assets/0_common/page_nav_back_L.png" alt="" />
    </div>
    <div
      class="navBox"
      v-for="(item, index) in pageNav"
      :key="index"
      v-if="item.index == navIndex"
    >
      <div class="navSelect">
        <div class="navSelectBox">
          <img
            class="icon_home"
            src="../assets/0_common/icon_home.png"
            alt=""
          />
          <img
            class="icon_arrow"
            src="../assets/0_common/icon_arrow.png"
            alt=""
          />
          <p>{{ item.name }}</p>
          <img
            v-if="item.listName.length > 0"
            class="icon_arrow"
            src="../assets/0_common/icon_arrow.png"
            alt=""
          />
          <!-- selectName若有值先显示selectName，若无数据选择默认显示第一个nav -->
          <p v-if="item.listName">{{ selectName || item.listName[0] }}</p>
        </div>
      </div>
      <div class="navList">
        <div
          class="nav"
          v-for="(item_, index_) in item.listName"
          :key="index_"
          @click="navSelect(item_, index_)"
          :class="{ nav_select: selectItem == index_ }"
        >
          {{ item_ }}
          <div class="nav_line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageNav",
  data() {
    return {
      selectName: "",
      selectItem: 0, //选中的nav 默认为第一个
      pageNav: [
        {
          index: 2,
          name: "走进大稻",
          listName: ["企业介绍", "企业架构", "企业愿景"],
        },
        {
          index: 3,
          name: "大稻产业",
          listName: ["大稻地产", "大稻建设", "产业投资", "大健康", "文化艺术"],
        },
        {
          index: 4,
          name: "合作伙伴",
          listName: ["设计单位", "平台资源"],
        },
        {
          index: 5,
          name: "新闻动态",
          listName: [],
        },
        {
          index: 6,
          name: "加入大稻",
          listName: ["组织文化", "人才招聘"],
        },
        {
          index: 7,
          name: "联络大稻",
          listName: [],
        },
      ],
    };
  },
  props: ["navIndex",'sendSelect'],
  components: {},
  mounted() {},
  created () {    
    if(this.sendSelect){
      this.selectItem = this.sendSelect
    }
  },
  methods: {
    navSelect(item, index) {
      this.selectName = item;
      this.selectItem = index;
      this.$emit("send", this.selectItem);
    },
  },
};
</script>

<style lang="scss" scoped>
.pageNav {
  width: 100%;
  .back {
    position: relative;
    overflow: hidden;
    height: 180px;

  }
  .navBox {
    height: 88px;
    border-bottom: 2px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // 导航栏文字不可选中
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .navSelect {
      margin-left: 360px;
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      .navSelectBox {
        width: 250px;
        display: flex;
        align-items: center;
        // justify-content: center;
        img {
          display: block;
        }
        img,
        p {
          margin-right: 16px;
        }
        img.icon_home {
          width: 20px;
          height: 20px;
        }
        img.icon_arrow {
          width: 8px;
          height: 8px;
        }
        p {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #616161;
          opacity: 0.7;
        }
      }
    }
    .navList {
      margin-right: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .nav {
        height: 88px;
        line-height: 88px;
        position: relative;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #616161;
        margin: 0 20px;
        .nav_line {
          width: 0;
          height: 2px;
        }
      }
      .nav_select {
        color: #b69d74;
        .nav_line {
          width: 100%;
          height: 2px;
          background: #b69d74;
        }
      }
      .nav:hover {
        color: #b69d74;
        .nav_line {
          width: 100%;
          height: 2px;
          background: #b69d74;
        }
      }
    }
  }
}
</style>