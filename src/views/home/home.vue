<template>
  <div class="container">
    <swiper class="swiper-container pc" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide">
        <slot>
          <part-one />
        </slot>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <slot>
          <part-two />
        </slot>
      </swiper-slide>
      <swiper-slide class="swiper-slide part-three">
        <slot>
          <part-three />
        </slot>
      </swiper-slide>
    </swiper>
    <div class="mobile">
      <part-one />
      <part-two />
      <part-three />
    </div>
    <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
    <div class="pc loading" ref="loading">
      <vue-loading type="bars" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
      <count-to :startVal='start' :endVal='end' :duration='2000'></count-to>
      <span>%</span>
    </div>
    <div class="container-block pc on" ref="block">
      <div class="wr on">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import countTo from 'vue-count-to'
import vline from '../../views/lineComponents/lineComponents.vue'
import partOne from './part-one'
import partTwo from './part-two'
import partThree from './part-three'

export default {
  components: {vline, swiper, swiperSlide, partOne, partTwo, partThree, countTo},
  data() {
    return {
      isShow: true,
      start: 0,
      end: 100,
      swiperOption: {
        effect: 'fade',
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
          document.querySelector('.container-block').classList.add('on')
          document.querySelector('.wr').classList.add('on')
          setTimeout(() => {
            document.querySelector('.wr').classList.remove('on')
          }, 1500)

          setTimeout(() => {
            document.querySelector('.container-block').classList.remove('on')
          }, 3000)
        }
      },
      num: 3
    }
  },
  mounted() {
    let oDiv = this.$refs.loading
    setTimeout(function () {
      oDiv.style.opacity = 0
    }, 2000);
    this.$nextTick(() => {
      if (Number(this.$route.query.flag) === 1 && this.$route.path.includes('/home')) {
        this.swiper.slideTo(3, 0, this.swiperOption.onTransitionStart)
        this.swiperOption.activeitem = 1
      } else {
        setTimeout(() => {
          document.querySelector('.wr').classList.remove('on')
        }, 1500)

        setTimeout(() => {
          document.querySelector('.container-block').classList.remove('on')
        }, 3000)
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
      this.swiper.slideTo(index, 1000, this.swiperOption.onTransitionStart)
      this.swiperOption.activeitem = index
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    position relative
    .swiper-container
      z-index 3
      .part-three
        background-color #0d1b2a
        z-index auto
        .part-three-title-pic
          background-image url("./images/part-three-title.png")
          margin 180px auto 60px
          background-size contain
          background-repeat no-repeat
          @media (min-width: 1200px) {
            width 326px
            height 60px
          }
          @media (max-width: 1200px) {
            margin 90px auto 10px
            width 163px
            height 30px
          }
        .list-container
          list-style none
          display flex
          align-items center
          flex-wrap wrap
          @media (min-width: 1200px) {
            justify-content space-between
            margin 100px auto
            flex-direction row
            width 60%
          }
          @media (max-width: 1200px) {
            justify-content center
            flex-direction column
            width 100%
          }
          .item
            display flex
            flex-wrap wrap
            flex-direction column
            align-items center
            justify-content center
            margin-bottom 60px
            color #fff
            @media (min-width: 1200px) {
              width 33%
            }
            @media (max-width: 1200px) {
              width 100%
            }
            h5
              @media (min-width: 1200px) {
                margin-top 40px
                font-size 18px
              }
              @media (max-width: 1200px) {
                margin-top 20px
                font-size 14px
              }
            .line
              width 60px
              height 4px
              border-radius 2px
              @media (min-width: 1200px) {
                margin 40px 0
              }
              @media (max-width: 1200px) {
                margin 20px 0
              }
            &:nth-child(1)
              .line
                background-color #00e7ff
            &:nth-child(2)
              .line
                background-color #a9bb0d
            &:nth-child(3)
              .line
                background-color #ef4868
            .img
              @media (min-width: 1200px) {
                width 169px
                height 180px
              }
              @media (max-width: 1200px) {
                width 60px
                height 60px
              }
            p
              text-align center
              line-height 32px
              word-wrap break-word
              @media (min-width: 1200px) {
                margin-top 20px
                padding 0 20px
                font-size 16px
              }
              @media (max-width: 1200px) {
                margin-top 10px
                padding 0 10px
                font-size 12px
              }
            .btn
              text-align center
              border 1px solid rgba(255, 255, 255, .1)
              cursor pointer
              @media (min-width: 1200px) {
                width 240px
                height 60px
                line-height 60px
                font-size 18px
                margin-top 60px
                z-index 999
              }
              @media (max-width: 1200px) {
                width 120px
                height 30px
                line-height 30px
                font-size 14px
                margin-top 20px
                z-index auto
              }
    .loading
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 999
      color #fff
      font-size 40px
      font-family "微软雅黑 Light"
    .container-block
      &.on
        z-index 3
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      .wr
        width 100%
        height 100%
        display flex
        flex-direction row
        div
          width: 20%;
          background-color: rgb(0, 23, 50);
          height: 0;
          position: absolute;
          bottom: 0px;
          transition: all 1s ease 0s;
          &:nth-child(1)
            left 0
            border-left 1px solid rgba(255, 255, 255, .1)
          &:nth-child(2)
            left 20%
            transition-delay .1s
            border-left 1px solid rgba(255, 255, 255, .1)
          &:nth-child(3)
            left 40%
            transition-delay .2s
            border-left 1px solid rgba(255, 255, 255, .1)
          &:nth-child(4)
            left 60%
            transition-delay .3s
            border-left 1px solid rgba(255, 255, 255, .1)
          &:nth-child(5)
            left 80%
            transition-delay .4s
            border-left 1px solid rgba(255, 255, 255, .1)
        &.on
          div
            height 100%
</style>
<style>
  .swiper-slide .common {
    opacity: 0;
    transition: .5s;
  }

  .swiper-slide-active .common {
    opacity: 1;
    transition: 1s 2s;
  }
</style>
