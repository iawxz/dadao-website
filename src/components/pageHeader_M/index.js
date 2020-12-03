import pageHeader_M from './pageHeader_M.vue'
// 这里是重点
export default{
    install:(Vue) => {
        Vue.component('pageHeader_M',pageHeader_M)
    }
}