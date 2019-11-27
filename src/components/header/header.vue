<template>
  <div>
    <div class="v-header">
      <div class="header-left" @click="$router.push('/home')">

        <img width="205" height="35" class="logo-pic pc" src="./images/logo.png" />
        <img width="136" height="24" class="mobile" src="./mobile-imgs/logo.png" />

      </div>
      <div class="header-right">

        <p><span :class="{active: isActive === 1}" @click="changeLanguage('CN', 1)">CN</span>/<span :class="{active: isActive === 2}" @click="changeLanguage('EN', 2)">EN</span></p>

        <div @click="openMenuShow = !openMenuShow">
          <img width="66" height="62" class="menu-pic pc" v-if="!openMenuShow" src="./images/menu.png" />
          <img width="40" height="40" class="mobile" v-if="!openMenuShow" src="./mobile-imgs/menu.png" />

          <img width="20" height="20" class="close-pic pc" v-if="openMenuShow" src="./images/close.png">
          <img width="15" height="15" class="close-pic mobile" v-if="openMenuShow" src="./mobile-imgs/close.png">
        </div>
        <span class="close-text" v-if="openMenuShow">close</span>
      </div>
    </div>
    <v-menu @hidden="hidden" class="menu" v-show="openMenuShow"></v-menu>
    <div class="return-top" v-show="smallNav" :class="{'active': active}" @click="returnTop">
      <div class="top-text1 top-text-t">T</div>
      <div class="top-text1">O</div>
      <div class="top-text1">P</div>
      <div class="top-icon"></div>
    </div>
  </div>
</template>

<script>
import menu from '@/components/menu/menu'

export default {
  components: {vMenu: menu},
  data() {
    return {
      isActive: parseInt(localStorage.getItem('index')) || 1,
      openMenuShow: false,
      smallNav: false,
      active: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    hidden(flag) {
      this.openMenuShow = flag
    },
    changeLanguage(val, num) {
      this.isActive = num
      localStorage.setItem('index', this.isActive)
      localStorage.setItem('lang', val)
      location.reload()
    },
    getScollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop
    },
    scroll() {
      if (this.getScollTop() < 100) {
        this.smallNav = false
        this.active = false
      } else {
        this.smallNav = true
        this.active = true
      }
    },
    returnTop() {
      let currentScroll = this.getScollTop()
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.returnTop)
        window.scrollTo(0, currentScroll - (currentScroll / 10))
        this.active = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .v-header
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    z-index 99999
    @media (max-width: 1024px) {
      background-color rgba(13, 27, 42, .5)
    }
    @media (max-width: 1024px) {
      align-items center
    }
    .header-left
      margin 48px 0 0 40px
      cursor pointer
      user-select none
      @media (max-width: 1024px) {
        margin 0
        img {
          margin-left 10px
        }
      }
    .header-right
      height 62px
      display flex
      justify-content center
      align-items center
      cursor pointer
      user-select none
      @media (min-width: 1024px) {
        margin 32px 70px 0 0
      }
      @media (max-width: 1024px) {
        margin-right 5px
      }
      p
        color #fff
        @media (min-width: 1024px) {
          font-size 20px
          margin-right 60px
        }
        @media (max-width: 1024px) {
          font-size 15px
          margin-right 10px
        }
        span
          cursor pointer
          user-select none
          margin 0 5px
          &.active
            color #00e7ff
      .menu-pic
        width 66px
        height 62px
      .close-text
        color #fff
        margin-left 12px
        font-size 20px
        @media (max-width: 1024px) {
          font-size 15px
          margin-left 6px
        }

  .menu
    z-index 1

  .return-top
    position fixed
    width 40px
    height auto
    left 0
    bottom 40px
    cursor pointer
    opacity .1
    text-align left
    z-index 0
    transition all 2s
    //background-color rgba(255,255,255, .1)
    &.active
      opacity .7
    /* &:before
       content: ''
       position: absolute
       width 10px
       height 10px
       border-left 2px solid #fff
       border-top 2px solid #fff
       left 50%
       top 50%
       transform: translate(-50%,-30%) rotate(45deg)
     &:hover
       opacity 1*/
    .top-text1
      color #fff
      font-size 14px
      padding-left 7px
    .top-text-t
      padding-left 8px
    @media screen and (max-width: 1200px) {
      transform: scale(.6);
      transform-origin: left bottom;
      left: 20px;
    }
    .top-icon
      width: 12px
      height: 20px
      background url("../../assets/imgRick/top-icon.png") no-repeat center
      background-size 100% 100%
      margin-left 5px
      margin-top 3px

</style>
