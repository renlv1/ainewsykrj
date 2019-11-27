<template>
  <div class="container">
    <swiper class="swiper-container pc" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide bg-class">
        <part-one />
      </swiper-slide>
      <swiper-slide class="swiper-slide bg-class">
        <part-two />
      </swiper-slide>
      <swiper-slide class="swiper-slide part-three bg-class">
        <part-three />
      </swiper-slide>
      <swiper-slide class="swiper-slide part-four bg-class">
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
      </swiper-slide>
      <!--<div class="container-line">-->
        <!--<div class="child-line"></div>-->
        <!--<div class="child-line"></div>-->
        <!--<div class="child-line"></div>-->
        <!--<div class="child-line"></div>-->
        <!--<div class="child-line"></div>-->
      <!--</div>-->
    </swiper>
    <div class="mobile">
      <part-one />
      <part-two />
      <part-three />
      <part-four />
    </div>
    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import vline from '../../views/lineComponents/lineComponents.vue'
import partOne from './part-one'
import partTwo from './part-two'
import partThree from './part-three'
import partFour from './part-four'

export default {
  components: {vline, swiper, swiperSlide, partOne, partTwo, partThree, partFour},
  data() {
    return {
      swiperOption: {
        activeitem: 0,
        notNextTick: true,
        direction: 'vertical',
        speed: 500,
        setWrapperSize: true,
        autoHeight: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        height: window.innerHeight, // 高度占满整个设备高度
        onTransitionStart(swiper) {
          this.activeitem = swiper.activeIndex
        }
      },
      num: 4,
      flag: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (Number(this.$route.query.flag) === 1 && this.$route.path.includes('/NewWorld')) {
        this.swiper.slideTo(1, 0, false)
        this.swiperOption.activeitem = 1
      } else {
        this.swiper.slideTo(0, 1000, false)
      }
    })
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    sealed(index) {
      this.swiper.slideTo(index, 1000, false)
      this.swiperOption.activeitem = index
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    height 100vh
    overflow hidden
    .part-three
      background-color #0d1b2a
      color #fff
      .content-wrapper
        margin 0 auto
        width 100%
        height 100%
        @media (min-width: 1024px) and (max-width: 1400px) {
          align-items center
        }
        @media (min-width: 1024px) {
          display flex
          flex-direction row
          justify-content center
        }
        @media (max-width: 1024px) {
          display flex
          flex-direction column
        }
        .left-content
          margin-top 200px
          @media (min-width: 1024px) and (max-width: 1400px) {
          }
          @media (min-width: 1024px) {
            margin-top 80px
            margin-left 40px
            width 40%
          }
          @media (max-width: 1024px) {
            margin-top 70px
            width 100%
          }
          .part-three-title-pic
            background-image url("./images/2-3-title.png")
            background-repeat no-repeat
            @media (min-width: 1024px) {
              width 259px
              height 60px
            }
            @media (max-width: 1024px) {
              width 85%
              height 40px
              background-size contain
              background-position center center
              margin 50px auto
            }
          h5
            @media (min-width: 1024px) and (max-width: 1400px) {
              margin 60px 0 30px
            }
            @media (min-width: 1024px) {
              margin 90px 0 60px
              font-size 28px
              font-weight bolder
            }
            @media (max-width: 1024px) {
              text-align center
              margin 10px 0 50px
              font-size 18px
            }
          p
            @media (min-width: 1024px) {
              width 90%
              font-size 18px
              line-height 2
              margin-top 30px
            }
            @media (max-width: 1024px) {
              width 90%
              margin 0 auto
              font-size 14px
              line-height 2
              margin-bottom 10px
            }
          .btn-wrapper
            margin-left -40px
            @media (min-width: 1024px) and (max-width: 1400px) {
              margin-top 80px
            }
            @media (min-width: 1024px) {
              margin-top 100px
              width 100%
            }
            @media (max-width: 1024px) {
              width 100%
              margin 0 auto
              clear both
              overflow hidden
            }
            .btn-box
              width 50%
              float left
              .btn
                text-align center
                border 1px solid rgba(255, 255, 255, .1)
                @media (min-width: 1024px) and (max-width: 1400px) {
                  width 200px
                  margin-left 40px
                }
                @media (min-width: 1024px) {
                  margin-left 40px
                  height 60px
                  line-height 60px
                  width 240px
                }
                @media (max-width: 1024px) {
                  margin 10px auto
                  height 40px
                  line-height 40px
                  width 120px
                }
                span
                  @media (max-width: 1024px) {
                    font-size 14px
                  }
                img
                  height 17px
                  width 17px
                  margin-right 10px
                  @media (max-width: 1024px) {
                    height 13px
                    width 13px
                    margin-right 5px
                  }
        .right-content
          margin-left -40px
          text-align center
          width 20%
          background-image url("./images/2-3-right-bg.jpg")
          background-repeat no-repeat
          background-size cover
          height 100%
          @media (max-width: 1400px) {
            display flex
            align-items center
            justify-content center
          }
          @media (max-width: 1400px) {
            display none
          }
          .img
            margin-top 200px
            @media (min-width: 1024px) and (max-width: 1400px) {
              margin-top 0
            }
            @media (min-width: 1400px) {
              width: 183px
              height: 620px
            }
    .part-four
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
            font-size 50px
          }
          @media (min-width: 1024px) {
            margin-top 200px
            font-size 60px
            margin 220px 0 100px
            width 388px
            height 60px
          }
          @media (max-width: 1024px) {
            margin 100px auto 0
            width 80%
            height 40px
            background-size contain
            background-position center center
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
          color #fff
          @media (min-width: 1024px) {
            font-size 16px
            line-height 4
          }
          @media (max-width: 1024px) {
            font-size 14px
            margin 0 auto
            width 90%
            text-align left
            line-height 1.7
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
          margin-top 40px
          display flex
          justify-content center
          align-items center
          @media (min-width: 1024px) {
            width 50%
          }
          @media (max-width: 1024px) {
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
              height 124px
              background-size contain
              background-position center center
            }
    .container-line
      position absolute
      top 0
      bottom 0
      z-index 1
      width 100%
      height 400%
      display flex
      @media (max-width: 1024px) {
        display none
      }
      .child-line
        flex 1
        border-left 1px solid #fff
        opacity .1
</style>
