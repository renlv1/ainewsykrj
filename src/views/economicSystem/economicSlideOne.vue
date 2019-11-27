<template>
  <div class="economicSystem-one-wrap">
    <div class="content">
      <!--<div class="title" >经济系统<span>,</span></div>-->
      <div class="gold wow zoomIn">黄金方块，拼世界的经济中心</div>
      <div class="explain">
        <div class="tit1">为了保证拼世界和现实世界维度的联系，同时也保证玩家和商家在拼世界获取的收益能够切实的转换到现实世界，拼世界建立了一个开放式的经济系统。</div>
        <div class="tit2">与现实世界的经济核心相同，拼世界的经济核心也是黄金，不过和现实世界不同的是，拼世界中的黄金是“黄金方块”。</div>
      </div>
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
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .economicSystem-one-wrap{
    .vw;
    .vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
      width: 100%;
      background: url("../../assets/imgRick/app/ec03-bg.png")no-repeat center;
      background-size: 100% 100%;
      padding: 0 18px;
      align-items: flex-start;
    }
    .content{
      @media screen and (max-width: 1500px){
        width: 80%;
      }
      @media screen and (max-width: 768px){
        width: 100%;
        padding-top: 150px;
      }
      .title{
        .f60;
        color: @default;
        .tc;
        .media12;
        @media screen and (max-width: 768px){
          .f20;
          font-weight: bold;
          .ml(20px);
        }
        span{
          color: @7ff;
        }
      }
      .gold{
        text-align: center;
        width: 100%;
        color: #fff;
        font-size: 60px;
        margin: 80px auto;
        @media screen and (max-width: 1200px){
          width: 70%;
          margin: 10px auto;
        }
        @media screen and (max-width: 768px){
          .w100;
          text-align: center;
          height: 80px;
          // background: url("../../assets/imgRick/app/ec03-title.png") no-repeat center;
          // background-size: contain;
          font-size: 25px;
          font-weight: bolder;
          margin: 26px auto 30px;
        }
      }
      .explain{
        .tit1,.tit2{
          .f20;
          color: @default;
          .lh;
          .tc;
          @media screen and (max-width: 768px){
           .f16;
            line-height: 1.8;
          }
        }
      }
    }
  }
</style>
