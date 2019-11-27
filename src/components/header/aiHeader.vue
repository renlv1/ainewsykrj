<template>
  <div class="wrap-header">
    <div class="logo">
      <div class="box">
        <div class="icon"></div>
      </div>
    </div>
    <div class="mian-nav" :class="{active: transitionBox}">
      <div class="nav-box box">
        <div class="icon-jd" @click.stop="downChange" :class="{active: downShow}"></div>
        <swiper :options="swiperOption" @click.stop ref="mySwiper">
          <swiper-slide v-for="(item,index) in navList" :key="index">
            <div class="side-content" @click.stop="routerPath(item)">
              <div class="icon"></div>
              <div class="nav">{{item.text}}</div>
            </div>
            <div class="list" :class="{active2: activeDowm}">
              <div class="li-anchor" :class="{active: anchorColor === index2}" @click.stop="jumpAnchor2('#anchor'+index2,index2)" v-for="(item,index2) in item.list" :key="index2">
                {{item.text}}
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div>
          <div class="swiper-button-prev arrows">
            <div class="prev-btn" @click.stop="changeRouterFn(1)"></div>
          </div>
          <div class="swiper-button-next arrows">
            <div class="prev-btn" @click.stop="changeRouterFn(2)"></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="return-top" v-show="smallNav" @click="returnTop"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionBox: false,
        activeIndex: 0,
        downShow: false,
        smallNav: false,
        activeDowm: false,
        anchorColor: 0,
        path: this.$route.path,
        isPC: window.innerWidth > 1200,
        newObj: {},
        swiper: {},
        navList: [
          {
            text: '2019/09/23',
            path: '/ai01',
            list: [
              {
                text:'AI人脸识别'
              },
              {
                text:'OpenCV'
              },
              {
                text:'激光雷达'
              },
              {
                text:'脸部识别资料'
              },
              {
                text:'全息技术'
              },
              {
                text:'深度摄像头资料'
              },
              {
                text:'硬件秘钥'
              }
            ]
          },
          {
            text: '2019/09/25',
            path: '/ai02',
            list: [
              {
                text:'边缘计算'
              },
              {
                text:'机器学习'
              },
              {
                text:'机器学习（层次控制）'
              },
              {
                text:'深度脸部交换AI'
              }
            ]
          },
          /*{
            text: '3',
            path: '/ai03',
            list: [
              {
                text:'边缘计算'
              },
              {
                text:'机器学习'
              },
              {
                text:'机器学习（层次控制）'
              },
              {
                text:'深度脸部交换AI'
              }
            ]
          },
          {
            text: '4',
            path: '/ai04',
            list: [
              {
                text:'边缘计算'
              },
              {
                text:'机器学习'
              },
              {
                text:'机器学习（层次控制）'
              },
              {
                text:'深度脸部交换AI'
              }
            ]
          },
          {
            text: '5',
            path: '/ai05',
            list: [
              {
                text:'边缘计算'
              },
              {
                text:'机器学习'
              },
              {
                text:'机器学习（层次控制）'
              },
              {
                text:'深度脸部交换AI'
              }
            ]
          },
          {
            text: '6',
            path: '/ai06',
            list: [
              {
                text:'边缘计算'
              },
              {
                text:'机器学习'
              },
              {
                text:'机器学习（层次控制）'
              },
              {
                text:'深度脸部交换AI'
              }
            ]
          },
          {
            text: '7',
            path: '/ai07',
            list: [
              {
                text:'边缘计算'
              },
              {
                text:'机器学习'
              },
              {
                text:'机器学习（层次控制）'
              },
              {
                text:'深度脸部交换AI'
              }
            ]
          }*/
        ],
        swiperOption: {
          observer:false,//修改swiper自己或子元素时，自动初始化swiper
          paginationClickable: false, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          slidesPerView: window.innerWidth > 1200 ? 3 : 1,
          //slidesPerView: 1,
          pagination: '.swiper-pagination',
          centeredSlides: true, // 激活的slid居中
          allowTouchMove: false,  //关闭拖动
          simulateTouch : false, //禁止鼠标模拟
          touchStartPreventDefault : true, //阻止`touchstart` (`mousedown`)的默认事件，设置为false则不阻止。
          loop: false,
        },
      }
    },
    components: {},
    created () {},
    mounted() {
      this.swiper = this.$refs.mySwiper.swiper
      this.transitionBox = true
      window.addEventListener('scroll', this.scroll)
    },
    watch: {
      $route() {
        this.path = this.$route.path
        this.pathRouterFn()
      }
    },
    methods: {
      // 当前激活的nav和页面
      changeSlide () {
        let path = this.path
        for (let i = 0; i < this.navList.length; i++) {
          if (path === this.navList[i].path && path !== '/') {
            this.swiper.activeIndex = i
            this.swiper.initialSlide = i
            this.swiper.slideTo(i);
          }
        }
      },
      refresh () {
        if (this.path) {
          let path = this.path
          for (let i = 0; i < this.navList.length; i++) {
            if (path === this.navList[i].path && path !== '/') {
              this.swiper.activeIndex = i
              this.swiper.initialSlide = i
              this.swiper.slideTo(i, 0, false);
            } else if (path === '/'){
              this.swiper.activeIndex = 0
              this.swiper.initialSlide = 0
              this.swiper.slideTo(0, 0, false);
            }
          }
        }
      },
      // 页面刷新后
      pathRouterFn (){
        if (window.performance.navigation.type == 1) {
          // 页面刷新了
          //console.log('刷新了')
          this.transitionBox = true
          this.refresh()
        }
      },
      getScollTop () {
        return document.documentElement.scrollTop || document.body.scrollTop
      },
      scroll () {
        if (this.getScollTop() < 80) {
          this.smallNav = false
        } else {
          this.smallNav = true
        }
      },
      returnTop () {
        let currentScroll = this.getScollTop()
        if (currentScroll > 0) {
          window.requestAnimationFrame(this.returnTop)
          window.scrollTo(0, currentScroll - (currentScroll / 4))
        }
      },
      jumpAnchor2 (item,index) {
        let anchor = document.querySelector(item)
        if (anchor) {
          document.documentElement.scrollTop = anchor.offsetTop
          this.anchorColor = index
          this.activeDowm = false
        } else {
          this.activeDowm = false
        }
      },
      downChange() {
        this.downShow = !this.downShow
        this.activeDowm = !this.activeDowm
      },
      routerPath (item) {
        this.$router.push({
          path: item.path,
        })
        //this.anchorColor = 0
        this.activeDowm = !this.activeDowm
        this.downShow = !this.downShow
        window.scrollTo(0, 0)
        this.changeSlide ()
      },
      changeRouterFn(index) {
        let newPath
        this.path = this.$route.path
        let path = this.path
        for (let i = 0; i < this.navList.length; i++) {
          if (path === this.navList[i].path) {
            if (index === 1){
              let j = i - 1
              newPath = this.navList[j].path
              this.$router.push(newPath)
              this.swiper.slideTo(j);
              this.swiper.activeIndex = j
              this.swiper.initialSlide = j
            } else if (index === 2){
              let j = i + 1
              newPath = this.navList[j].path
              this.$router.push(newPath)
              this.swiper.slideTo(j);
              this.swiper.initialSlide = j
              this.swiper.activeIndex = j
            }
          }
        }
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scroll)
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .wrap-header{
    width: 100%;
    height: auto;
    background-color: #fff;
    border-bottom: 1px solid #fefefe;
    .return-top{
      position: fixed;
      width: 50px;
      height: 50px;
      right: 40px;
      bottom: 40px;
      background: #bbb;
      cursor: pointer;
      opacity: .6;
      transition: all .3s linear;
      &:before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-left: 2px solid #fff;
        border-top: 2px solid #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-30%) rotate(45deg);
      }
      &:hover{
        opacity: 1;
      }
      @media screen and (max-width: 1200px) {
        transform: scale(.6);
        transform-origin: right bottom;
        right: 20px;
      }
    }
    .logo{
      width: 100%;
      height: 80px;
      line-height: 80px;
      background-color: #000;
      @media screen and (max-width: 1200px) {
        height: 50px;
      }
      .box{
        width: 1200px;
        height: 100%;
        display: flex;
        align-items: center;
        margin: 0 auto;
        @media screen and (max-width: 1200px) {
          width: 100%;
          padding: 0 20px;
        }
        .icon{
          width: 153px;
          height: 37px;
          background: url("../../views/download/images/PC_LOGO.png") no-repeat center;
          background-size: contain;
          @media screen and (max-width: 1200px) {
            width: 120px;
            height: 32px;
          }
        }
      }
    }
    .mian-nav{
      width: 100%;
      height: auto;
      background-color: #fff;
      padding-bottom: 4px;
      padding-top: 40px;
      box-shadow: 0 0 6px rgba(0,0,0, .1);
      opacity: 0;
      transition: all .6s linear;
      &.active{
        opacity: 1;
      }
      @media screen and (max-width: 768px) {
        padding-top: 24px;
      }
      .nav-box{
        width: 1200px;
        background-color: #fff;
        margin: 0 auto;
        position: relative;
        @media screen and (max-width: 1400px) {
          width: 80%;
        }
        @media screen and (max-width: 768px) {
          width: 70%;
        }
        .icon-jd{
          width: 100%;
          height: 26px;
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          z-index: 200;
          &:after{
            display: block;
            content: '';
            width: 12px;
            height: 6px;
            position: absolute;
            background: url("../../assets/imgRick/arrow_down.png") no-repeat center;
            background-size: 100% 100%;
            bottom: 0;
            left: 50%;
            margin-left: -6px;
            transition: all .4s linear;
          }
          &.active{
            &:after{
              transform: rotate(180deg);
            }
          }
        }
        .icon{
          width: 12px !important;
          height: 12px !important;
          background: #fff !important;
          border-radius: 50%;
          border: 1px solid #e6e6e6;
          opacity: 1;
        }
        .nav{
          width: auto;
          font-size: 16px;
          color: #b3b3b3;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
          position: relative;
          &:after{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #e6e6e6;
            z-index: 0;
            top: 6px;
            left: 0;
            right: 0;
            transform: translateY(-50%);
          }
          .swiper-wrapper{
            .swiper-slide{
              /*display: flex;
              align-items: flex-end;
              flex-flow: wrap;
              justify-content: center;*/
              position: relative;
              transition: 300ms;
              transform: scale(1);
              /*&:hover{
                .list{
                  !*opacity: 1;
                  max-height: 300px;*!
                }
              }*/
              .active2{
                opacity: 1 !important;
                max-height: 300px !important;
              }
              .side-content{
                width: 200px;
                height: 60px;
                text-align: center;
                margin: 0 auto;
                cursor: pointer;
                position: relative;
                @media screen and (max-width: 768px){
                  height: 50px;
                }
                .icon{
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  z-index: 10;
                }
                .nav{
                  padding-top: 20px;
                }
              }
              .list{
                width: 200px;
                max-height: 0;
                margin: 0 auto;
                opacity: 0;
                overflow: hidden;
                transition: all .3s linear;
                .li-anchor{
                  color: #b3b3b3;
                  font-size: 16px;
                  padding-bottom: 16px;
                  text-align: center;
                  cursor: pointer;
                }
              }
            }
            .swiper-slide-active,.swiper-slide-duplicate-active{
              transform: scale(1);
              .icon{
                background-color: #0090ff !important;
              }
              .nav{
                color: #0090ff !important;
                text-align: center;
              }
              .list{
                .li-anchor{
                  color: #000;
                  &.active{
                    color: rgb(189, 77, 255);
                  }
                }
              }
            }
            .swiper-slide {
              /* Center slide text vertically */
     /*         display: -webkit-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              -webkit-align-items: center;*/
            }
          }
        }
        .arrows{
          width: 60px;
          height: 60px;
          background-color: #fff;
          top: -2px !important;
          @media screen and (max-width: 768px) {
            width: 40px;
            height: 40px;
            top: 8px !important;
            box-shadow: 0 0 0 1px rgba(0,0,0, .1) ;
          }
          .prev-btn{
            width: 100%;
            height: 100%;
          }
        }
        .swiper-button-prev{
          left: -80px;
          border-radius: 50%;
          background: url("../../views/download/images/arrows-left.png") no-repeat center;
          background-size: 100% 100% !important;
          cursor: pointer !important;
          @media screen and (max-width: 768px) {
            left: -50px;
          }
        }
        .swiper-button-next{
          right: -80px;
          border-radius: 50%;
          background: url("../../views/download/images/arrows-right.png") no-repeat center;
          background-size: 100% 100% !important;
          cursor: pointer !important;
          @media screen and (max-width: 768px) {
            right: -50px;
          }
        }
        .swiper-pagination{
          display: none !important;
          width: 1200px;
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          //display: flex;
          align-items: center;
          &:after{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #e6e6e6;
            //background-color: #e6e6e6;
            top: 50%;
            transform: translateY(-50%);
          }
          /deep/ .swiper-pagination-bullet{
            flex: 1;
            position: relative;
            background: none;
            opacity: 1;
            &:after{
              content: '';
              display: block;
              width: 12px !important;
              height: 12px !important;
              background: #fff !important;
              border-radius: 50%;
              border: 1px solid #e6e6e6;
              opacity: 1;
              position: absolute;
              top: 50%;
              left: 50%;
              right: 0;
              transform: translate(-50%, -50%);
              z-index: 2;
            }
          }
          /deep/ .swiper-pagination-bullet-active{
            &:after{
              content: '';
              display: block;
              width: 12px !important;
              height: 12px !important;
              background: #0090ff !important;
              border-radius: 50%;
              border: 1px solid #0090ff;
              box-shadow: 0 0 3px #0090ff;
              opacity: 1;
              position: absolute;
              top: 50%;
              left: 50%;
              right: 0;
              transform: translate(-50%, -50%);
              z-index: 2;
            }
          }
        }
      }
    }
  }
</style>
