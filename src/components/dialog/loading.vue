<template>
  <div class="load-more-box">
    <div class="loading-img">
      <img src="../../assets/imgRick/loading.gif">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //  加载中的样式
  .load-more-box
    padding 60px
    .desc
      font-size: 14px
      color: #999;
      text-align: center;
      margin-top: 20px;
    .loading-img
      width: 30px;
      height: 30px;
      margin: 3px auto 0;
      img
        width: 100%
        height: 100%
</style>
