<template>
    <div class="link_card"  v-scroll-reveal.reset>
        <p class="card-title">
            <i class="iconfont el-icon-ali-link"></i>
            友情链接
        </p>
        <ul class="link_list">
            <li v-for="item in blogrolls">
                <a target="_blank" :href="item.link" :title="item.title">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "link_card",
    data() {
      return {
        blogrolls: [],
      }
    },
    methods: {
      fetchData() {
        let _this = this;
        _this.api.getBlogrollList().then((res) => {
          if (res.code) {
            _this.blogrolls = res.data;
          }
        })
      }
    },
    mounted() {
      this.fetchData()
    }
  }
</script>

<style scoped lang="stylus">
    .link_card
        background #fff
        height 100%
        border 1px solid #ddd
        .card-title
            background-color #fff
            line-height 20px
            padding 10px
            color #1e9fff
            border-bottom 1px solid #eaeaea
            text-align left
        .link_list
            padding 10px 15px
            text-align left
            li
                display inline-block
                vertical-align middle
                padding 2px 5px
                a
                    color #333
                    font-size 14px
                    &:hover
                        color #01aaed
                        transition all .2s
</style>