<template>
  <div id="app">
    <!--<v-header class="v-header"></v-header>-->
    <router-view class="main-container" />
  </div>

</template>
<script>
/*import vHeader from '@/components/header/aiHeader'*/

export default {
  /*components: {vHeader}*/
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "./assets/css/reset.css"
  @import "./assets/css/base.css"
  #app
    position relative
    .v-header
      position fixed
      top 0
      z-index 900
    .main-container
      position relative
  #nprogress .bar {
    background: #0090ff !important; // 进度条颜色
    z-index: 999999 !important;
  }
</style>
