<template>
  <div class="part-two">
    <div class="common">
      <div class="part-two-title-pic">拼世界创造</div>
      <!--<p>在拼世界，你可以</p>-->
      <ul class="list-container">
        <li class="item" v-for="item in itemList" :key="item.index">
          <img class="img" :src="item.imgUrl" />
          <p>{{item.description}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: [
        {
          imgUrl: require('./images/1.png'),
          description: '体验到在现实世界中采集方块的乐趣'
        },
        {
          imgUrl: require('./images/2.png'),
          description: '设计你的方块角色并使其变为现实'
        },
        {
          imgUrl: require('./images/3.png'),
          description: '展现你的作品——可以放置在任何场所之中'
        },
        {
          imgUrl: require('./images/4.png'),
          description: '利用蓝图拼装模型，解锁成就'
        },
        {
          imgUrl: require('./images/5.png'),
          description: '参与大型拼装活动，贡献方块，获取巨额收益'
        },
        {
          imgUrl: require('./images/6.png'),
          description: '更多...'
        }
      ],
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .part-two
    height 100vh
    background-repeat no-repeat
    overflow hidden
    z-index auto
    background-size cover
    @media (min-width: 1200px) {
      background-image url("./images/part-two-bg.jpg")
    }
    @media (max-width: 1200px) {
      width 100%
      height 100%
      background-image url("./mobile-images/1-2-bg.png")
    }
    .part-two-title-pic
      text-align center
      color #fff
      font-family "微软雅黑 Light"
      @media (min-width: 1200px) {
        margin 200px 0 60px
        font-size 60px
      }
      @media (max-width: 1200px) {
        margin 60px 0 20px
        font-size 25px
        font-weight bolder
      }
    p
      text-align center
      color #fff
      @media (min-width: 1200px) {
        font-size 28px
      }
      @media (max-width: 1200px) {
        font-size 15px
      }
    .list-container
      list-style none
      display flex
      align-items center
      justify-content space-between
      flex-wrap wrap
      flex-direction row
      @media (min-width: 1200px) {
        margin 70px auto
        width 60%
      }
      @media (max-width: 1200px) {
        margin 55px auto
        width 100%
      }
      .item
        display flex
        flex-wrap wrap
        flex-direction column
        align-items center
        justify-content space-between
        @media (min-width: 1200px) {
          width 33%
          margin-bottom 60px
          height 180px
        }
        @media (max-width: 1200px) {
          width 50%
          margin-bottom 20px
        }
        p
          text-align center
          word-wrap break-word
          @media (min-width: 1200px){
            height 50px
            padding 0 5px
            margin-top 40px
            font-size 16px
          }
          @media (max-width: 1200px){
            margin-top 10px
            width 70%
            font-size 12px
          }
        .img
          @media (max-width: 1200px) {
            width 50px
            height 50px
          }
</style>
