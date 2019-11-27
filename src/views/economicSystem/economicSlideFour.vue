<template>
  <div class="economicSystem-four-wrap">
    <div class="content">
      <div class="info-box">
        <div class="title"><em class="em"></em>矿机有什么分类？</div>
        <div class="list">
          <div class="li"><div class="icon"></div><div class="text">小矿机需要用到100个黄金方块，每月基础产出10个黄金方块</div></div>
          <div class="li"><div class="icon"></div><div class="text">中矿机需要用到1000个黄金方块，每月基础产出130个黄金方块</div></div>
          <div class="li"><div class="icon"></div><div class="text">大矿机需要用到10000个黄金方块；每月基础产出1600个黄金方块</div></div>
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
  .economicSystem-four-wrap{
    .vw;
    .vh;
    @media screen and(max-width: 768px){
      .w100;
      .h100;
      padding: 0 20px;
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
        .ml(0)
      }
      @media screen and(max-width: 768px){
        .w100;
        height: auto;
        align-items: flex-start;
        padding-top: 150px;
        .ml(0)
      }
      .info-box{
        .ml(60px);
        @media screen and(max-width: 768px){
          .ml(0);
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
          @media screen and(max-width: 768px){
            .mb(40px);
            .f20;
            font-weight: bold;
          }
          .em{
            .inb;
            width: 41px;
            height: 60px;
            background: url("../../../src/assets/imgRick/03.png") no-repeat center;
            background-size: 100% 100%;
            .mr(30px);
            .mt(2px);
            @media screen and(max-width: 768px){
              width: 20px;
              height: 20px;
              background: url("../../../src/assets/imgRick/app/ec-no-03.png") no-repeat center;
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
            align-items: center;
            justify-content: flex-start;
            .mb(60px);
            @media screen and (max-width: 1200px){
              .mb(40px)
            }
            @media screen and (max-width: 768px){
              .mb(20px);
              .f14;
              align-items: flex-start;
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
              width: 800px;
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
