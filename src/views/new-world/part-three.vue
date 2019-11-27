<template>
  <div class="part-three">
    <div class="content-wrapper">
      <div class="left-content">
        <div class="part-three-title-pic">方块系统</div>
        <h5>了解规则，玩转拼世界</h5>
        <p>方块是拼世界的基础，在《拼世界》中任何游戏行为的进行都离不开方块。</p>
        <p>方块的造型与现实中乐高玩具方块类似，一面有凸点颗粒，一面为可以镶嵌凸点颗粒的凹槽。游戏中的方块只是一种储存数据，但是玩家在拼图时可以选择当前使用方块的颜色。</p>
        <p>方块暂时有红、黄、蓝、白、黑五种颜色供玩家选择，改变方块的颜色只能让玩家完成的模型有差异性，而不能通过改变颜色赋予方块不同功能。</p>
        <div class="btn-wrapper">
          <div class="btn-box" @click="openDialog(0)">
            <div class="btn-left btn" style="font-size: 18px">
              <img src="./images/222.png" />
              <span style="color: #00e7ff">方块获取规则</span>
            </div>
          </div>
          <div class="btn-box" @click="openDialog(1)">
            <div class="btn-right btn" style="font-size: 18px">
              <img src="./images/221.png" />
              <span style="color: #ef4868">方块消耗规则</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right-content pc">
        <img class="img" src="./images/2-3-right.png" />
      </div>
      <img style="margin: 40px auto" width="186" height="44" class="mobile" src="./mobile-images/2-3.png" />
    </div>
    <div class="cover" v-show="panelShow"></div>
    <v-dialog v-show="panelShow" :obj="obj" @close="close"></v-dialog>
  </div>
</template>

<script>
import dialog from '@/components/dialog/dialog'
export default {
  components: {VDialog: dialog},
  data() {
    return {
      list: [
        {
          icon: require('./images/a.png'),
          subtitle: '方块获取规则',
          bottom_pic: require('./images/c.png'),
          content: '（1）基础方块均由区块链数据来进行生成和管理，当玩家没有购买生产器时，也可以直接在市场中购买对应的方块来进行拼图。玩家可以购买更多的生产器以加大方块的采集产出数量，也可以去商家处占用工厂生产线来进行生产效率的增幅。</br></br>（2）用户到真实世界中去采集各种具有不同功能的AR方块，也需要借助生产器。 '
        },
        {
          icon: require('./images/b.png'),
          subtitle: '方块消耗规则',
          bottom_pic: require('./images/d.png'),
          content: '（1）当玩家在使用方块进行拼接时，可以选择当前拼接方块的颜色，玩家在拼接过程中可以随时保存这份蓝图，以方便下次再进行拼接。当玩家在拼接过程中完成所有格子后，可以进行确认，此时所有的方块会被消耗掉并获取对应奖励。</br></br>（2）方块只要进行了组装，就会被锁定，无法交易，但是在完成组装前是可以拆卸的，拆卸后的方块解除锁定，可以交易。当用户拼出完整拼图，生成模型时，该拼图将永远无法拆卸，其组成的方块就永远消耗掉了。</br></br>（3）AR方块就是用来拼图的，用户可以在AR环境下进行组装或拆卸；除了AR技术，还可以使用手势识别和眼球控制技术。'
        }
      ],
      panelShow: false,
      obj: {}
    }
  },
  methods: {
    close() {
      this.panelShow = false
    },
    openDialog(num) {
      if (num === 0) {
        this.obj = this.list[0]
      } else if (num === 1) {
        this.obj = this.list[1]
      }
      this.panelShow = true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .part-three
    height 100%
    background-color #0d1b2a
    color #fff
    .content-wrapper
      margin 0 auto
      width 100%
      height 100%
      @media (min-width: 1024px) and (max-width: 1400px) {
        align-items center
      }
      @media (min-width: 1024px) {
        display flex
        flex-direction row
        justify-content center
      }
      @media (max-width: 1024px) {
        display flex
        flex-direction column
      }
      .left-content
        margin-top 200px
        @media (min-width: 1024px) and (max-width: 1400px) {
        }
        @media (min-width: 1024px) {
          margin-top 80px
          margin-left 40px
          width 40%
        }
        @media (max-width: 1024px) {
          margin-top 70px
          width 100%
        }
        .part-three-title-pic
          @media (min-width: 1024px) {
            font-size 60px
            width 259px
            height 60px
          }
          @media (max-width: 1024px) {
            font-size 30px
            text-align center
            margin-bottom 20px
          }
        h5
          @media (min-width: 1024px) and (max-width: 1400px) {
            margin 60px 0 30px
          }
          @media (min-width: 1024px) {
            margin 90px 0 60px
            font-size 28px
            font-weight bolder
          }
          @media (max-width: 1024px) {
            text-align center
            margin 10px 0 50px
            font-size 18px
          }
        p
          @media (min-width: 1024px) {
            width 90%
            font-size 18px
            line-height 2
            margin-top 30px
          }
          @media (max-width: 1024px) {
            width 90%
            margin 0 auto
            font-size 14px
            line-height 2
            margin-bottom 10px
          }
        .btn-wrapper
          margin-left -40px
          @media (min-width: 1024px) and (max-width: 1400px) {
            margin-top 80px
          }
          @media (min-width: 1024px) {
            margin-top 100px
            width 100%
          }
          @media (max-width: 1024px) {
            width 100%
            margin 0 auto
            clear both
            overflow hidden
          }
          .btn-box
            width 50%
            float left
            .btn
              cursor pointer
              user-select none
              text-align center
              border 1px solid rgba(255, 255, 255, .1)
              @media (min-width: 1024px) and (max-width: 1400px) {
                width 200px
                margin-left 40px
              }
              @media (min-width: 1024px) {
                margin-left 40px
                height 60px
                line-height 60px
                width 240px
              }
              @media (max-width: 1024px) {
                margin 10px auto
                height 40px
                line-height 40px
                width 120px
              }
              span
                @media (max-width: 1024px) {
                  font-size 14px
                }
              img
                height 17px
                width 17px
                margin-right 10px
                @media (max-width: 1024px) {
                  height 13px
                  width 13px
                  margin-right 5px
                }
      .right-content
        margin-left -40px
        text-align center
        width 20%
        background-image url("./images/2-3-right-bg.jpg")
        background-repeat no-repeat
        background-size cover
        height 100%
        @media (max-width: 1400px) {
          display flex
          align-items center
          justify-content center
        }
        @media (max-width: 1400px) {
          display none
        }
        .img
          margin-top 200px
          @media (min-width: 1024px) and (max-width: 1400px) {
            margin-top 0
          }
          @media (min-width: 1400px) {
            width: 183px
            height: 620px
          }
    .cover
      height 100%
      width 100%
      position absolute
      top 0
      left 0
      background-color rgba(0, 0, 0, .5)
</style>
