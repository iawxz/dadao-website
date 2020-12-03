<template>
  <div class="partner">
    <pageHeader_M @sendIndex="getIndex"></pageHeader_M>
    <img
      class="optionImg"
      style="width: 100%; display: block"
      src="../assets/0_common_M/option.png"
      alt=""
    />
    <div class="content">
      <img src="../assets/4_partner/1_m.png" alt="" v-if="navIndex == 0" />
      <img src="../assets/4_partner/2_m.png" alt="" v-else-if="navIndex == 1" />
      <img src="../assets/4_partner/3_m.png" alt="" v-else-if="navIndex == 2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "partner",
  data() {
    return {
      navIndex: this.$route.params.navIndex,
    };
  },
  computed: {},
  props: {},
  components: {},
  mounted() {},
  methods: {
    getIndex(index) {
      this.navIndex = index;
    },
  },
};
</script>

<style scoped>
.content img {
  width: 100%;
}
</style>