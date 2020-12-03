import pageFooter from './pageFooter.vue'
// 这里是重点
export default{
    install:(Vue) => {
        Vue.component('pageFooter',pageFooter)
    }
}