<template>
  <div class="economicSystem-five-wrap">
    <div class="content">
      <div class="info-box">
        <div class="title"><em class="em"></em>矿机有什么使用规则？</div>
        <div class="list">
          <div class="li"><div class="icon"></div><div class="text">矿机可以随时添加金块和其他相关材料，增加矿机产能，延长矿机寿命。（矿机最多可添加到10万黄金方块）</div></div>
          <div class="li"><div class="icon"></div><div class="text">每产出一个黄金方块，矿机需要消耗100个石油方块，用户也可以设计拼装更好的矿机，使消耗量更小。（每个石油方块代表一桶油，全球已探明石油储量为：1.69万亿桶）</div></div>
          <div class="li"><div class="icon"></div><div class="text">产出量达到矿机组装所使用的黄金方块数量的双倍后，矿机即报废。用户需要重新组装矿机，或者添加方块延长寿命</div></div>
          <div class="li"><div class="icon"></div><div class="text">铁锹可以采集石油方块。石油资源丰富，随处可见，但数量有限，用户想要采集并存储，需要有地方放置保存石油，比如拼装油罐；或使用更高级的石油采集器，甚至到现实中的油田去拼装油井，才可以大量采集</div></div>
          <div class="li"><div class="icon"></div><div class="text">用户邀请朋友加入可以激活矿机超频产出，每个邀请区域每日的产量都可以对主用户形成相应的超频：主用户可以获得第二大区域当日产量8%的超频；主用户可以获得第三大区域当日产量10%的超频；主用户可以获得第四大区域当日产量12%的超频；主用户可以获得第五大区域当日产量16%的超频；其他区域的产量将不会产生超频</div></div>
          <div class="li"><div class="icon2"></div><div class="explain">（ps：超频可以叠加使用，诞生最大超频不会超出主用户基础产出的30倍，如果当日主用户没有产出黄金方块，也不会有超频产出。）</div></div>
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
  .economicSystem-five-wrap{
    .vw;
    .vh;
    .flex;
    justify-content: flex-end;
    @media screen and (max-width: 768px){
      .w100;
      .h100;
    }
    .content{
      width: 1024px;
      .ml(20%);
      .vh;
      background-color: rgba(13, 26, 41, .6);
      .flex;
      align-items: center;
      justify-content: flex-start;
      @media screen and (max-width: 1200px){
        .ml(0%);
      }
      @media screen and (max-width: 1024px){
        width: 100%;
      }
      @media screen and (max-width: 768px){
        height: auto;
        justify-content: center;
        padding: 110px 20px 0;
      }
      .info-box{
        .w100;
        .ml(60px);
        @media screen and (max-width: 1024px){
          .pr(50px)
        }
        @media screen and (max-width: 768px){
          .ml(0);
          .pr(0)
        }
        .title{
          .f60;
          color: @default;
          .flex;
          align-items: center;
          justify-content: flex-start;
          .mb(80px);
          .media12;
          @media screen and (max-width: 1200px){
            .mb(40px);
          }
          @media screen and (max-width: 768px){
            .f20;
            font-weight: bold;
          }
          .em{
            .inb;
            width: 41px;
            height: 59px;
            background: url("../../../src/assets/imgRick/04.png") no-repeat center;
            background-size: 100% 100%;
            .mr(30px);
            .mt(2px);
            @media screen and (max-width: 768px){
              width: 20px;
              height: 20px;
              font-weight: bold;
              background: url("../../../src/assets/imgRick/app/ec-no-04.png") no-repeat center;
              background-size: 100% 100%;
              .mr(10px);
              .mt(0);
            }
          }
        }
        .list{
          .li{
            .f16;
            color: @default;
            .flex;
            align-items: flex-start;
            justify-content: flex-start;
            .mb(40px);
            @media screen and (max-width: 1200px){
              width: 84%;
              .mb(20px);
            }
            @media screen and (max-width: 768px){
              width: 100%;
              .mb(20px);
            }
            .icon{
              width: 17px;
              height: 17px;
              background: url("../../assets/imgRick/li-icon.png") no-repeat center;
              background-size: contain;
              .mr(10px);
              .mt(8px);
              @media screen and (max-width: 768px){
                .mr(4px);
              }
            }
            .icon2{
              width: 20px;
              .mr(2px);
              @media screen and (max-width: 768px){
                .mr(10px);
              }
            }
            .text{
              width: 800px;
              line-height: 2;
              @media screen and (max-width: 768px){
                flex: 1;
                .f14;
              }
            }
            .explain{
              color: #ff5776;
              .f16;
              line-height: 2;
              width: 800px;
              @media screen and (max-width: 768px){
                .f14;
              }
            }
          }
        }
      }
    }
  }
</style>
