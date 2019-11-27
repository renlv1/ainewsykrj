<template>
  <div class="menu">
    <video muted autoplay="autoplay" class="logo pc" loop="loop">
      <source src="./images/logo.mp4" type="video/mp4">
    </video>
    <img class="mobile vedio-pic" src="./images/vedio.png" />
    <ul>
      <li v-for="(item, index) in menuList" :key="item.index" @click="toPath(item, index)"
          :class="{active: currentIndex === index}">
        <h5>{{item.title}}</h5>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          title: this.$t('menu.title1'),
          linkUrl: '/home',
        },
        {
          title: this.$t('menu.title2'),
          linkUrl: '/NewWorld'
        },
        {
          title: this.$t('menu.title3'),
          linkUrl: '/economicSystem'
        },
        {
          title: this.$t('menu.title4'),
          linkUrl: '/tradingCenter'
        },
        {
          title: this.$t('menu.title5'),
          linkUrl: '/download'
        },
        {
          title: this.$t('menu.title6'),
          linkUrl: '/aboutUs'
        },
        {
          title: this.$t('menu.title7'),
          linkUrl: ''
        }
      ],
      flag: false,
      currentIndex: parseInt(localStorage.getItem('Index')) || 0
    }
  },
  computed: {
    routerPath() {
      return this.$route.path
    }
  },
  watch: {
    routerPath: function () {
      this.keepRouter()
    }
  },
  methods: {
    keepRouter() {
      if (this.$route.path === '/home') {
        this.currentIndex = 0
      } else if (this.$route.path === '/NewWorld') {
        this.currentIndex = 1
      } else if (this.$route.path === '/economicSystem') {
        this.currentIndex = 2
      } else if (this.$route.path === '/tradingCenter') {
        this.currentIndex = 3
      } else if (this.$route.path === '/download') {
        this.currentIndex = 4
      }else if (this.$route.path === '/aboutUs') {
        this.currentIndex = 5
      }
    },
    toPath(item, index) {
      this.$router.push(item.linkUrl)
      this.currentIndex = index
      localStorage.setItem('Index', index)
      this.$emit('hidden', this.flag)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .menu
    height 100%
    background-color #0d1b2a
    width 100%
    position fixed
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-image url("./images/bg-text.png")
    background-repeat no-repeat
    background-position center
    background-size contain
    display flex
    flex-direction column
    justify-content center
    z-index 9999
    .logo, .vedio-pic
      margin 0 auto
      width 208px
      height 210px
      @media (max-width: 1024px) {
        width 154px
        height 155px
        margin-bottom 180pt
      }
    ul
      width 45%
      margin 140px auto
      display flex
      flex-direction row
      justify-content space-between
      z-index 999
      @media (max-width: 1024px) {
        position absolute
        bottom 0
        left 50%
        transform translateX(-50%)
        flex-direction column
        justify-content center
        margin 0 auto 35pt
      }
      li
        color #fff
        cursor pointer
        user-select none
        &.active {
          color #00e7ff
        }
        @media (min-width: 1024px) {
          font-size 18px
          &:last-child {
            margin-top -2px
            border 1px solid #00e7ff
            border-radius 20px
            padding 5px 30px
            color #00e7ff
          }
          &.active {
            border-bottom 1px solid #00e7ff
          }
        }
        @media (max-width: 1024px) {
          font-size 16px
          text-align center
          padding 8pt 0 8pt
          border-bottom 1px dotted #fff
          &:last-child {
            margin-top -2px
            border 1px solid #00e7ff
            border-radius 20px
            padding 5px 30px
            color #00e7ff
          }
          &.active {
            h5 {
              border-bottom 1px solid #00e7ff
            }
          }

          &:nth-last-child(2) {
            border-bottom none
          }
        }
        &:hover
          color #00e7ff
          border-bottom 1px solid #00e7ff
        h5
          display inline
</style>
