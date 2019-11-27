<template>
  <div class="aboutUsSlideThree-wrap">
    <div class="main">
      <div class="title">社区</div>
      <div class="tit1">社区主体： KOJIMA コジマ 株式会社</div>
      <div class="tit2">公司成立于2015年，一直从事前沿科技的研发工作，办公室在日本最高大上的东京站旁边</div>
      <div class="list">
        <div class="info-tit">我们的使命是：打造一个虚拟与真实世界结合的AR智能世界！</div>
        <div class="text-p">我们的黑科技有：</div>
        <div class="textp" v-for="(item,index) in textpDatas" :key="index">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        textpDatas:[
          {
            text: '1、AR技术：虚拟与现实结合的拼图',
          },
          {
            text: '2、手势控制：智能识别用户手势，在现实中操作虚拟方块'
          },
          {
            text: '3、眼球控制：跟踪用户眼球，通过视觉控制方块和拼图角色'
          },
          {
            text: '4、3D扫描：商家或用户可以通过手机对物体进行扫描，形成3D虚拟蓝图'
          },
          {
            text: '5、人脸及情绪识别：拼图角色可以识别用户人脸和情绪，作出相应的回应'
          },
          {
            text: '6、智能交流：拼图角色可以拥有一定的人工智能，与用户之间有交互，比如见到主人就特别高兴，对陌生人就害怕，可以去捡主人丢的骨头，别人的不捡等等，高级的角色甚至可以进行语言交流'
          }
        ]
      }
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
  .aboutUsSlideThree-wrap{
    .vw;
    .vh;
    background: url("../../assets/imgRick/about-03-bg.jpg") no-repeat center;
    background-size: cover;
    .flex;
    align-items: center;
    justify-content: center;
    @media screen and(max-width: 768px){
      .w100;
      height: auto;
      background: url("../../assets/imgRick/app/about-bg3.png") no-repeat center;
      background-size: cover;
      padding-bottom: 60px;
    }
    .main{
      width: 1024px;
      color: @default;
      .tl;
      @media screen and(max-width: 1200px){
        width: 80%;
      }
      @media screen and(max-width: 768px){
        .w100;
        padding: 0 20px;
      }
      .title{
        width: 126px;
        height: 59px;
        // background: url("../../assets/imgRick/she-qu.png") no-repeat center;
        background-size: contain;
        font-size: 50px;
        @media screen and (max-width: 1200px){
          width: 100px;
        }
        @media screen and(max-width: 768px){
          height: 30px;
          text-align: center;
          font-size: 30px;
          // background: url("../../assets/imgRick/app/about-sheQu.png") no-repeat center;
          background-size: contain;
          margin: 122px auto 90px;
        }
      }
      .tit1{
        .f28;
        padding: 40px 0 15px;
        @media screen and (max-width: 1200px){
          padding: 30px 0 10px;
        }
        @media screen and (max-width: 768px){
          padding: 0;
          margin: 20px 0 10px;
          .f16;
          font-weight: bold;
        }
      }
      .tit2{
        .f20;
        .pb(40px);
        @media screen and (max-width: 1200px){
          .pb(30px);
        }
        @media screen and (max-width: 768px){
          .f14;
          line-height: 1.5;
          font-weight: bold;
        }
      }
      .list{
        .w100;
        .f16;
        div{
          line-height: 40px;
          @media screen and (max-width: 1200px){
            line-height: 30px;
          }
          @media screen and (max-width: 768px){
            line-height: 1.5;
            .f14;
          }
        }
        .text-p{
          @media screen and (max-width: 768px){
            padding: 20px 0;
          }
        }
        .textp{
          @media screen and (max-width: 768px){
            padding-bottom: 18px;
          }
        }
      }
    }
  }
</style>
