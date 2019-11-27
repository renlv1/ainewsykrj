<template>
  <div class="part-one">
    <div class="common">
      <div class="earth-pic"></div>
      <div class="part-one-title-pic">拼世界，世界是拼出来的</div>
      <p>这是一款由AR方块和现实世界结合而成，拥有极高自由度，由用户自由发挥、共同打造一个虚拟与现实结合的增强世界！</p>
      <div class="btn" @click="$router.push('/NewWorld')">查看更多</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .part-one
    min-height 100vh
    background-repeat no-repeat
    overflow hidden
    @media (min-width: 1024px) {
      background-size cover
      background-image url("./images/part-one-bg.jpg")
    }
    @media (max-width: 1024px) {
      width 100%
      height 100%
      background-image url("./mobile-images/1-1-bg.png")
      background-size cover
    }
    @media(max-width: 1024px) and (max-width: 1800px) {
      background-position center
    }
    .earth-pic
      width 208px
      height 210px
      background-repeat no-repeat
      background-size contain
      @media (min-width: 1024px) {
        margin 150px auto 0
        background-image url("./images/earth.png")
      }
      @media (max-width: 1024px) {
        margin 140px auto 0
        width 134px
        height 140px
        background-image url("./mobile-images/earth.png")
      }
    .part-one-title-pic
      text-align center
      color #fff
      font-family "微软雅黑 Light"
      @media (min-width: 1024px) {
        margin-top 30px
        font-size 80px
      }
      @media (max-width: 1024px) {
        margin-top 30px
        font-size 20px
        font-weight bolder
      }
    p
      margin-top 60px
      font-size 20px
      color #fff
      text-align center
      @media (min-width: 1024px) {
        font-size 20px
      }
      @media (max-width: 1024px) {
        margin 30px auto 0
        width 90%
        font-size 14px
        line-height 1.5
      }
    .btn
      position absolute
      left 50%
      transform translateX(-50%)
      margin-top 60px
      text-align center
      background-repeat no-repeat
      color #fff
      font-weight bolder
      cursor pointer
      z-index 999
      background-size contain
      background-image url("./images/button.png")
      @media (min-width: 1024px) {
        width 170px
        height 56px
        line-height 56px
        font-size 20px
        letter-spacing 2px
      }
      @media (max-width: 1024px) {
        width 100px
        height 38px
        line-height 34px
        font-size 14px
        z-index auto
      }
</style>
