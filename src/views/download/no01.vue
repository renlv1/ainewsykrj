<template>
  <div class="download">
    <div class="main">
      <div class="main-box box">
        <p style="color: red; line-height: 27px;">AI新技术（2019.09.23）</p>
      </div>
      <div class="main-box box anchor" :id="'anchor'+0">
        <p style="color: #BD4DFF">一、人脸识别</p>
        <p style="color: red">face_recognition</p>
        <a href="https://github.com/ageitgey/face_recognition" target="_blank"></a>
        <p>简介：Python人脸识别api和命令行</p>
        <img src="./images/demo/1.png" />
      </div>
      <div class="main-box box anchor" :id="'anchor'+1">
        <p style="color: #BD4DFF">二、OpenCV</p>
        <p style="color: red">Lane Detection</p>
        <p>简介：车道检测，GPS数据模拟(设备尚未连接)，正在进行中。用于图像处理的OpenCV。</p>
        <a href="https://docs.opencv.org/3.4.1/d7/d8b/tutorial_py_lucas_kanade.html" target="_blank">官网</a>
        <p style="color: red">Lane detection and object detection</p>
        <p>简介：从网络摄像头的反馈中，程序将使用OpenCV识别车道标记。运动跟踪是通过Lucas-Kanade光流实现的。</p>
        <a href="https://github.com/tensorflow/models/tree/master/research/object_detection" target="_blank">github</a>
        <div class="video-box">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/2.1.mp4" type="video/mp4">
          </video>
          <video width="320" height="240" controls>
            <source src="http://world.babe2018.com/media/aivideo/2.2.mp4" type="video/mp4">
          </video>
        </div>
        <img src="./images/demo/2.png" />
      </div>
      <div class="main-box box anchor" :id="'anchor'+2">
        <p style="color: #BD4DFF">三、激光雷达</p>
        <p style="color: red">Lane Detection</p>
        <p>简介：这项工作的重点是检测三维道路特征，自动构建高清地图。这些特征包括视频中显示的(黄色)车道和(蓝色)道路边界等。通过将深卷积网络应用到我们的HERE real
          LiDAR中，我们捕获了三维几何和表面反射率，从而产生厘米级的精确三维特征。</p>
        <a href="https://www.here.com/" target="_blank">官网</a>
        <video class="video" style="margin-bottom: 30px" width="320" height="240" controls>
          <source src="https://qhouse.blob.core.windows.net/aivideo/3.1.mp4" type="video/mp4">
        </video>
      </div>
      <div class="box">
        <p style="color: #BD4DFF" class="main-box box anchor" :id="'anchor'+3">四、脸部识别资料</p>
        <p style="color: red">4.1 表情识别案例</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/4.1.1.mp4" type="video/mp4">
          </video>
          <video width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/4.1.2.mp4" type="video/mp4">
          </video>
        </div>
        <p style="color: red">4.2 脸部识别ARkit Demo</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/4.2.1.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/4.2.2.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/4.2.3.mp4" type="video/mp4">
          </video>
        </div>
        <p style="color: red">4.3 脸部识别Open CV</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/4.3.1.mp4" type="video/mp4">
          </video>
        </div>
        <p>Open CV FaceMask</p>
        <p>功能描述：脸部识别，脸部遮罩</p>
        <p>条件：无</p>
        <p>实现情况：可实现</p>
        <a href="https://enoxsoftware.com/" target="_blank">其他说明</a>
        <a href="https://github.com/EnoxSoftware/FaceMaskExample" target="_blank">技术支持</a>
        <img src="./images/demo/3.png" />
      </div>
      <div class="main-box box anchor" :id="'anchor'+4">
        <p style="color: #BD4DFF">五、全息技术</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/5.1.mp4" type="video/mp4">
          </video>
        </div>
        <p style="color: red">Holus 交互式全息屏幕</p>
        <p>简介：
          这是一种被设计成放在桌子上的设备，能够将三维内容转换成二维。您还可以播放3D内容。我们可以把它和我们的智能手机连接起来，发送视频，我们可以从任何角度观看，也可以与他们互动。这项技术也可以应用于视频游戏，在三维空间中显示场景和角色。另一个用途可能与视频通话应用程序有关，这样你就可以看到对方，就好像他们真的在你面前。总的来说，全息图提供了许多可能性，这是Holus最吸引人的地方。该设备有两个版本，一个基本版本为智能手机提供两个加载端口，另一个专业版本为HDMI端口和用于开发应用程序的SDK。</p>
        <a href="https://hplustech.com" target="_blank">官网</a>
      </div>
      <div class="box">
        <p style="color: #BD4DFF" class="main-box box anchor" :id="'anchor'+5">六、深度摄像头资料</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.1.1.mp4" type="video/mp4">
          </video>
        </div>
        <p style="color: red">6.1 4KRCNN COCO对象检测</p>
        <p>功能描述：道路对象检测，活跃状态，图像中对象的每个实例生成边界框和分割蒙版</p>
        <p>条件：设备</p>
        <p>实现情况：可实现</p>
        <p>其他说明：无 </p>
        <a href="https://github.com/karolmajek/Mask_RCNN" target="_blank">技术支持</a>
        <img src="./images/demo/4.png" />
      </div>
      <div class="box">
        <p style="color: red">6.2 RTAB-Map地形识别建造</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.2.1.mp4" type="video/mp4">
          </video>
        </div>
        <p>RTAB-Map Tango</p>
        <p>功能描述：基于RGB-D，用于映射的3D激光雷达，快速建在模型</p>
        <p>条件：移动设备</p>
        <p>实现情况：可实现</p>
        <a href="https://play.google.com/store/apps/details?id=com.introlab.rtabmap" target="_blank">其他说明</a>
        <a href="http://introlab.github.io/rtabmap/" target="_blank">技术支持</a>
        <img src="./images/demo/5.png" />
      </div>
      <div class="box">
        <p  style="color: red">6.3 车辆行驶检测</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.3.1.mp4" type="video/mp4">
          </video>
        </div>
        <p>Udacity SDC项目</p>
        <p>功能描述：行驶道路中对道路车距方位进行检测，对来往车辆进行捕捉</p>
        <p>条件：设备</p>
        <p>实现情况：无</p>
        <p>其他说明：无</p>
        <p>技术支持：无</p>
        <img src="./images/demo/6.png" />
      </div>
      <div class="box">
        <p style="color: red">6.4 道路识别检测</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.4.1.mp4" type="video/mp4">
          </video>
        </div>
        <p>Advance Lane Finding</p>
        <p>功能描述：使用强大的车道跟踪算法覆盖车道标记并测量道路曲率，偏移，甚至尝试测量车辆的速度，这更具实验性。车道跟踪算法使用搜索多个方向的耦合卷积并且被约束为样条曲率</p>
        <p>条件：设备</p>
        <p>实现情况：可实现</p>
        <p>其他说明：无</p>
        <a href="https://github.com/awbrown90/Advance-Lane-Finding" target="_blank">技术支持</a>
        <img src="./images/demo/11.png" />
      </div>
      <div class="box">
        <p style="color: red">6.5 人物动作捕捉跟踪</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.5.1.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.5.2.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.5.3.mp4" type="video/mp4">
          </video>
        </div>
        <p>Kinect深度摄像头动作捕捉</p>
        <p>功能描述：跟踪身体的每个部位进行连贯动作捕捉 以及表情动作捕捉</p>
        <p>条件：Kinect摄像头（Windows</p>
        <p>实现情况：可实现</p>
        <a href="https://developer.microsoft.com/en-us/windows/kinect" target="_blank">其他说明</a>
        <a href="https://docs.microsoft.com/en-us/previous-versions/windows/kinect/dn799271(v=ieb.10)" target="_blank">技术支持</a>
        <img src="./images/demo/7.png" />
      </div>
      <div class="box">
        <p style="color: red">6.6 手部跟踪-移动设备</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.6.1.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.6.2.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.6.3.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.6.4.mp4" type="video/mp4">
          </video>
        </div>
        <p>ManoMotion</p>
        <p>功能描述：智能手机实时捕捉手势</p>
        <p>条件：移动设备</p>
        <p>实现情况：可实现</p>
        <a href="https://www.manomotion.com/plans/" target="_blank">其他说明</a>
        <a href="https://www.manomotion.com" target="_blank">技术支持</a>
        <img src="./images/demo/8.png" />
      </div>
      <div class="box">
        <p style="color: red">6.7 手部跟踪识别-穿戴设备</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.7.1.mp4" type="video/mp4">
          </video>
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.7.2.mp4" type="video/mp4">
          </video>
        </div>
        <p>Leap Motion</p>
        <p>功能描述：智能手机实时捕捉手势</p>
        <p>条件：移动设备</p>
        <p>实现情况：可实现</p>
        <a href="https://www.manomotion.com/plans/" target="_blank">其他说明</a>
        <a href="https://www.manomotion.com" target="_blank">技术支持</a>
      </div>
      <div class="box">
        <p style="color: red">6.8 手机扫描建模</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/6.8.1.mp4" type="video/mp4">
          </video>
        </div>
        <p>RTAB Map Tango</p>
        <p>功能描述：扫描记录实施建模</p>
        <p>条件：设备，移动设备，Mack book</p>
        <p>实现情况：可实现</p>
        <p>其他说明：无</p>
        <a href="https://github.com/introlab/rtabmap/wiki/Multi-Session-Mapping-with-RTAB-Map-Tango"
           target="_blank">技术支持</a>
        <a href="https://sketchfab.com/3d-models/ski-cottage-stoneham-1d5c27029ebd4a7ab618f96b108a3683" target="_blank">整体建造后模型</a>
        <img src="./images/demo/9.png" />
      </div>
      <div class="box">
        <p style="color: red">6.9 物体边缘检测</p>
        <p>based approach</p>
        <p>功能描述：三维无纹理目标基于边缘检测与跟踪</p>
        <p>条件：设备</p>
        <p>实现情况：未知</p>
        <a href="https://github.com/introlab/rtabmap/wiki/Multi-Session-Mapping-with-RTAB-Map-Tango"
           target="_blank">其他说明</a>
        <p>技术支持：无</p>
        <img src="./images/demo/10.png" />
      </div>
      <div class="main-box box anchor" :id="'anchor'+6">
        <p style="color: #BD4DFF">七、 硬件秘钥</p>
        <div class="video-box" style="margin: 30px 0">
          <video class="video" width="320" height="240" controls>
            <source src="https://qhouse.blob.core.windows.net/aivideo/7.1.mp4" type="video/mp4">
          </video>
        </div>
        <p style="color: red">Hideez</p>
        <a href="https://hideez.com/" target="_blank">官网</a>
        <p>简介：Hideez为企业和个人用户提供身份和访问管理解决方案。旗舰产品Hideez
          Key，是一个紧凑的，可存储的，集蓝牙功能于一体的硬件密钥，它可以作为一个安全的密码管理器，用于pc机的接近锁/解锁，以及电子开门器。Hideez专注于为个人设计的企业级网络安全解决方案。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
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
