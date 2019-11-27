<template>
  <div class="economicSystem-three-wrap">
    <div class="content">
      <div class="info-box">
        <div class="title"><em class="em"></em>什么是黄金矿机？</div>
        <div class="list">
          <div class="li"><div class="icon"></div><div class="text">使用铁锹只能在黄金矿区才能采集黄金，但如果组装黄金矿机，可在任何地方采集黄金</div></div>
          <div class="li"><div class="icon"></div><div class="text">黄金矿机有很多种：石油动力、电动力、铀动力等，前期最实用的是石油动力</div></div>
          <div class="li"><div class="icon"></div><div class="text">石油动力的黄金矿机的组装需要用到的方块包括：黄金方块、钢铁方块、钻石方块、木方块等等；使用矿机开采时，还需要消耗石油方块</div></div>
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
  .economicSystem-three-wrap{
    .vw;
    .vh;
    @media screen and (max-width: 768px){
      .w100;
      .h100;
      padding: 0 20px;
    }
    .content{
      width: 1024px;
      .ml(10%);
      @media screen and (max-width: 1200px){
        .ml(0)
      }
      .vh;
      background-color: rgba(13, 26, 41, .6);
      .flex;
      align-items: center;
      justify-content: flex-start;
      @media screen and (max-width: 768px){
        .w100;
        height: auto;
        align-items: flex-start;
      }
      .info-box{
        .ml(60px);
        @media screen and (max-width: 768px){
          .ml(0);
          .pt(150px);
          .w100;
        }
        .title{
          .f60;
          color: @default;
          .flex;
          align-items: center;
          justify-content: flex-start;
          .mb(120px);
          .media12;
          @media screen and (max-width: 1200px){
            .mb(60px)
          }
          @media screen and (max-width: 768px){
            .f20;
            font-weight: bold;
            .mb(40px);
          }
          .em{
            .inb;
            width: 41px;
            height: 59px;
            background: url("../../../src/assets/imgRick/02.png") no-repeat center;
            background-size: 100% 100%;
            .mr(30px);
            .mt(2px);
            @media screen and (max-width: 768px){
              width: 18px;
              height: 20px;
              background: url("../../../src/assets/imgRick/app/ec-no-02.png") no-repeat center;
              background-size: 100% 100%;
              .mt(0);
              .mr(10px);
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
            .mb(60px);
            @media screen and (max-width: 1200px){
              .mb(40px)
            }
            @media screen and (max-width: 768px){
              .f14;
              line-height: 1;
              align-items: flex-start;
              .mb(20px);
              &:nth-child(3){
                .mb(0);
              }
            }
            .icon{
              width: 17px;
              height: 17px;
              background: url("../../assets/imgRick/li-icon.png") no-repeat center;
              background-size: contain;
              .mr(10px);
              .mt(8px);
              @media screen and (max-width: 768px){
                .mt(8px);
                .mr(8px);
              }
            }
            .text{
              width: 750px;
              line-height: 2;
              @media screen and (max-width: 768px){
                flex: 1;
              }
            }
          }
        }
      }
    }
  }
</style>
