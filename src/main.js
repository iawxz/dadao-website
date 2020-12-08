import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible/flexible'

import axios from "axios" //引入

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]

// 引入v-viewer实现放大图片查看功能
import Viewer from 'v-viewer'
import '../node_modules/viewerjs/dist/viewer.css'

Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});

// 引入jsonp
import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)

// 引入百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'yT1n10FkCZEe1PsQUwiOTfc7AbBvXwGx'
})

//然后再修改原型链
Vue.prototype.$axios = axios

// 引入视频播放组件
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

// 引入swiper轮播组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


// 引入自定义header组件
import pageHeader from './components/pageHeader'
Vue.use(pageHeader)
import pageHeader_M from './components/pageHeader_M'
Vue.use(pageHeader_M)
// 引入自定义footer组件
import pageFooter from './components/pageFooter'
Vue.use(pageFooter)
import pageFooter_M from './components/pageFooter_M'
Vue.use(pageFooter_M)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')