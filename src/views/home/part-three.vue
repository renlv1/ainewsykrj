<template>
  <div class="part-three">
    <div class="common">
      <div class="part-three-title-pic">拼世界未来</div>
      <ul class="list-container">
        <li class="item" v-for="item in partThreeList" :key="item.index">
          <img class="img" :src="item.imgUrl" />
          <h5>{{item.title}}</h5>
          <div class="line"></div>
          <p>{{item.description}}</p>
          <div class="btn" @click="openDialog(item)">了解更多</div>
        </li>
      </ul>
    </div>
    <div class="cover" v-if="panelShow"></div>
    <v-dialog v-show="panelShow" :obj="obj" @close="close"></v-dialog>
  </div>
</template>

<script>
import dialog from '@/components/dialog/dialog'

export default {
  components: {VDialog: dialog},
  data() {
    return {
      dialogCover: false,
      partThreeList: [
        {
          index: 'a',
          imgUrl: require('./images/3-1.png'),
          title: '第一阶段：静态拼装',
          subtitle: '静态拼装',
          description: '这是一个由用户自由发挥想象，并且在增强世界留下专属印记的阶段。',
          icon: require('./images/3-1-1.png'),
          bottom_pic: require('./images/3-1-a.png'),
          content: '用户在现实世界采集具有特定功能AR方块，然后在特定的地点进行拼装。比如在市中心广场的门口，一个用户拼装了一只恐龙，当其他用户打开拼世界APP，就会看到一只张着血盆大口的霸王龙正朝着自己走来。</br></br>第三方（如商家）可以使用3D扫描技术，设计不同的蓝图，并且附加各种奖励，用户购买蓝图进行拼装，成功后就可以获取奖励，并借此扩大商业和文化的影响力。</br></br>在更多的时候，世界各地的人们可以举办大型的拼图活动，来自各地的玩家们一起对巨型蓝图进行拼装，不仅可以突破交流壁垒，使玩家之间互动频繁，还可以分享不同的人生体验，使得商业和文化增添更多有趣的维度。',
          linkUrl: ''
        },
        {
          index: 'b',
          imgUrl: require('./images/3-2.png'),
          title: '第二阶段：功能拼装',
          subtitle: '功能拼装',
          description: '这是一个用户自主发掘，构建虚拟与现实的桥梁，并且赋予方块使命和价值的阶段。',
          icon: require('./images/3-1-2.png'),
          bottom_pic: require('./images/3-1-b.png'),
          content: '第二阶段将会有更多类型的AR方块出现，如：可编程方块，深度学习方块，人脸识别方块，表情识别方块，情感方块，聊天方块等。</br></br>系统、商家甚至玩家自身也会产出更多有意思的拼图模型，它们会被赋予各种功能，比如可以移动，可以说话，可以工作，甚至是更特殊的技能。</br></br>人们可以设计拼装出更多新的角色，开发新的游戏，应用新的场景，增添新的商业，并以此组成更丰富的增强世界，形成更多的故事和生态。',
          linkUrl: ''
        },
        {
          index: 'c',
          imgUrl: require('./images/3-3.png'),
          title: '第三阶段：构建增强世界',
          subtitle: '构建增强世界',
          description: '这是一个由所有玩家和商家一同重新创造新世界的阶段。',
          icon: require('./images/3-1-3.png'),
          bottom_pic: require('./images/3-1-c.png'),
          content: '当拼世界进入到更为成熟的阶段，我们会将现实商业的影响力延伸到虚拟世界中，并以此构造一个以现实世界为蓝本的增强世界。</br></br>在这个增强世界里，不仅现实中的商业可以增加更多维度，还能创造新的需求、新的产品、新的市场，甚至是新的经济体系！</br></br>商家可以利用AR技术更好的展示自己的产品，甚至可以为产品赋予灵魂！比如：一个在现实中的玩具，可以利用可编程方块，为该灵魂赋予特定的智能聊天功能；当小朋友买下这个玩具，就可以通过拼世界召唤出玩具的灵魂。</br></br>有了灵魂的商业，将赋予更多的可能。用户对增强世界的关注甚至会超越现实世界，那些原本在现实世界中因为人的思维而产生价值的东西（比如黄金、地产、服务、金融、娱乐等），也将随着用户关注度的转移而转移到增强世界中来，现实世界中所有的财富都可能在增强世界中重新创造一遍！',
          linkUrl: ''
        },
      ],
      panelShow: false,
      obj: {}
    }
  },
  methods: {
    openDialog(item) {
      this.panelShow = true
      this.obj = item
    },
    close() {
      this.panelShow = false
    },
    toDetail(item) {
      this.$router.push({path: `/NewWorld/detail/${item.index}`, query: {type: 1}})
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .part-three
    min-height 100vh
    background-repeat no-repeat
    overflow hidden
    z-index auto
    @media (min-width: 1024px) {
      background-size cover
      background-image url("./images/part-three-bg.jpg")
    }
    @media (max-width: 1024px) {
      width 100%
      height 100%
      background-image url("./images/part-three-bg.jpg")
      background-size cover
    }
    @media (max-width: 1024px) and (max-width: 1800px) {
      background-position center
    }
    .common
      .part-three-title-pic
        text-align center
        color #fff
        font-family "微软雅黑 Light"
        @media (min-width: 1200px) {
          margin 180px auto 60px
          font-size 60px
        }
        @media (max-width: 1200px) {
          padding-top 60px
          margin-bottom 20px
          font-size 25px
          font-weight bolder
        }
      .list-container
        list-style none
        display flex
        align-items center
        flex-wrap wrap
        @media (min-width: 1200px) {
          justify-content space-between
          margin 100px auto
          flex-direction row
          width 60%
        }
        @media (max-width: 1200px) {
          justify-content center
          flex-direction column
          width 100%
        }
        .item
          display flex
          flex-wrap wrap
          flex-direction column
          align-items center
          color #fff
          @media (min-width: 1600px) {
            justify-content center
            width 33%
            // margin-bottom 60px
          }
          @media (min-width: 1200px) and (max-width: 1600px) {
            height 600px
            justify-content flex-start
            width 33%
            margin-bottom 60px
          }
          @media (max-width: 1200px) {
            width 100%
            margin-bottom 60px
          }
          h5
            @media (min-width: 1200px) {
              margin-top 40px
              font-size 18px
            }
            @media (max-width: 1200px) {
              margin-top 20px
              font-size 14px
            }
          .line
            width 60px
            height 4px
            border-radius 2px
            @media (min-width: 1200px) {
              margin 30px 0
            }
            @media (max-width: 1200px) {
              margin 20px 0
            }
          &:nth-child(1)
            .line
              background-color #00e7ff
          &:nth-child(2)
            .line
              background-color #a9bb0d
          &:nth-child(3)
            .line
              background-color #ef4868
          .img
            @media (min-width: 1200px) {
              width 169px
              height 180px
            }
            @media (max-width: 1200px) {
              width 60px
              height 60px
            }
          p
            text-align center
            word-wrap break-word
            @media (min-width: 1200px) {
              margin-top 20px
              height 100px
              padding 0 20px
              font-size 16px
              line-height 28px
            }
            @media (max-width: 1200px) {
              margin-top 10px
              padding 0 10px
              font-size 12px
              width 90%
              line-height 32px
            }
          .btn
            text-align center
            border 1px solid rgba(255, 255, 255, .1)
            cursor pointer
            @media (min-width: 1400px) and (max-width: 1800px) {
              position absolute
              bottom 20px
              width 240px
              height 60px
              line-height 60px
              font-size 18px
              margin-top 60px
              z-index 999
            }
            @media (min-width: 1800px) {
              position absolute
              bottom 80px
              width 240px
              height 60px
              line-height 60px
              font-size 18px
              margin-top 60px
              z-index 999
            }
            @media (min-width: 1200px) and (max-width: 1400px) {
              position absolute
              bottom 40px
              width 240px
              height 40px
              line-height 40px
              font-size 18px
              margin-top 60px
              z-index 999
            }
            @media (max-width: 1200px) {
              width 120px
              height 40px
              line-height 40px
              font-size 14px
              margin-top 20px
            }
    .cover
      height 100%
      width 100%
      position absolute
      top 0
      left 0
      background-color rgba(0, 0, 0, .5)
</style>
