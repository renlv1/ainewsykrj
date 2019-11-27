<template>
  <div class="part-four">
    <div class="content-wrapper">
      <div class="part-four-title-pic">方块分类说明</div>
      <h5>了解规则，玩转拼世界</h5>
      <p>（一）基础方块由生产器采集生成，分为红、黄、蓝、白、黑五种颜色。</p>

      <p>（二）AR功能方块需要用户到现实世界的特定地点去采集。</p>

      <p>对应真实世界的地貌和环境，有：土方块，石方块，木方块，水方块，铁方块，煤方块，石油方块，食物方块（餐饮店或稻田），布方块（服装店），灵魂方块（市民广场）等。</p>
      <p> 与经济政治文化相关的方块，有：银行方块、俄罗斯方块、天安门方块、梵蒂冈方块、麦当劳方块、爱马仕方块、威尼斯方块、阿拉斯加方块等。</p>
    </div>
    <div class="pic-wrapper">
      <div class="img-box">
        <div class="img1"></div>
      </div>
      <div class="img-box">
        <div class="img2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .part-four
    height 100%
    width 100%
    background-color #0d1b2a
    color #fff
    z-index auto
    .content-wrapper
      @media (min-width: 1024px){
        margin-left 20%
        padding-left 40px
      }
      .part-four-title-pic
        @media (min-width: 1024px) and (max-width: 1400px) {
          font-size 30px
          margin 120px 0 60px
        }
        @media (min-width: 1024px) {
          margin-top 200px
          margin-left 20%
          padding-left 40px
          margin 220px 0 100px
        }
        @media (max-width: 1024px) {
          text-align center
          font-size 30px
          font-weight bolder
          padding-top 60px
          margin 0 auto 30px
        }
      h5
        @media (min-width: 1024px) {
          display none
        }
        @media (max-width: 1024px) {
          text-align center
          margin 20px 0 50px
          font-size 18px
        }
      p
        font-size 16px
        color #fff
        @media (min-width: 1024px) {
          line-height 4
        }
        @media (max-width: 1024px) {
          font-size 14px
          margin 0 auto 20px
          width 90%
          text-align left
          line-height 1.5
        }
    .pic-wrapper
      display flex
      flex-direction row
      @media (min-width: 1024px) {
        width 40%
        margin-left 20%
      }
      @media (max-width: 1024px) {
        width 100%
        justify-content center
      }
      .img-box
        display flex
        justify-content center
        align-items center
        @media (min-width: 1024px) {
          margin-top 80px
          width 50%
        }
        @media (max-width: 1024px) {
          margin-top 10px
          width 100%
        }
        .img1
          width 352px
          height 70px
          margin-left 12%
          background-image url("./images/2-4-1.png")
          background-repeat no-repeat
          background-size contain
          @media (max-width: 1024px) {
            display none
          }
        .img2
          background-image url("./images/2-4-2.png")
          background-repeat no-repeat
          @media (min-width: 1024px) {
            width 280px
            height 132px
            background-size contain
          }
          @media (max-width: 1024px) {
            width 400px
            height 65px
            background-size contain
            background-position center center
            margin-bottom 20px
          }
</style>
