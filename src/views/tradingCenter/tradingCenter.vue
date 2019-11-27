<template>
  <div>
    <div class="tradingCenter-wrap">
      <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide">
          <slideOne></slideOne>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideTwo></slideTwo>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideThree></slideThree>
        </swiper-slide>
      </swiper>
      <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
    </div>
    <div class="tradingCenter-wrap-app">
      <slideOne></slideOne>
      <slideTwo></slideTwo>
      <slideThree></slideThree>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import slideOne from './tradingSlideOne.vue'
  import slideTwo from './tradingSlideTwo.vue'
  import slideThree from './tradingSlideThree.vue'
  import vline from '../../views/lineComponents/lineComponents.vue'
  export default{
    data () {
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
          onTransitionStart (swiper) {
            this.activeitem = swiper.activeIndex
          }
        },
        num: 3
      }
    },
    components: {
      swiper,
      swiperSlide,
      slideOne,
      slideTwo,
      slideThree,
      vline
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.swiper.slideTo(0, 1000, false)
      })
    },
    methods: {
      sealed (index) {
        this.swiper.slideTo(index, 1000, false)
        this.swiperOption.activeitem = index
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .tradingCenter-wrap{
    .vw;
    .vh;
    background-color: #0d1b2a;
    /deep/.swiper-container-autoheight{
      height: 100vh;
    }
    @media screen and (max-width: 768px){
      display: none;
    }
  }
  .tradingCenter-wrap-app{
    .w100;
    .h100;
    background-color: #0d1b2a;
    @media screen and (min-width: 769px){
      display: none;
    }
  }
</style>
