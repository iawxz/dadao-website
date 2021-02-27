<template>
  <!-- 底部信息组件 -->
  <div class="footer">
    <p>
      版权所有：大稻启运集团<br />
      备案号 浙ICP备18048792号-1
    </p>
  </div>
</template>

<script>
export default {
  name: "pageFooter_M",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
/* 底部信息组件 */
.footer {
  width: 100%;
  height: 128px;
  background: #e7e7e7;
  position: relative;
}
.footer p {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #3e3e3e;
  line-height: 45px;
  opacity: 0.7;

  position: absolute;
  left: 70px;
  top: 25px;
}
</style>