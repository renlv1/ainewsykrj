<template>
  <div class="tradingSlideTwo-wrap">
    <div class="mian">
      <div class="text-box">
        <div class="info-box">
          <div class="title">生产器租赁市场</div>
          <div class="tit">生产器永远属于官方，租赁价格由市场决定。</div>
          <p class="text-p">（ 一 ）玩家可以租用多个生产器来增加采集效率。</p>
          <p class="text-p">（ 二 ）拼世界最多可开通10万套生产器，只要还有空闲生产器，用户只要出100美元即可租赁3年。</p>
          <p class="text-p">（ 三 ）每个人都可以通过竞价支付成为一套生产器一段时间的控制人，类似于租赁的概念。这便形成了生成器租赁市场。</p>
          <p class="text-p">（ 四 ）如果所有生产器都已经被占用，那么用户需要出价高于最后一名100美元，就可以获得该生产器的控制权，之前的控制人未到期部分的租金将退回给该用户，同时还将获得溢价部分的20%，保证了租赁市场的公平性。</p>
        </div>
      </div>
      <div class="lease">
        <div class="info-box">
          <div class="icon-img"></div>
          <div class="tit">租赁市场</div>
          <div class="search-lease">
            <div class="icon"></div>
            <div class="text">浏览租赁市场</div>
          </div>
        </div>
      </div>
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
  .tradingSlideTwo-wrap{
    .vw;
    .vh;
    @media screen and (max-width: 768px){
      .h100;
    }
    .mian{
      width: 60%;
      .h100;
      margin: auto;
      .flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid rgba(255,255,255, .1);
      @media screen and (max-width: 1200px){
        width: 100%;
      }
      @media screen and (max-width: 768px){
        padding: 0 20px;
        display: block;
        border: none;
      }
      .text-box{
        flex: 1;
        height: 100%;
        .flex;
        align-items: center;
        justify-content: space-between;
        .pl(34px);
        .pr(50px);
        position: relative;
        @media screen and (max-width: 768px){
          .w100;
          .pl(0);
          .pr(0);
          // .pt(100px);
          display: block;
        }
        &:before{
          content: '';
          display: block;
          width: 1px;
          height: 100%;
          background-color: rgba(255,255,255,.1);
          position: absolute;
          right: 50%;
          top: 0;
          bottom: 0;
          @media screen and (max-width: 768px){
            display: none;
          }
        }
        .info-box{
          .title{
            color: #fff;
            font-size: 60px;
            @media screen and (max-width: 1200px){
            }
            @media screen and (max-width: 768px){
              .w100;
              /*height: 30px;*/
              /*background: url("../../assets/imgRick/app/tran-leasing-tit.png") no-repeat center;*/
              /*background-size: contain;*/
              font-size: 30px;
              text-align: center;
              font-weight: bolder;
            }
          }
          .tit{
            .f20;
            color: @7ff;
            padding: 90px 0 60px;
            @media screen and (max-width: 1200px){
              padding: 40px 0 20px;
            }
            @media screen and (max-width: 768px){
              padding: 25px 0 15px;
              .f14;
            }
          }
          .text-p{
            .f18;
            color: @default;
            .pb(30px);
            .lh;
            @media screen and (max-width: 1200px){
              .pb(20px);
              .f16;
            }
            @media screen and (max-width: 768px){
              .f14;
              .pb(15px);
            }
          }
        }
      }
      .lease{
        width: 33.3%;
        height: 100%;
        background: url("../../assets/imgRick/lease-bg.jpg") no-repeat center;
        background-size: 100% 100%;
        .flex;
        align-items: center;
        justify-content: center;
        position: relative;
        @media screen and(max-width: 1200px){
          width: 38%;
        }
        @media screen and(max-width: 768px){
          .w100;
          background: none;
          .pt(60px);
        }
        &:after{
          content: '';
          display: block;
          width: 1px;
          height: 100%;
          background-color: rgba(255,255,255,.1);
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          @media screen and(max-width: 768px){
            display: none;
          }
        }
        .info-box{
          .icon-img{
            width: 115px;
            height: 100px;
            margin: auto;
            background: url("../../assets/imgRick/lease-img.png") no-repeat center;
            background-size: 100% 100%;
          }
          .tit{
            color: @default;
            .tc;
            .f28;
            padding: 30px 0 60px;
            @media screen and (max-width: 768px){
              .f20;
            }
          }
          .search-lease{
            width: 240px;
            height: 62px;
            border: 1px  solid rgba(255,255,255, .1);
            .flex;
            align-items: center;
            justify-content: center;
            color: @7ff;
            .f18;
            display: none;
            .icon{
              width: 17px;
              height: 17px;
              background: url("../../assets/imgRick/search.png") no-repeat center;
              background-size: cover;
              .mr(10px)
            }
          }
        }
      }
    }
  }
</style>
