<template>
  <div class="propertyDetail">
    <div class="goLists" @click="goDetail"><<<返回列表</div>

    <!-- 项目内容 -->
    <div class="essay">
      <div class="imgBox">
        <viewer class="viewer_con" :images="imglist_now">
          <img
            v-for="(item, index) in imglist_now"
            :src="item"
            :key="index"
            :alt="index + 1"
            :style="{ 'z-index': imglist_zindex[index] }"
          />
        </viewer>
        <div
          class="imgMore"
          :style="{
            backgroundImage: 'url(' + imglist_now[img_now + 1] + ')',
          }"
          v-if="img_now < imglist_now.length - 1"
        >
          <div class="mask"></div>
          <img @click="nextImg" src="@/assets/3_estate/icon_more.png" alt="" />
        </div>
        <div
          class="imgMore"
          :style="{
            backgroundImage: 'url(' + imglist_now[0] + ')',
          }"
          v-else
        >
          <div class="mask"></div>
          <img @click="nextImg" src="@/assets/3_estate/icon_more.png" alt="" />
        </div>
      </div>

      <div class="content">
        <div class="intro">
          <p class="title">{{ propertyDetail.title }}</p>
          <p class="address">项目地址：{{ address }}</p>
          <!-- <p class="phone">联系电话：{{ propertyDetail.contact }}</p> -->
          <p class="text" v-text="propertyDetail.abstract"></p>
          <div class="introBox">
            <p class="subtitle">● 项目殊荣</p>
            <div class="honourBox">
              <div
                class="honour"
                v-for="(item, index) in propertyDetail.honor"
                :key="index"
                v-text="item"
              ></div>
            </div>
          </div>
          <div class="introBox">
            <p class="subtitle">● 楼盘详情</p>
            <div class="detailBox">
              <div class="detail">
                <p class="title">开发商</p>
                <p class="text">{{ propertyDetail.developer || "/" }}</p>
              </div>
              <div class="detail">
                <p class="title">建筑面积</p>
                <p class="text">
                  {{ propertyDetail.construction_area || "/" }}m²
                </p>
              </div>
              <div class="detail">
                <p class="title">车位数</p>
                <p class="text">{{ propertyDetail.parking_number || "/" }}个</p>
              </div>
              <div class="detail">
                <p class="title">建筑类别</p>
                <p class="text">{{ propertyDetail.category || "/" }}</p>
              </div>
              <div class="detail">
                <p class="title">占地面积</p>
                <p class="text">{{ propertyDetail.cover_area || "/" }}m²</p>
              </div>
              <div class="detail">
                <p class="title">绿化率</p>
                <p class="text">{{ propertyDetail.green_rate || "/" }}%</p>
              </div>
              <div class="detail">
                <p class="title">物业公司</p>
                <p class="text">{{ propertyDetail.property_company || "/" }}</p>
              </div>
            </div>
          </div>
          <div class="introBox">
            <p class="subtitle">● 周边配套</p>
            <div class="facilityBox">
              <baidu-map class="map" :center="location" :zoom="15">
                <bm-marker
                  :position="location"
                  :dragging="true"
                  animation="BMAP_ANIMATION_BOUNCE"
                >
                </bm-marker>
              </baidu-map>

              <div class="facility">
                <div class="facilityTitle">周边配套介绍</div>
                <div class="facilities">
                  <div
                    v-for="(item, index) in propertyDetail.support"
                    :key="'support' + index"
                  >
                    <div v-if="item.length > 1">
                      <span>{{ item[0] }}：</span>{{ item[1] }}；
                    </div>
                    <div v-else>"暂无规划数据"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "propertyDetail",
  data() {
    return {
      address: "",
      location: {
        lat: 30.25308298169347,
        lng: 120.21551180372168,
      },
      imglist_now: [],
      imglist_zindex: [],
      img_now: 0,
    };
  },
  props: ["propertyDetail"],
  components: {},
  created() {
    this.imglist_now = JSON.parse(JSON.stringify(this.propertyDetail.imglist));
    for (var i in this.imglist_now) {
      this.imglist_zindex.push(0);
    }
    this.imglist_zindex[0] = 10; //第一张图片放在最高位置
    this.address = this.propertyDetail.address;
    if(this.address.indexOf('在建')!=-1){
      this.address='杭州市'
    }
    // 获取坐标
    this.$jsonp("http://api.map.baidu.com/geocoding/v3/", {
      address: this.address,
      output: "json",
      ak: "yT1n10FkCZEe1PsQUwiOTfc7AbBvXwGx",
    })
      .then((res) => {
        this.location = JSON.parse(JSON.stringify(res.result.location));
        // console.log(this.location);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    goDetail() {
      this.$emit("back", 0);
    },
    nextImg() {
      for (var i in this.imglist_zindex) {
        this.imglist_zindex[i] = 0;
      }
      if (this.img_now < this.imglist_now.length - 1) {
        this.img_now++;
      } else {
        this.img_now = 0;
      }
      var now = this.img_now;
      this.imglist_zindex[now] = 10;
    },
  },
};
</script>

<style lang="scss" scoped>
.propertyDetail {
  position: relative;
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 56px;
    .viewer_con {
      width: 705px;
      height: 390px;
      position: relative;
      overflow: hidden;
      img {
        cursor: pointer;
        width: 705px;
        min-height: 390px;
        height: auto;
        position: absolute;
        z-index: 0;
      }
    }
    .imgMore {
      position: relative;
      width: 465px;
      height: 390px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: 0.6;
      }
      img {
        cursor: pointer;
        position: relative;
        display: block;
        width: 94px;
        height: 94px;
        z-index: 10;
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
            ::v-deep .anchorBL {
              display: none;
            }
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
</style>