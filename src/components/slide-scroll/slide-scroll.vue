<template>
  <div>
    <ul class="scroll-wrapper-defined">
      <li class="item" @click="chooseSlide(index)" v-for="(item, index) in slideArray" :key="item" :class="{active: currentIndex === index}">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    slideArray: {
      type: Array,
      request: true
    }
  },
  methods: {
    chooseSlide(index) {
      this.currentIndex = index
      this.$emit('outputIndex', index)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.scroll-wrapper-defined
  position fixed
  top 0
  right 0
  display flex
  flex-direction column
  height 100vh
  z-index 999
  .item
    width 45px
    display flex
    flex 1
    align-items center
    justify-content center
    color #fff
    list-style none
    background-color rgba(0, 0, 0, .1)
    cursor pointer
    user-select none
    &.active
      background-color rgba(255, 255, 255, .1)
      position relative
      &::before
        position absolute
        content ''
        display block
        top 55%
        left 50%
        transform translate(-50%, -50%)
        width 18px
        height 3px
        background-color #ff2841
        z-index -999
</style>
