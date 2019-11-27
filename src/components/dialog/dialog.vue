<template>
  <div class="dialog">
    <div class="content_dialog">
      <div class="top-dialog">
        <div class="left">
          <img :src="obj.icon" />
          <h5>{{obj.subtitle}}</h5>
        </div>
        <div class="right" @click="close">
          <img class="close" src="./images/close.png" />
        </div>
      </div>
      <img :src="obj.bottom_pic" />
      <div class="content-dialog" v-html="obj.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      require: true
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dialog
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-image url("./images/dialog_bg.png")
    background-repeat no-repeat
    background-position center
    background-size cover
    @media (min-width: 1024px){
      position absolute
      width 55%
      z-index 999
      border-radius 20px
    }
    @media (max-width: 1024px){
      position fixed
      width 95%
      border-radius 10px
    }
    .content_dialog
      color #fff
      z-index 999
      @media (min-width: 1024px){
        padding 50px
      }
      @media (max-width: 1024px){
        margin-top 10px
        padding 10px
      }
      .top-dialog
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        @media (min-width: 1024px){
          margin-top 60px
          height 70px
        }
        @media (max-width: 1024px){
          margin-top 20px
          height 20px
        }
        .left
          display flex
          flex-direction row
          align-items center
          @media (min-width: 1024px){
            padding-left 8px
          }
          @media (max-width: 1024px){
          }
          img
            @media (min-width: 1024px){
              margin-right 20px
            }
            @media (max-width: 1024px){
              margin-right 10px
              width 30px
              height 32px
            }
          h5
            @media (min-width: 1024px){
              font-size 30px
            }
            @media (max-width: 1024px){
              font-size 10px
            }
        .right
          z-index 999
          .close
            cursor pointer
            user-select none
      img
        @media (max-width: 1024px){
          width 30px
        }
      .content-dialog
        @media (min-width: 1024px){
          line-height 1.5
          margin 60px 0 70px
          font-size 18px
        }
        @media (max-width: 1024px){
          line-height 1.4
          margin 20px 0 25px
          font-size 14px
        }
</style>
