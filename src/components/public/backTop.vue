<template>
    <div class="backTop" v-if="show" title="返回顶部" @click="goTop">
        <i class="iconfont el-icon-ali-fanhuidingbu"></i>
    </div>
</template>

<script>
  export default {
    name: "backTop",
    data() {
      return {
        scrollTop: 0,
        show: false,
      }
    },
    methods: {
      goTop() {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        })
      },
      scrollToTop() {
        let _this = this
        _this.scrollTop  = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        _this.show = _this.scrollTop > 60;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    watch: {
      // '$route': {
      //   handler: 'goTop',
      // }
    }
  }
</script>

<style scoped lang="stylus">
    .backTop
        position fixed
        right 50px
        bottom 50px
        width 50px
        height 50px
        cursor pointer
        border-radius 50%
        background-color #9F9F9F
        display flex
        justify-content center
        align-items center
        opacity 0.95
        z-index 5
        &:hover
            opacity .85
        .iconfont
            font-size 30px
</style>