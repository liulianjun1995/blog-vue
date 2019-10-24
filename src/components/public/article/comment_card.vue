<template>
    <div class="comment-card" v-scroll-reveal.reset>
        <p class="comment-card-title">
            <i class="iconfont" :class="icon"></i>
            {{ title }}
        </p>
        <ul class="comment-card-list">
            <li v-for="item in comments">
                <el-tooltip class="item" effect="dark" :content="'来自【'+ item.user.nickname+ '】的评论'" placement="left">
                    <div class="user-avatar">
                        <img :src="item.user.avatar" alt="">
                    </div>
                </el-tooltip>
                <router-link :to="'/article/' + item.post + '#comment-' + item.token">
                    <div class="comment-content" title="点击查看" v-html="item.content">

                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "comment_card",
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        user: {
          src: require('@/assets/img/avatar.jpg'),
          nickname: '榴莲君'
        },
        comments: {}
      }
    },
    methods: {
      fetchData() {
        let _this = this;
        _this.api.getCommentList().then((res) => {
          if (res.code) {
            _this.comments = res.data;
          }
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    mounted() {
      let _this = this;
      _this.fetchData()
    }
  }
</script>

<style scoped lang="stylus">
    .comment-card
        background #fff
        height 100%
        border 1px solid #ddd
        .comment-card-title
            background-color #fff
            line-height 20px
            padding 10px
            color #1e9fff
            border-bottom 1px solid #eaeaea
            text-align left
        .comment-card-list
            min-height 445px
            padding 15px
            li
                position relative
                min-height 50px
                margin 5px 0
                list-style none
                .user-avatar
                    padding 2px
                    position absolute
                    border 1px solid #ddd
                    img
                        height 40px
                        width 40px
                        display inline-block
                        vertical-align middle
                a
                    .comment-content
                        margin-left 60px
                        height 38px
                        padding 5px 8px
                        font-size 12px
                        overflow hidden
                        line-height 20px
                        background-color #efefef
                        color #666
                        border 1px solid #efefef
                        text-align left
                        &:after
                            content ''
                            border 10px solid rgba(255, 255, 255, 0.00)
                            border-bottom 8px solid rgba(255, 255, 255, 0.00)
                            border-top 8px solid rgba(255, 255, 255, 0.00)
                            border-right-color #efefef
                            position absolute
                            top 12px
                            left 42px
                            display block
</style>