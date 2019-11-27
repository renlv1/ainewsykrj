<template>
  <div class="part-two">
    <ul class="pc">
      <li v-for="item in list" :key="item.key">
        <img class="img" :src="item.picUrl" />
        <p class="title">{{item.title}}</p>
        <p class="description">{{item.description}}</p>
        <div class="btn" v-if="item.index !== 10" @click="$router.push(`/NewWorld/detail/${item.index}`)">了解更多</div>
      </li>
    </ul>
    <div class="mobile">
      <div class="part-two-title-pic">拼世界规则</div>
      <p class="text">了解规则, 玩转拼世界</p>
      <div class="container">
        <swiper :options="swiperOptionInner">
          <swiper-slide class="item" v-for="item in list" :key="item.key" v-if="item.index !== 10">
            <img class="img" :src="item.picUrl" />
            <p class="title">{{item.title}}</p>
            <p class="description">{{item.description}}</p>
            <div class="btn" v-if="item.index !== ''" @click="$router.push(`/NewWorld/detail/${item.index}`)">了解更多
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptionInner: {
        autoHeight: true,
        // direction: 'vertical',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        height: 280, // 高度占满整个设备高度
      },
      list: [
        {
          index: 0,
          title: '（一）基础玩法',
          picUrl: require('./images/1.png'),
          description: '这是拼世界的基础，也是你改造世界的基础。',
          detail: '拼世界的玩家可以通过生产器获取游戏基础的方块，玩家也可以向官方购买或者参与商家的活动来获取各种不同的蓝图。当玩家拥有方块和蓝图时，就可以进行拼图，每当玩家完成一个拼图，就可以获取对应的数字货币奖励。在某些特定活动中，甚至可以获取更为丰厚的实物奖励。整个游戏的拼图过程完全通过AR技术来实现，玩家可以通过手机屏幕将已获取时会将每个层级的模型形状表现出来，玩家可以看到自己需要使用的拼图方块是什么样的。'
        },
        {
          index: 1,
          title: '（二）基础操作',
          picUrl: require('./images/2.png'),
          description: '拼图的基本操作分为两种模式：AR手势模式和传统AR模式',
          detail: '在游戏开始以后，系统会识别玩家的手指运动轨迹，玩家可以通过手势对整个游戏进行操作，选择自己想要拼图的蓝图，然后用手直接拿取方块，通过移动蓝图位置、旋转蓝图等操作进行拼图，整个过程就像在现实世界拼装真正的玩具。'
        },
        {
          index: 2,
          title: '（三）蓝图介绍',
          picUrl: require('./images/3.png'),
          description: '蓝图是一个3D的线框图，它会展现图本描绘的整个模型拼接完成后的造型，同时会将每个层级的模型形状表现出来，玩家可以看到自己需要使用的拼图方块是什么样的。',
          detail: '蓝图是一个3D的线框图，它会展现图本描绘的整个模型拼接完成后的造型，同时会将每个层级的模型形状表现出来，玩家可以看到自己需要使用的拼图方块是什么样的。'
        },
        {
          index: 3,
          title: '（四）生产器介绍',
          picUrl: require('./images/4.png'),
          description: '方块是拼世界的基础，而生产器产出基础方块。',
          detail: '拼世界AR方块由生产器生成。换言之，生产器是玩家获取基础拼图方块的必备机器。每个玩家进入游戏后需要租用生产器才可以产出拼图方块，生产器无等级区分，单个生产器采集速度相同，玩家可以租用多个生产器来提升采集效率。玩家在商家处使用生产器还可以额外提升方块采集效率，但是商家的可用生产器有数量限制。'
        },
        {
          index: 10,
          title: '拼世界规则',
          picUrl: '',
          description: '了解规则, 玩转拼世界'
        },
        {
          index: 4,
          title: '（五）商家规则',
          picUrl: require('./images/5.png'),
          description: '现实中的实体商户通过提交店面资料包括：照片和商铺视频等。由公司进行验证，验证通过后，在《拼世界》的地图上会给商家做出特定的标识，然后通过游戏中的系统引导玩家去进行消费和采集拼图方块、获取蓝图等行为。',
          detail: '整个增强世界最多可开通10万套生产器，每个人都可以通过竞价支付成为一套生产器一段时间的控制人，类似于租赁的概念。只要还有空闲生产器，用户只要出100美元即可租赁3年。如果所有生产器都已经被占用，那么用户需要出价高于最后一名100美元，就可以获得该生产器的控制权，之前的控制人未到期部分的租金将退回给该用户，同时还将获得溢价部分的20%。'
        },
        {
          index: 5,
          title: '（六）任务规则',
          picUrl: require('./images/6.png'),
          description: '每周不定期发布任务，参与任务，玩家不仅可以获取更多蓝图，也可以赢取丰厚奖励。',
          detail: '每周节点商家会推送1个或多个任务蓝图供玩家进行游戏，玩家可以直接在系统处购买对应的任务蓝图来开始拼图游戏。没有任务的时候，玩家也可以购买官方蓝图进行拼图，只是没有特殊奖励。蓝图的价格会根据奖励内容的不同进行调整，常规蓝图预计的价格为1-10美金。单个蓝图需要的拼图方块数量根据奖励内容的不同设置也会不同，预计的图块数量为10-200个。每个蓝图可以获得的奖励奖金根据蓝图价格和消耗的方块数量而定，预期的奖励区间为100美元-10000美元。'
        },
        {
          index: 6,
          title: '（七）收集成就',
          picUrl: require('./images/7.png'),
          description: '展现你的图集，亮出你的成就，成为拼世界的高端玩家，创造更多可能性。',
          detail: '成就系统会在游戏玩家具有一定规模之后推出。成就开启后，系统会给玩家一本图集，玩家可以点击查看目前生成的、所有类型的模型。玩家还可以收藏自己拼装的模型，只需点击收藏按钮，即可从拼图背包自动转到图集中。进入图集的模型只能查看、互动等，无法取下再次进行交易。为了鼓励玩家和商家进行模型收集，图集中还增加了收集成就的奖励。成就奖励包含：称号、特权、特殊部件和SIE奖励等普通玩家能够收集到的底端成就奖励主要以SIE奖励和称号奖励为主。中高端玩家能收集到的成就奖励以特殊部件和特权为主。商家的成就奖励则以增加生产器位置、发布蓝图次数上限、发布拼图获得次数、成为节点商人等为主。'
        },
        {
          index: 7,
          title: '（八）PVP玩法',
          picUrl: require('./images/8.png'),
          description: 'PVP大战，在交流中创造，在交流中竞争，丰富你的世界，丰富拼世界。',
          detail: '当游戏进入到成熟阶段阶段，系统会推出一个全服共同PVP的模式，加强游戏的互动性，提高玩家之间的交互和配合，也让拼图世界本身更实际的存在于这个世界范围内。在这个阶段，我们会在整个LBS地图上每个加盟的商家做一个官方标记，这些官方标记就是玩家需要占领的一座座堡垒，玩家可以利用蓝图制造飞机大炮等攻击单位来占领和守卫据点。\n' +
            '据点战的设计除了保证玩家中期阶段日常的方块和蓝图消耗，也同时为后期第三阶段的拼图世界进行铺路，当玩家创造的方块逐渐开始跟这个世界产生交互，达到更多的其他阶段时，拼世界可以直接跟更多的现实物件产生影响，玩家可以去自己创造蓝图和再利用不同方块的特性进行拼图来制造各种特定物件，甚至到后期一些大型的据点活动需要多个玩家提供各种类型的方块来共同进行生产才能制造出对应的物品。通过这个阶段来逐步进行过度，慢慢让整个拼世界丰富起来。'
        }
      ],
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .part-two
    height 100%
    color #fff
    @media (min-width: 1024px) {
      background-image url("./images/2-2.jpg")
    }
    @media (max-width: 1024px) {
      min-height 80vh
      padding-bottom 60px
      background-image url("./mobile-images/2-2-bg.png")
      display flex
      justify-content center
      align-items center
      background-size cover
    }
    .pc
      margin 0 auto
      width 60%
      height 100%
      border-left 1px solid rgba(255, 255, 255, .1)
      @media (max-width: 1800px) {
        margin 0 auto
        width 90%
      }
      li
        float left
        width 33%
        height 33%
        position relative
        display flex
        flex-direction column
        justify-content center
        align-items center
        min-width 342px
        border-right 1px solid rgba(255, 255, 255, .1)
        &:before
          content ''
          position absolute
          height 1px
          width 100%
          top -1px
          right 0
          border-right 1px solid rgba(255, 255, 255, .1)
        &:after
          content ''
          position absolute
          height 1px
          width 100%
          bottom 0
          left 0
          border-bottom 1px solid rgba(255, 255, 255, .1)
        .title
          font-size 20px
          margin 30px 0 20px
        .description
          width 85%
          text-align center
          font-size 14px
          line-height 1.5
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
        .btn
          margin-top 30px
          width 140px
          text-align center
          height 40px
          line-height 40px
          border 1px solid rgba(255, 255, 255, .1)
          font-size 14px
          cursor pointer
          z-index 10
        &:not(:nth-child(5))
          img
            width 70px
            height 65px
        &:nth-child(5)
          .title
            font-size 40px
            font-weight bolder
          .description
            font-size 20px
    .mobile
      width 236px
      height 236px
      .part-two-title-pic
        text-align center
        font-weight bolder
        margin-bottom 15px
        font-size 28px
      .text
        font-size 16px
        text-align center
        margin-bottom 60px
      .container
        padding 10px
        background rgba(0, 0, 0, .3)
        .swiper-container, .item, .swiper-slide-active
          height 100%
          width 100%
          display flex
          flex-direction column
          align-items center
          justify-content center
          .img
            width 44px
            height 44px
          .title
            font-size 14px
            margin 16px 0
          .description
            width 95%
            font-size 14px
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            text-align center
          .btn
            margin-top 10px
            height 30px
            line-height 30px
            padding 0 11px
            font-size 14px
            border 1px solid rgba(255, 255, 255, .3)
</style>
