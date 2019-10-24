<template>
    <div class="notFound">
        <h1>
            <span class="infinite"><i class="iconfont el-icon-ali-ku"></i></span>
        </h1>
        <p>嗨呀~你访问的页面不存在</p>
        <h3>
            <a href="javascript:" @click="back"><i class="el-icon-ali-Left-"></i>返回</a>
            <a href="/"><i class="el-icon-ali-home"></i>网站首页</a>
        </h3>
        <h4>Tips：您可能输入了错误的网址，或者该网页已删除或移动</h4>
    </div>
</template>

<script>
  export default {
    name: "notFound",
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus">
    @keyframes scaleDraw
        0%
            transform scale(1)
        25%
            transform: scale(1.1)
        50%
            transform scale(1)
        75%
            transform scale(1.1)
    .notFound
        padding 30px 0
        text-align center
        h1
            .infinite
                display inline-block
                -webkit-animation scaleDraw 5s ease-in-out infinite
                i
                    line-height 500px
                    font-size 400px
        p
            font-size 20px
            font-weight 300
        h3
            font-size 16px
            margin 20px 0
            color #999
            font-weight 400
            a
                padding 10px 20px
                color #009688
                &:hover
                    color #007a6f
                i
                    text-align center
                    width 1.29rem
        h4
            margin 20px 0
            color #999
            font-weight 400
</style>