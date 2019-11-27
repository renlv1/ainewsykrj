<template>
  <div class="tradingSlideThree-wrap">
    <div class="mian">
      <div class="text-box">
        <div class="info-box">
          <div class="title">方块市场</div>
          <p class="text-p">（ 一 ）方块市场交易采用OTC交易模式。</p>
          <p class="text-p">（ 二 ）玩家可以将自己的拍卖物品上架至系统的拍卖行托管，进行点对点直接交易。</p>
          <p class="text-p">（ 三 ）玩家指定上架物品的价格，单个物品上架时间最长为30天，当超过该时间仍未售出的物品将自动返回玩家存储器中，如果此时玩家的存储器已满，则将物品存入缓存区。</p>
          <p class="text-p">（ 四 ）买家在想要购买的物品处直接点击购买，确认后即可扣除对应资金并获取物品。</p>
          <p class="text-p">（ 五 ） 交易资金将直接进入卖方账户。</p>
          <p class="text-p">（ 六 ） 购买获得的物品也将直接进入买方的存储器，如果此时玩家的存储器已满，则将该物品存入缓存区。</p>
          <p class="text-p">（ 七 ） 整个交易过程均采用稳定价值的游戏数字货币SIE作为交易货币。</p>
          <p class="text-p">（ 八 ） 玩家在内置的OTC市场中可以实现SIE与RMB、美元的相互转化。</p>
          <p class="text-p">（ 九 ） OTC市场中暂时不支持USDT、BTC、ETH等数字币与SIE的货币对。</p>
          <p class="text-p">（ 十 ） OTC交易都需要在线游戏内注册账号并上传资料认证。</p>
        </div>
      </div>
      <div class="lease">
        <div class="info-box">
          <div class="icon-img"></div>
          <div class="tit">方块市场</div>
          <div class="search-lease">
            <div class="icon"></div>
            <div class="text">浏览方块市场</div>
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
  .tradingSlideThree-wrap{
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
        .w100;
      }
      @media screen and (max-width: 768px){
        display: block;
        border: none;
        padding: 20px 20px 0;
      }
      .text-box{
        flex: 1;
        height: 100%;
        .flex;
        align-items: center;
        justify-content: space-between;
        .pl(30px);
        .pr(30px);
        position: relative;
        @media screen and (max-width: 768px){
          display: block;
          padding: 0;
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
          @media screen and (max-width: 768px){
            display: none;
          }
        }
        .info-box{
          .title{
            color: #fff;
            font-size: 40px;
            // background: url("../../assets/imgRick/fk-title.png") no-repeat center;
            background-size: contain;
           .mb(30px);
            @media screen and (max-width: 1200px){
              text-align: center;
              font-size: 30px;
              font-weight: bolder;
              width: 180px;
              .mb(20px);
            }
            @media screen and (max-width: 768px){
              width: 160px;
              height: 30px;
              // background: url("../../assets/imgRick/app/tran-square-tit.png") no-repeat center;
              background-size: contain;
              margin: 0 auto;
              .mb(25px);
            }
          }
          .text-p{
            .f18;
            color: @default;
            .pb(20px);
            line-height: 1.5;
            @media screen and (max-width: 1200px){
              .pb(6px);
              .f16;
            }
            @media screen and (max-width: 768px){
              .f14;
              .pb(20px);
            }
          }
        }
      }
      .lease{
        width: 33.3%;
        height: 100%;
        background: url("../../assets/imgRick/fk-bg.jpg") no-repeat center;
        background-size: 100% 100%;
        .flex;
        align-items: center;
        justify-content: center;
        position: relative;
        @media screen and(max-width: 1200px){
          width: 38%;
        }
        @media screen and (max-width: 768px){
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
          @media screen and (max-width: 768px){
            display: none;
          }
        }
        .info-box{
          .icon-img{
            width: 103px;
            height: 110px;
            margin: auto;
            background: url("../../assets/imgRick/fk-icon.png") no-repeat center;
            background-size: 100% 100%;
          }
          .tit{
            color: @default;
            .tc;
            .f28;
            padding: 30px 0 60px;
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
