<template>
  <div>
    <ul class="aside_list" ref="elememt" :class="{'fixLeft' : !fixDecorationRight, 'fixRight' : fixDecorationRight}">
      <li class="aside_item"
          v-for="(item, index) in num"
          :key="index"
          ref="lis"
          :style="{height: height + 'px'}"
          @click="sentToParent(index)">
        <div class="text" :class="{'active' : index === activeitem, 'iRight' : fixDecorationRight, 'iLeft' : !fixDecorationRight}"><i>0{{item}}</i></div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['num', 'activeitem'],
    data () {
      return {
        fixDecorationRight: true,
        height: 0
      }
    },
    methods: {
      sentToParent (index) {
        this.$emit('changeActiveitem', index)
      },
      initializeFn () {
        if (this.$route.path === '/') {
          this.fixDecorationRight = false
        } else {
          this.fixDecorationRight = true
        }
        let boxHeight = this.$refs.elememt.offsetHeight
        let liHeight = boxHeight / this.num
        this.height =liHeight
      }
    },
    created() {
    },
    mounted () {
      this.$nextTick(() => {
        this.initializeFn()
      })
    }
  }
</script>
<style lang="less" scoped>
  .aside_list {
    @media screen and (max-width: 1024px){
      display: none;
    }
    .fix;
    top:50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    height: 100vh;
    width: 44px;
    background-color: rgba(0,0,0, .2);
    z-index: 9999;
    @media (max-width: 1024px) {
      display: none;
    }
    .flex;
    flex-flow: wrap;
    align-items: center;
    .aside_item {
      .rel;
      width: 100%;
      &:hover {
        .cur;
      }
      &:hover .text{
        background-color: rgba(0,0,0, .1);
        opacity: .8;
      }
      .text {
        .abs;
        .vc;
        width: 100%;
        height: 100%;
        color: @default;
        .flex;
        align-items: center;
        justify-content: center;
        .f28;
        i{
          position: relative;
          font-size: 20px;
          &:after{
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #ff3e54;
            transition: all linear .2s;
          }
        }
        &.active {
          width: 100%;
          background-color: rgba(255,255,255, .1);
          position: relative;
          &:after{
            content: '';
            display: inline-block;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            height: 100%;
            //background-color: rgba(255,255,255, .3);
            background: linear-gradient(to bottom, rgba(255, 61, 90, .6), rgba(255,255,255, .6));
          }
          i{
            &:after{
              width: 100%
            }
          }
        }
      }
      .iRight{
        right:0;
      }
      .iLeft{
        left:0;
      }
    }
  }
  .fixLeft{
    left:0;
  }
  .fixRight{
    right: 0;
  }
</style>
