<template>
  <div class="tradingSlideOne-wrap">
    <div class="content">
      <!--<div class="title">交易中心<span class="em">,</span></div>-->
      <div class="tit wow zoomIn">交易市场，不止是方块</div>
      <div class="btn" @click="jump">开始交易</div>
    </div>
  </div>
</template>

<script>
  import { WOW } from 'wowjs'
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
    methods: {
      jump() {
        //console.log('跳转路由')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .tradingSlideOne-wrap{
    .vw;
    .vh;
    background: url("../../assets/imgRick/jy-bg.jpg") no-repeat center;
    background-size: cover;
    .flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
      background: url("../../assets/imgRick/app/tranding-banner-bg.png") no-repeat center;
      background-size: 100% 100%;
    }
    .content{
      .tc;
      @media screen and (max-width: 1400px){
        width: 80%;
      }
      @media screen and (max-width: 768px){
        .w100;
      }
      .title{
        .f60;
        color: @default;
        .tc;
        .media12;
        @media screen and (max-width: 768px){
          .f20;
          font-weight: bold;
          .ml(30px);
        }
        .em{
          color: @7ff;
        }
      }
      .tit{
        color: #fff;
        width: 1305px;
        height: 118px;
        font-size: 80px;
        // background: url("../../assets/imgRick/banner-tit02.png") no-repeat center;
        background-size: contain;
        .mAuto;
        .mt(80px);
        @media screen and (max-width: 1400px){
          width: 70%;
          .mt(20px);
        }
        @media screen and (max-width: 768px){
          .w100;
          height: 80px;
          font-size: 30px;
          // background: url("../../assets/imgRick/app/tran-banner-title.png") no-repeat center;
          // background-size: contain;
        }
      }
      .btn{
        text-align: center;
        color: #fff;
        background-image: url("../../assets/imgRick/app/btn.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        background-position: center;
        cursor: pointer;
        user-select: none;
        @media screen and (min-width: 1400px){
          margin: 120px auto;
          height: 60px;
          line-height: 60px;
        }
        @media screen and (max-width: 1400px){
          margin: 20px auto;
          height: 40px;
          font-size: 16px;
          line-height: 40px;
          text-align: center;
        }
      }
    }
  }
</style>
