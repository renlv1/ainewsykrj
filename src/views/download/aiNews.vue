<template>
  <div class="download">
    <!--<v-header class="v-header" @newsListFns="newsListFn" @activeFn="activeFn"></v-header>-->
    <v-header class="v-header" @newsListFns="newsListFn"></v-header>
    <div class="main">
      <v-loading v-show="loadingShow"></v-loading>
      <div v-show="nullData" style="color: red; font-size: 14px; text-align: center;padding: 60px 0;">暂没数据</div>
      <div class="main-box box" v-if="navList.length > 0">
        <p class="title" style="color: red; line-height: 27px;" v-if="bigtitle">{{bigtitle}}</p>
      </div>
      <div class="main-box box anchor" v-if="navList.length > 0" :id="'anchor'+item.id" v-for="(item,index3) in navList" :key="index3">
          <div class="contents active" v-html="item.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import vHeader from '../../components/header/aiNewsHeader.vue'
  export default {
    data () {
      return {
        loadingShow: true,
        nullData: false,
        isPC: window.innerWidth > 1024,
        type: 1,
        smallNav: false,
        activeTitle: '',
        bigtitle: '',
        navList: []
        //activePadd: true
      }
    },
    created () {},
    mounted() {
      // window.addEventListener('touchmove', this.touchmove)
    },
    components: {
      vHeader,
      vLoading: () => import('@/components/dialog/loading.vue')
    },
    methods: {
      /*touchmove () {
        this.activePadd = false
      },*/
      /*activeFn(index) {
        for (let i=0; i <this.navList.length; i++) {
          if (index === i) {
            this.activePadd = true
            console.log(this.activePadd,'isTrue')
          }
        }
      },*/
      newsListFn (index,newDateTitles) {
        this.activeTitle = newDateTitles[index].title
        this.$https.post(`news/queryNewsByDate?datestr=${this.activeTitle}&type=${this.type}`).then((res) => {
          if (res.status) {
            setTimeout(() => {
              this.loadingShow = false
            },400)
            let newsArr = res.data.data //新闻列表
            this.navList = newsArr
            if (newsArr) {
              if (newsArr.length > 0) {
                this.loadingShow = false
                this.nullData = false
                for (let i = 0; i <this.navList.length; i++) {
                  this.bigtitle = this.navList[0].bigtitle
                }
              } else {
                setTimeout(() => {
                  this.loadingShow = false
                  this.nullData = true
                },400)
              }
            }
          }
        })
      }
    },
    /*destroyed () {
      window.removeEventListener('touchmove', this.touchmove)
    }*/
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .download
    display flex
    flex-direction row
    flex-wrap wrap
    font-size 20px
    margin-top 184px
    @media screen and (max-width: 1200px) {
      margin-top 154px
    }
    @media screen and (max-width: 768px) {
      width 100%
      padding-left 20px
      padding-right 20px
      margin 30px auto
      font-size 16px
      padding-bottom 30px
      margin-top 95px
    }
    .v-header
      position fixed
      top 0
      z-index 900
    .main
      width 1400px
      height auto
      background-color #fff
      margin 0 auto
      overflow hidden
      @media screen and (max-width 1200px) {
        width 100%
        padding 0 20px
      }
      @media screen and (max-width 768px) {
        width 100%
        padding 0
      }
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
      .main-box
        width 100vw
        height auto
        background-color #fff
        border-bottom 1px solid #f0f0f0
        .title
          padding 30px 0
          @media screen and (max-width: 1200px) {
            width 100%
            font-size 18px
            padding 10px 0
          }
        .contents
          @media screen and (max-width: 1200px) {
            width 100%
            &.active{
              padding-top 90px
            }
          }
          p
            font-size 20px !important
            color green !important
            a
             margin-bottom 20px
        .video
          margin 0 auto
        .select
          width 100%
          height auto
          background-color #fff
          display flex
          flex-flow wrap
          align-items flex-start
          justify-content space-between
          position fixed
          top 0
          left 0
          right 0
          z-index 999
          font-size 15px
          .nav-l
            width 50%
            .nav
              cursor pointer
              line-height 40px
              &:nth-child(1){
                color red
              }
          .nav-r
            width 50%
            .nav
              cursor pointer
              line-height 40px
              &:nth-child(1){
                color red
              }
      .box
        margin 0 auto 70px
        width 1200px
        display flex
        flex-direction column
        font-size 18px
        @media screen and (max-width: 768px) {
          margin-top 0
          margin-bottom 0
          width 100%
          font-size 14px
        }
        .video-box
          margin-bottom 20px
          display flex
          align-items center
          flex-direction row
          @media screen and (max-width: 768px) {
            flex-direction column
          }
          .video
            margin-left 0
            @media screen and (max-width: 768px) {
              margin-bottom 10px
              margin-right 0
              margin 0 auto
            }
        a
          color #2283e6
          cursor pointer
          margin-bottom 10px
          &:hover
            color red
        img
          width 500px
          @media screen and (max-width: 768px) {
            width 100%
            margin 0 auto 10px
          }
</style>
