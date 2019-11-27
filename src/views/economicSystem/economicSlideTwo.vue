<template>
  <div class="economicSystem-two-wrap">
    <div class="content">
      <div class="info-box">
        <div class="title"><em class="em"></em>我们如何发行黄金方块？</div>
        <div class="list">
          <div class="li"><div class="icon"></div><div class="text">参考全球黄金总量，系统将通过区块链管理增强世界的黄金总量：1.7亿公斤，即1.7亿个黄金方块</div></div>
          <div class="li"><div class="icon"></div><div class="text">系统将在初期发行300万个黄金方块。（归属系统所有）</div></div>
          <div class="li"><div class="icon"></div><div class="text">剩余1.67亿个黄金方块将通过黄金矿机采集、黄金带动石油、黄金矿机超频等方法逐步发行到增强世界中</div></div>
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
  .economicSystem-two-wrap{
    .vw;
    .vh;
    @media screen and (max-width: 768px){
      .w100;
      .h100;
      padding: 0 20px;
    }
    .content{
      width: 1024px;
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
          }
          .em{
            .inb;
            width: 27px;
            height: 59px;
            background: url("../../../src/assets/imgRick/01.png") no-repeat center;
            background-size: 100% 100%;
            .mr(30px);
            .mt(2px);
            @media screen and (max-width: 768px){
              width: 18px;
              height: 20px;
              background: url("../../../src/assets/imgRick/app/ec-no-01.png") no-repeat center;
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
            align-items: center;
            justify-content: flex-start;
            .mb(60px);
            @media screen and (max-width: 1200px){
              .mb(40px);
            }
            @media screen and (max-width: 768px){
              .f14;
              .lh;
              align-items: flex-start;
              &:nth-child(3){
                .mb(0);
              }
            }
            .icon{
              width: 17px;
              height: 17px;
              background: url("../../assets/imgRick/li-icon.png") no-repeat center;
              background-size: contain;
              vertical-align: middle;
              .mr(10px);
              @media screen and (max-width: 768px){
                .mt(4px);
                .mr(8px);
              }
            }
            .text{
              flex: 1;
            }
          }
        }
      }
    }
  }
</style>
