<template>
  <div class="about-two-wrap">
    <div class="main">
      <div class="li"></div>
      <div class="li">
        <div class="info">
          <div class="app-title">AR技术</div>
          <div class="title">AR + Ai</div>
          <p class="text-p">AR技术是游戏的核心技术，玩家通过AR+Ai智能学习的算法，可以体验到用黑科技手势的方式进行AR方块拼图的技术壁垒，不仅可以拉开竞争对手，也可以给予玩家强大的新鲜感和刺激感。</p>
          <p class="text-p">还有AR多人同时拼图使用，让整个拼图过程可以大量玩家同时参与，不仅大幅度提高了线下聚会的乐趣度，同时也加强了玩家的参与感。</p>
        </div>
      </div>
      <div class="li">
        <div class="title">AR技术</div>
      </div>
      <div class="li">
        <div class="info">
          <div class="title">3D扫描+Ai</div>
          <p class="text-p">商家或者游戏中的玩家可以直接通过3D扫描+Ai智能学习功能来制作蓝图，这也是一个非常强大的新技术，商家或者玩家可以将任何自己想要制作的物品通过扫描功能变为游戏中的蓝图。</p>
          <p class="text-p">这个技术不但实现方式和过程的体验很酷炫，同时也非常有效率的提高了蓝图的制作速度和数量。让整个游戏可以成为一个平台，每个参与者都可以成为游戏内的发布者，让整个游戏彻底的活跃起来。</p>
        </div>
      </div>
      <div class="li"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    computed: {},
    created() {
    },
    mounted() {
    },
    beforeDestroy() {
    },
    destroyed() {
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .about-two-wrap{
    .vw;
    .vh;
    overflow: hidden;
    background-color: #0d1b2a;
    @media screen and (max-width: 768px){
      .w100;
      .h100;
    }
    .main{
      .w100;
      .h100;
      .flex;
      align-items: center;
      .tc;
      @media screen and (max-width: 768px){
        display: block;
        background: url("../../assets/imgRick/app/about-bg2.png") no-repeat center;
        background-size: 100% 100%;
      }
      .li{
        flex: 1;
        .h100;
        border-right: 1px solid rgba(255,255,255, .1);
        @media screen and (max-width: 768px){
          .w100;
          border-right: none;
        }
        &:nth-child(2){
          display: block;
          .info{
            height: 500px;
          }
        }
        &:nth-child(4){
          display: block;
          .info{
            height: 500px;
          }
        }
        .info{
          .w100;
          padding: 0 15px;
          color: @default;
          .title{
            .f28;
            font-size: 60px;
            color: #fff;
            .mb(40px);
            @media screen and (max-width: 1200px){
              .f24;
            }
            @media screen and (max-width: 768px){
              .f20;
              font-weight: bold;
            }
          }
          .text-p{
            .f16;
            .mb(40px);
            line-height: 30px;
            @media screen and (max-width: 1200px){
              .f14;
            }
          }
        }
        &:nth-child(1){
          @media screen and (max-width: 1200px){
            display: none;
          }
        }
        &:nth-child(2){
          .h100;
          background: url("../../assets/imgRick/about-li-bg02.jpg") no-repeat center;
          background-size: 100% 100%;
          .pt(220px);
          /*.flex;
          align-items: center;
          justify-content: center;*/
          @media screen and (max-width: 768px){
            background: none;
          }
          .app-title{
            .w100;
            height: 30px;
            // background: url("../../assets/imgRick/app/about-ar-title.png") no-repeat center;
            background-size: contain;
            margin: 45px auto 30px;
            @media screen and (min-width: 769px){
              display: none;
            }
          }
        }
        &:nth-child(3){
          .title{
            width: 70%;
            height: 60px;
            // background: url("../../assets/imgRick/AR-js.png") no-repeat center;
            background-size: contain;
            color: #fff;
            font-size: 40px;
            .mAuto;
            .mt(140px);
            @media  screen and (max-width: 1200px){
              width: 50%;
              .mt(80px);
            }
            @media  screen and (max-width: 768px){
              display: none;
            }
          }
        }
        &:nth-child(4){
          .h100;
          background: url("../../assets/imgRick/about-li-bg04.jpg") no-repeat center;
          background-size: 100% 100%;
          /*.flex;
          align-items: center;
          justify-content: center;*/
          .pt(220px);
          @media  screen and (max-width: 1200px){
            width: 50%;
          }
          @media  screen and (max-width: 768px){
            width: 100%;
            .pt(50px);
            background: none;
          }
        }
        &:nth-child(5){
          @media  screen and (max-width: 768px){
            display: none;
          }
        }
      }
    }
  }
</style>
