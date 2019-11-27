<template>
  <div class="part-one">
    <!--<p class="subtitle">拼世界<span style="color: #00e7ff">，</span></p>-->
    <div class="part-one-title-pic">
      拼世界，增强世界
    </div>
    <p class="description1">
      《拼世界》是一款由AR方块和现实世界结合而成的APP。《拼世界》拥有极高的自由度，用户可自由发挥、共同打造一个虚拟与现实结合的增强世界！在这个世界里，商家、玩家会相互关联、转换，同时产出一套属于用户自身的经济体系，让玩家在游戏中生活、在生活中游戏，体验便捷与乐趣的同时，还能创造经济价值，获得现实收益。</p>
    <p class="description2">AR方块由区块链管理，数量透明。除了产生机制，还有消耗机制，通过算法的设置，使AR方块的产生与消耗趋于平衡，保证游戏生态平衡，使玩家能获得更多的乐趣。</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .part-one
    color #fff
    background-size cover
    @media (min-width: 1024px) {
      width 100%
      height 100%
      background-image url("./images/2-1.jpg")
    }
    @media (max-width: 1024px) {
      width 100%
      height 100%
      background-image url("./mobile-images/2-1-bg.png")
    }
    .subtitle
      text-align center
      @media (min-width: 1024px) {
        padding-top 140px
        font-size 60px
      }
      @media (max-width: 1024px) {
        margin-top 0
        padding-top 115px
      }
    .part-one-title-pic
      text-align center
      color #fff
      font-family "微软雅黑 Light"
      @media (min-width: 1024px) {
        padding-top 180px
        font-size 80px
      }
      @media (max-width: 1024px) {
        padding-top 105px
        margin-bottom 50px
        font-size 30px
        font-weight bolder
      }
    p
      text-align center
      @media (min-width: 1024px) {
        font-size 18px
      }
      @media (max-width: 1024px) {
        margin-top 120pt
      }
    .description1
      vertical-align top
      @media (min-width: 1024px) {
        width 60%
        margin 80px auto
        line-height 48px
      }
      @media (max-width: 1024px) {
        width 85%
        margin 0 auto
        font-size 14px
        line-height 2
      }
    .description2
      color #00e7ff
      @media (max-width: 1024px) {
        margin 0 auto
        width 85%
        margin-top 30px
        font-size 14px
        line-height 2
      }
</style>
