<template>
  <div>
    <div class="economicSystem-wrap maxWidth">
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
        <swiper-slide class="swiper-slide">
          <slideFour></slideFour>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <slideFive></slideFive>
        </swiper-slide>
        <div class="swiper-slide-app-five"></div>
      </swiper>
      <vline :num="num" :activeitem="swiperOption.activeitem" @changeActiveitem="sealed"></vline>
    </div>
    <div class="economicSystem-wrap-app">
      <slideOne></slideOne>
      <slideTwo></slideTwo>
      <slideThree></slideThree>
      <slideFour></slideFour>
      <slideFive></slideFive>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import slideOne from './economicSlideOne.vue'
  import slideTwo from './economicSlideTwo.vue'
  import slideThree from './economicSlideThree.vue'
  import slideFour from './economicSlideFour.vue'
  import slideFive from './economicSlideFive.vue'
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
          //followFinger: true,
          onTransitionStart (swiper) {
            this.activeitem = swiper.activeIndex
          },
        },
        num: 5
      }
    },
    components: {
      swiper,
      swiperSlide,
      slideOne,
      slideTwo,
      slideThree,
      slideFour,
      slideFive,
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
  .economicSystem-wrap{
    .vw;
    .vh;
    background: url("../../assets/imgRick/jj-bg.jpg")no-repeat center;
    background-size: cover;
    /deep/.swiper-container-autoheight{
      height: 100vh;
    }
    @media screen and (max-width: 768px){
      display: none;
    }
  }
  .economicSystem-wrap-app{
    .w100;
    .h100;
    .pb(40px);
    background-color: rgba(13,27,42,1);
    @media screen and (min-width: 769px){
      display: none;
    }
  }
</style>
