<template>
  <div class="aboutUsOne-wrap">
    <div class="main">
      <!--<div class="title">关于我们<em>,</em> </div>-->
      <div class="tit wow zoomIn">拼世界，你的世界，我们的世界</div>
      <div class="text-p">在AR技术和人工智能的帮助下，融合虚拟与现实，我们制作了一款打造未来“增强世界”的工具——《拼世界》。</div>
      <div class="text-p">《拼世界》将与真实世界相结合，因此它不再仅仅是一个游戏，而是一个可以将现实商业的影响力延伸到增强世界中，能够改变世界的平台！</div>
    </div>
  </div>
</template>

<script>
import {WOW} from 'wowjs'

export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      new WOW({live: false}).init()
    })
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .aboutUsOne-wrap {
    .vw;
    .vh;
    background: url("../../assets/imgRick/about-bg01-banner.jpg") no-repeat center;
    background-size: cover;
    .flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      .w100;
      background: url("../../assets/imgRick/app/about-banner-bg.png") no-repeat center;
      background-size: 100% 100%;
      align-items: flex-start;
      padding: 0 20px;
    }
    .main {
      .w100;
      .tc;
      @media screen and (max-width: 768px) {
        .pt(150px);
      }
      .title {
        .f60;
        color: @default;
        .media12;
        @media screen and (max-width: 768px) {
          .f20;
          font-weight: bold;
        }
        em {
          color: @7ff;
        }
      }
      .tit {
        /*width: 80%;*/
        /*height: 110px;*/
        /*background: url("../../assets/imgRick/about-tit01.png") no-repeat center;*/
        /*background-size: contain;*/
        font-size: 80px;
        color: #fff;
        .mAuto;
        .mt(80px);
        .mb(80px);
        @media screen and (max-width: 1200px) {
          .mt(20px);
          .mb(20px);
          font-size: 30px;
        }
        @media screen and (max-width: 768px) {
          .w100;
          height: 80px;
          // background: url("../../assets/imgRick/app/about-title.png") no-repeat center;
          background-size: contain;
        }
      }
      .text-p {
        .lh;
        color: @default;
        .f20;
        @media screen and (max-width: 1400px) {
          width: 80%;
          .mAuto;
        }
        @media screen and (max-width: 768px) {
          .w100;
          .f16;
          line-height: 2;
        }
      }
    }
  }
</style>
