<template>
  <div>
    <div class="detail">
      <div class="content">
        <h5>{{title}}</h5>
        <p class="text" v-html="description"></p>
        <div class="back">
          <img v-if="!$route.query.type" @click="$router.push({path: '/NewWorld', query: {flag: 1}})" width="26" height="16" src="./images/back.png"/>
          <img v-if="$route.query.type" @click="$router.push({path: '/home', query: {flag: 1}})" width="26" height="16" src="./images/back.png"/>
          <span>了解其他规则</span>
        </div>
      </div>
      <div class="container-line">
        <div class="child-line"></div>
        <div class="child-line"></div>
        <div class="child-line"></div>
        <div class="child-line"></div>
        <div class="child-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      detailDetail: [
        {
          "index": "0",
          "title": "基础玩法",
          "description": "<p>拼世界的玩家可以通过生产器获取游戏基础的方块，玩家也可以向官方购买或者参与商家的活动来获取各种不同的蓝图。当玩家拥有方块和蓝图时，就可以进行拼图，每当玩家完成一个拼图，就可以获取对应的数字货币奖励。</P><br/><p>在某些特定活动中，甚至可以获取更为丰厚的实物奖励。整个游戏的拼图过程完全通过AR技术来实现，玩家可以通过手机屏幕将已获取的蓝图以3D的形式投影到现实的物件上，比如桌面或者其他位置。蓝图会将玩家目前的拼图进度完整的展现出来，玩家就可以进行拼图操作了。</p>"
        },
        {
          "index": "1",
          "title": "基础操作",
          "description": "<p>（1）AR手势模式: 在游戏开始以后，系统会识别玩家的手指运动轨迹，玩家可以通过手势对整个游戏进行操作，选择自己想要拼图的蓝图，然后用手直接拿取方块，通过移动蓝图位置、旋转蓝图等操作进行拼图，整个过程就像在现实世界拼装真正的玩具; </p><p>（2）传统AR模式: 玩家通过手机屏幕按键进行操作，同时通过移动手机来控制摆放位置和蓝图的旋转等操作，这种操作模式简单易上手，作为前者的辅助模式，这个模式更适合习惯通过手机来操作的用户使用。<p>"
        },
        {
          "index": "2",
          "title": "蓝图介绍",
          "description": "蓝图是一个3D的线框图，它会展现图本描绘的整个模型拼接完成后的造型，同时会将每个层级的模型形状表现出来，玩家可以看到自己需要使用的拼图方块是什么样的。"
        },
        {
          "index": "3",
          "title": "生产器介绍",
          "description": "<p>拼世界AR方块由生产器生成。换言之，生产器是玩家获取基础拼图方块的必备机器。每个玩家进入游戏后需要租用生产器才可以产出拼图方块，生产器无等级区分，单个生产器采集速度相同，玩家可以租用多个生产器来提升采集效率。玩家在商家处使用生产器还可以额外提升方块采集效率，但是商家的可用生产器有数量限制。</p><p>PS：为了让游戏中的方块维持基础价值，不至于快速的通货膨胀，在游戏中方块的采集速度和方块的消耗速度有直接的关联。单个生产器方块采集数量=当天方块消耗数量/当日生产器数量/24+商家生产位奖励数量+生产器基础采集数量</p>"
        },
        {
          "index": "4",
          "title": "商家规则",
          "description": "现实中的实体商户通过提交店面资料包括：照片和商铺视频由公司进行验证"
        },
        {
          "index": "5",
          "title": "任务规则",
          "description": "每周节点商家会推送1个或多个任务蓝图供玩家进行游戏，玩家可以直接在系统处购买对应的任务蓝图来开始拼图游戏。没有任务的时候，玩家也可以购买官方蓝图进行拼图，只是没有特殊奖励。</br>蓝图的价格会根据奖励内容的不同进行调整，常规蓝图预计的价格为1-10美金。单个蓝图需要的拼图方块数量根据奖励内容的不同设置也会不同，预计的图块数量为10-200个。每个蓝图可以获得的奖励奖金根据蓝图价格和消耗的方块数量而定，预期的奖励区间为100美元-10000美元。"
        },
        {
          "index": "6",
          "title": "收集成就",
          "description": "成就系统会在游戏玩家具有一定规模之后推出。</br>成就开启后，系统会给玩家一本图集，玩家可以点击查看目前生成的、所有类型的模型。</br>玩家还可以收藏自己拼装的模型，只需点击收藏按钮，即可从拼图背包自动转到图集中。进入图集的模型只能查看互动等，无法取下再次进行交易。</br>为了鼓励玩家和商家进行模型收集，图集中还增加了收集成就的奖励。成就奖励包含：称号、特权、特殊部件和SIE奖励等。</br>普通玩家能够收集到的底端成就奖励主要以SIE奖励和称号奖励为主。</br>中高端玩家能收集到的成就奖励以特殊部件和特权为主。</br>商家的成就奖励则以增加生产器位置、发布蓝图次数上限、发布拼图获得次数、成为节点商人等为主。"
        },
        {
          "index": "7",
          "title": "PVP玩法",
          "description": "当游戏进入到成熟阶段阶段，系统会推出一个全服共同PVP的模式，加强游戏的互动性，提高玩家之间的交互和配合，也让拼图世界本身更实际的存在于这个世界范围内。在这个阶段，我们会在整个LBS地图上每个加盟的商家做一个官方标记，这些官方标记就是玩家需要占领的一座座堡垒，玩家可以利用蓝图制造飞机大炮等攻击单位来占领和守卫据点。</br>据点战的设计除了保证玩家中期阶段日常的方块和蓝图消耗，也同时为后期第三阶段的拼图世界进行铺路，当玩家创造的方块逐渐开始跟这个世界产生交互，达到更多的其他阶段时，拼世界可以直接跟更多的现实物件产生影响，玩家可以去自己创造蓝图和再利用不同方块的特性进行拼图来制造各种特定物件，甚至到后期一些大型的据点活动需要多个玩家提供各种类型的方块来共同进行生产才能制造出对应的物品。通过这个阶段来逐步进行过度，慢慢让整个拼世界丰富起来。"
        }
      ]
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      const id = this.$route.params.id
      this.detailDetail.forEach((item) => {
        if (String(item.index) === id) {
          this.title = item.title
          this.description = item.description
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail
    position absolute
    min-height 100vh
    width 100%
    background-color #0d1b2a
    color #fff
    overflow hidden
    z-index auto
    .content
      height 100%
      padding 0 40px
      margin 0 auto
      display flex
      flex-direction column
      justify-content center
      @media (min-width: 1024px) {
        margin-top 200px
        width 60%
        padding-bottom 40px
      }
      @media (max-width: 1024px) {
        width 100%
        padding-bottom 20px
      }
      h5
        @media (min-width: 1024px) {
          font-size 60px
        }
        @media (max-width: 1024px) {
          font-size 40px
          margin-top 100px
        }
      .text
        @media (min-width: 1024px) {
          margin-top 100px
          font-size 20px
          line-height 48px
        }
        @media (max-width: 1024px) {
          margin-top 60px
          font-size 16px
          line-height 2
        }
        p
          margin-top 50px
      .back
        margin-top 40px
        display flex
        align-items center
        font-size 16px
        @media (min-width: 1024px) {
          font-size 20px
        }
        @media (max-width: 1024px) {
          font-size 16px
        }
        img
          margin-right 10px
          cursor pointer
          z-index 10
  .container-line
    position absolute
    top 0
    bottom 0
    width 100%
    height 100%
    display flex
    .child-line
      flex 1
      border-left 1px solid #fff
      opacity .1
</style>
