import pageHeader from './pageHeader.vue'
// 这里是重点
export default{
    install:(Vue) => {
        Vue.component('pageHeader',pageHeader)
    }
}