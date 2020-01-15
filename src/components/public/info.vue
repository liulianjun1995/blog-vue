<template>
  <div v-scroll-reveal.reset class="info">
    <div class="info-avatar">
      <img :src="info.avatar" :alt="info.nickname">
    </div>
    <div class="info-info">
      <p class="info-nickname">{{ info.nickname }}</p>
      <p class="info-introduce">{{ info.introduce }}</p>
      <p class="info-location"><i class="iconfont el-icon-ali-locationicon" /> {{ info.location }}</p>
    </div>
    <div class="info-contact">
      <a href="#" title="QQ交流"><i class="iconfont el-icon-ali-qq" /></a>
      <a href="#" title="给我写信"><i class="iconfont el-icon-ali-email1" /></a>
      <a href="#" title="新浪微博"><i class="iconfont el-icon-ali-weibo1" /></a>
      <a href="#" title="GitHub"><i class="iconfont el-icon-ali-github" /></a>
    </div>
    <div class="info-statistics">
      <div class="item">
        <span>{{ articleCount }}</span>
        <p>博文</p>
      </div>
      <div class="item">
        <span>0</span>
        <p>细语</p>
      </div>
      <div class="item">
        <span>{{ commentCount }}</span>
        <p>评论</p>
      </div>
      <div class="item">
        <span>0</span>
        <p>留言</p>
      </div>
    </div>
    <div class="info-runtime">
      博客已运行 <span class="runtime">{{ runtime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    articleCount: {
      type: Number,
      default: 0
    },
    commentCount: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      info: {
        avatar: require('@/assets/img/avatar.jpg'),
        nickname: '榴莲君',
        introduce: '一枚90后程序员，PHP开发工程师',
        location: '北京 - 朝阳'
      },
      runtime: ''
    }
  },
  mounted() {
    const _this = this
    // _this.getLocation().then( _ => {
    //   // _this.api.getWeather(returnCitySN['city'])
    //   console.log(returnCitySN.cname);
    // })
    setInterval(function() {
      _this.getRunTime()
    }, 1000)
  },
  methods: {
    getWeather() {

    },
    getLocation() {
      return new Promise(resolve => {
        var script = document.createElement('script')
        script.src = 'http://pv.sohu.com/cityjson?ie=utf-8'
        script.async = true
        script.onload = script.onreadystatechange = function() {
          if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
            resolve()
            script.onload = script.onreadystatechange = null
          }
        }
        document.getElementsByTagName('head')[0].appendChild(script)
      })
    },
    getRunTime() {
      const _this = this

      const start = new Date('2018-8-10')
      const now = new Date().getTime()
      const diff_time = now - start
      const px_d = 1000 * 60 * 60 * 24
      const px_h = 1000 * 60 * 60
      const px_m = 1000 * 60
      const px_s = 1000
      const d = Math.floor(diff_time / px_d)
      const h = Math.floor((diff_time - d * px_d) / px_h)
      const m = Math.floor((diff_time - d * px_d - h * px_h) / px_m)
      const s = Math.floor((diff_time - d * px_d - h * px_h - m * px_m) / px_s)

      _this.runtime = `${d}天 ${h}时 ${m}分 ${s}秒`
    }
  }
}
</script>

<style scoped lang="stylus">
    .info
        padding 10px
        text-align center
        background-color #ffffff
        border 1px solid #ddd
        position relative
        .info-avatar
            float left
            padding 2px
            border 1px solid #f2f2f2
            margin-bottom 15px
            img
                width 100px
                height 100px
                vertical-align middle
        .info-info
            float left
            @media (min-width: 992px)
                width 165px
            @media (min-width: 1200px)
                width 232px
            padding 0 10px
            text-align left
            margin-bottom 15px
            .info-nickname
                font-size 28px
                font-weight bold
                margin 0 10px 0 10px
            .info-introduce
                font-size 13px
                margin 10px auto
                width 90%
            .info-location
                color #808080
                margin 0 10px
        .info-contact
            padding 10px
            clear both
            border-bottom 1px solid #f2f2f2
            a
                padding 5px
                margin 0 10px
                display inline-block
                border 1px solid #ddd
                border-radius 6px
                transition all .2s
                color #555
                .iconfont
                    font-size 2em
                 &:hover
                    color #fff
                 &:nth-child(1):hover
                    background-color #00b0fb
                    border 1px solid #00b0fb
                &:nth-child(2):hover
                    background-color #37649d
                    border 1px solid #37649d
                &:nth-child(3):hover
                    background-color #b22222
                    border 1px solid #b22222
                &:nth-child(4):hover
                    background-color #0a0203
                    border 1px solid #0a0203
        .info-statistics
            margin 0 -3px
            margin-top 10px
            display flex
            -webkit-box-align center
            align-items center
            .item
                -webkit-box-flex 1
                flex 1 1 auto
                margin 0 3px
                padding 5px 0
                color #666
                background-color #f2f2f2
        .info-runtime
            margin-top 10px
            font-size 14px
            background-color #01aaed
            color #fff
            padding 10px
            line-height 19px
            text-shadow 2px 2px #009688
            .runtime
                margin-left 4px
</style>
