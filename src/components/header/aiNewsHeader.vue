<template>
  <div class="wrap-header">
      <div class="logo">
        <div class="box">
          <div class="icon"></div>
        </div>
      </div>
      <div class="mian-nav" :class="{active: transitionBox}">
        <div class="nav-box box">
          <div class="icon-jd" :class="{active: downShow}"></div>
          <swiper :options="swiperOption">
            <swiper-slide  v-for="(item,index1) in newDateTitles" :key="index1">
              <div class="side-content" @click.stop="routerPath">
                <div class="icon"></div>
                <div class="nav 000">{{item.date}}</div>
              </div>
              <div class="box-nav" :class="{active2: activeDowm}">
                <div class="list" v-for="(item,index) in navList" :key="index">
                  <div class="li-anchor" :class="{active: anchorColor === index}" @click.stop="jumpAnchor2('#anchor'+item.id,index)">
                    {{item.smalltitle}}
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div>
            <div class="swiper-button-prev arrows">
              <div class="prev-btn" ></div>
            </div>
            <div class="swiper-button-next arrows">
              <div class="prev-btn" ></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="return-top" v-show="smallNav" @click="returnTop"></div>
    </div>
</template>

<script>
  let vm = null;
  export default {
    data () {
      return {
        nullData: false,
        type: 1,
        transitionBox: false,
        downShow: false,
        smallNav: false,
        activeDowm: false,
        anchorColor: 0,
        isPC: window.innerWidth > 1024,
        activeTitle: '',
        newDateTitles: [
          {
            title: '20190923',
            date: '2019/09/23',
          },
          {
            title: '20190925',
            date: '2019/09/25',
          }
        ],
        navList: [],
        swiperOption: {
          observer: false,//修改swiper自己或子元素时，自动初始化swiper
          paginationClickable: false, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          //slidesPerView: window.innerWidth > 1200 ? 3 : 1,
          slidesPerView: 1,
          pagination: '.swiper-pagination',
          centeredSlides: true, // 激活的slid居中
          allowTouchMove: false,  //关闭拖动
          simulateTouch: false, //禁止鼠标模拟
          touchStartPreventDefault: true, //阻止`touchstart` (`mousedown`)的默认事件，设置为false则不阻止。
          loop: false,
          onFirstInit: function(s){ // 回调函数，首次初始化后执行。
            let index = s.activeIndex
            vm.newsListFn(index)
          },
          onInit: function(s){  //  回调函数，非首次初始化后执行 2版本。
            let index = s.activeIndex
            vm.newsListFn(index)
          },
          onTransitionEnd: (s) => { //
            let index = s.activeIndex
            vm.newsListFn(index)
          }
        }
      }
    },
    props: {},
    created () {
      vm = this;
      this.newsListFn(0)
    },
    mounted() {
      this.transitionBox = true
      window.addEventListener('scroll', this.scroll)
    },
    components: {},
    methods: {
      newsListFn (index) {
        this.$emit('newsListFns',index,this.newDateTitles)
        this.activeTitle = this.newDateTitles[index].title
        this.$https.post(`news/queryNewsByDate?datestr=${this.activeTitle}&type=${this.type}`).then((res) => {
          if (res.status) {
            let newsArr = res.data.data //新闻列表
            if (newsArr) {
              this.nullData = false
              this.navList = newsArr
            }
          }
        })
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
        this.anchorColor = index
        this.activeDowm = false
        if (this.isPC) {
          document.documentElement.scrollTop = document.querySelector(item).offsetTop;
        } else {
          //this.$emit('activeFn',index)
          document.querySelector(item).scrollIntoView(true)
        }
      /*  let anchor = document.querySelector(item)
        if (anchor) {
          document.documentElement.scrollTop = anchor.offsetTop + 55
          this.anchorColor = index
          this.activeDowm = false
        } else {
          this.activeDowm = false
        }*/
      },
      routerPath () {
        this.activeDowm = !this.activeDowm
        this.downShow = !this.downShow
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
        height: 30px;
        line-height: 30px;
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
            height: 30px;
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
        padding-top: 18px;
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
          font-size: 18px;
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
              position: relative;
              transition: 300ms;
              transform: scale(1);
              .active2{
                opacity: 1 !important;
                max-height: 340px !important;
              }
              .side-content{
                width: 200px;
                height: 60px;
                text-align: center;
                margin: 0 auto;
                cursor: pointer;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                text-shadow: 0 2px 2px rgba(0, 149, 255, .1);
                @media screen and (max-width: 768px){
                  height: 42px;
                }
                .icon{
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  z-index: 10;
                }
              }
              .box-nav{
                opacity: 0;
                overflow: hidden;
                max-height: 0;
                transition: all .6s cubic-bezier(0, 0, 0.2, 1);
                .list{
                  width: 230px;
                  height: 34px;
                  margin: 0 auto;
                  &:hover{
                    .li-anchor{
                      color: rgba(0, 149, 255, .9);
                    }
                  }
                  .li-anchor{
                    font-size: 16px;
                    text-align: center;
                    cursor: pointer;
                  }
                }
              }
            }
            .swiper-slide-active,.swiper-slide-duplicate-active{
              transform: scale(1);
              .icon{
                background-color: rgba(0, 149, 255, 1) !important;
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
          align-items: center;
          &:after{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #e6e6e6;
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
