<template>
    <div class="footer">
<!--        <p>-->
<!--            <a href="javascript:" @click="tip">文章归档</a>-->
<!--            <a href="javascript:" @click="tip">网站地图</a>-->
<!--            <a href="javascript:" @click="tip">联系作者</a>-->
<!--            <a href="javascript:" @click="tip">小额赞赏</a>-->
<!--        </p>-->
        <p>
            <span>Copyright</span>
            <span>©</span>
            <span>2018 - 2019</span>
            <a href="/">liulianjun.top</a>
            <a href="#">豫ICP备19018938号-1</a>
        </p>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        APP_URL: process.env.APP_URL
      }
    },
    methods: {
      tip() {
        this.$layer.msg('正在制作')
      }
    }
  }
</script>

<style scoped lang="stylus">
    .footer
        text-align center
        padding 15px 0
        background-color #393d49
        color #f2f2f2
        border-top 4px solid #01aaed
        p
            margin 7px 0
            font-size 14px
            a, span
                padding-left 7px
                color #eaeaea
</style>
