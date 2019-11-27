<template>
  <div class="download">
    <div class="main">
      <div class="main-box box">
        <p style="color: red; line-height: 27px;">AI新技术（2019.09.25）</p>
      </div>
      <div class="main-box box anchor" :id="'anchor'+0">
        <p style="color: #BD4DFF">八、边缘计算</p>
        <p style="color: red">MobiledgeX</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/8.1.mp4" type="video/mp4">
          </video>
        </div>
        <a href="https://mobiledgex.com/" target="_blank">官网</a>
        <p>简介：MobiledgeX不只运用在AR技术上，广泛计算技术详见官网介绍
          MobiledgeX在全球范围内汇总了移动运营商的基础架构，协调使用，并展示了的新边缘功能。包括：边缘云、Cloudlets、API SDK</p>
      </div>
      <div class="main-box box anchor" :id="'anchor'+1">
        <p style="color: #BD4DFF">九、机器学习</p>
        <p style="color: red">VR Facial Animation via Multiview Image Translation</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/9.1.mp4" type="video/mp4">
          </video>
        </div>
        <a href="https://research.fb.com/publications/vr-facial-animation-via-multiview-image-translation/" target="_blank">官网</a>
        <p>简介：通过机器学习脸部表情，绘制模型</p>
      </div>
      <div class="main-box box anchor" :id="'anchor'+2">
        <p style="color: #BD4DFF">十、机器学习（层次控制）</p>
        <p style="color: red">Learning Composable Hierarchical Control</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/10.1.mp4" type="video/mp4">
          </video>
        </div>
        <a href="https://xbpeng.github.io/projects/MCP/" target="_blank">官网</a>
        <p>简介：学习具有乘法组合策略的可组合层次控制</p>
      </div>
      <div class="main-box box anchor" :id="'anchor'+3">
        <p style="color: #BD4DFF">十一、深度脸部交换AI</p>
        <p style="color: red">深度脸部交换计算</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/11.1.mp4" type="video/mp4">
          </video>
        </div>
        <p>简介：面部交换GAN（FSGAN），用于面部交换和重新制定。与以前的工作不同，FSGAN具有不可知论的特性，可以应用于两副面孔，而无需对这些面孔进行训练。为此，我们描述了许多技术贡献。我们推导了一种基于新颖的递归神经网络（RNN）的面部重现方法，该方法可以针对姿势和表情变化进行调整，并且可以应用于单个图像或视频序列。对于视频序列，我们基于重新制定，Delaunay三角剖分和重心坐标引入人脸视图的连续插值。遮挡的面部区域由面部完成网络处理。最后，我们使用面部融合网络将两个面部无缝融合，同时保留目标皮肤的颜色和光照条件。该网络使用新颖的Poisson混合损耗，将Poisson优化与感知损耗结合在一起。我们将我们的方法与现有的最先进的系统进行了比较，并表明我们的结果在质量和数量上都优越。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .download
    display flex
    flex-direction row
    flex-wrap wrap
    font-size 20px
    margin-top 184px
    @media screen and (max-width: 768px) {
      width 100%
      padding-left 20px
      padding-right 20px
      margin 30px auto
      font-size 16px
      padding-bottom 30px
      margin-top 130px
    }
    .main
      width 1400px
      height auto
      background-color #fff
      margin 0 auto
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
          top 0px
          left 0px
          right 0px
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
        margin 100px auto
        width 1200px
        display flex
        flex-direction column
        font-size 18px
        @media screen and (max-width: 768px) {
          margin-top 0
          margin-bottom 30px
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
          //z-index -1
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
        p
          margin-bottom 10px
        img
          width 500px
          @media screen and (max-width: 768px) {
            width 100%
            margin 0 auto 10px
          }
</style>
