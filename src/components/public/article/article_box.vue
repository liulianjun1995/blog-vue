<template>
    <div class="article-box">
        <p class="box-title">
            <i class="iconfont" :class="icon"></i>
            {{ title }}
        </p>
        <div class="article" v-scroll-reveal.reset v-for="(item, index) in articles" :key="index">
            <div v-show="item.is_recommend" class="flag flag-left">推荐</div>
            <div class="article-left">
                <img v-lazy="item.cover" :src="item.cover" :alt="item.title" draggable="false" preview="1" :preview-text="item.title">
            </div>
            <div class="article-right">
                <div class="article-title">
                    <router-link class="read" :to="'/article/' + item.token" :title="item.title">{{ item.title }}</router-link>
                </div>
                <div class="article-abstract" :title="item.abstract">
                    {{ item.abstract }}
                </div>
                <div class="article-footer">
                    <span class="article-footer-icon category" v-if="item.category">
                        <el-tooltip class="item" effect="dark" content="分类" placement="bottom">
                            <i class="el-icon-menu"></i>
                        </el-tooltip>
                        <router-link class="tag-name" :to="'/category/' + item.category.title" :title="item.category.title">{{ item.category.title }}</router-link>
                    </span>
                    <span class="article-footer-icon tags" v-if="item.tags.length">
                        <el-tooltip class="item" effect="dark" content="标签" placement="bottom">
                            <i class="iconfont el-icon-ali-tag1"></i>
                        </el-tooltip>
                        <template v-for="tag in item.tags">
                            <router-link class="tag-name" :to="'/tag/' + tag.title" :title="tag.title">{{ tag.title }}</router-link>
                        </template>
                    </span>
                    <el-tooltip class="item" effect="dark" content="发布时间" placement="bottom">
                        <span class="article-footer-icon">
                          <i class="iconfont el-icon-ali-clock"></i>
                          {{ item.create_time }}
                        </span>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="浏览" placement="bottom">
                         <span class="article-footer-icon">
                          <i class="iconfont el-icon-ali-read"></i>
                          {{ item.view_count }}
                        </span>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="评论" placement="bottom">
                         <span class="article-footer-icon">
                          <i class="iconfont el-icon-ali-message1"></i>
                          {{ item.comments_count}}
                        </span>
                    </el-tooltip>
                    <el-tooltip class="item" effect="dark" content="点赞" placement="bottom">
                         <span class="article-footer-icon">
                          <i class="iconfont el-icon-ali-zan"></i>
                          {{ item.praises_count || 0 }}
                        </span>
                    </el-tooltip>
                    <router-link class="read" :to="'/article/' + item.token" title="阅读全文">阅读全文</router-link>
                </div>
            </div>
        </div>
        <div class="empty-box" v-show="show">
            <p><i class="iconfont el-icon-ali-cry"></i></p>
            <p>暂时没有任何数据</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "article_box",
    props: {
      articles: {
        type: Array|Object,
        required: true
      },
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
        show: false,
        loading: true
      }
    },
    filters: {
      ellipsis(value, length) {
        if (!value) return ''
        if (value.length > length) {
          return value.slice(0, length) + '...'
        }
        return value
      }
    },
    watch: {
      articles() {
          this.show = this.articles.length === 0
      }
    }
  }
</script>

<style scoped lang="stylus">
    .box-title
        background-color #fff
        line-height 20px
        padding 10px
        color #1e9fff
        border-bottom 1px solid #eaeaea
        font-size 14px
        text-align left
        .iconfont
            margin-right 5px
        .el-icon-spin
            -webkit-animation el-icon-spin 2s infinite
            animation el-icon-spin 2s infinite linear
        @keyframes el-icon-spin
            0%
                transform rotate(0deg)
            100%
                transform rotate(359deg)
    .article
        padding 15px
        position relative
        overflow hidden
        background #fff
        border-bottom 1px solid #f2f2f2
        .flag
            position absolute
            height 20px
            line-height 20px
            text-align center
            width 74px
            background-color #FF5722
            color #fff
            z-index 1
        .flag-left
            -moz-transform rotate(-45deg)
            -ms-transform rotate(-45deg)
            -o-transform rotate(-45deg)
            -webkit-transform rotate(-45deg)
            transform rotate(-45deg)
            left -18px
            top 9px
        .article-left
            width 25%
            float left
            overflow hidden
            border 1px solid #f2f2f2
            img
                width 100%
                height auto
                vertical-align middle
                max-height 130px
                &:hover
                    transition all .6s ease 0s
                    transform scale(1.1)
                    cursor pointer
        .article-right
            width 73%
            float right
            text-align left
            .article-title
                margin-bottom 10px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
                @media (max-width: 767px)
                    margin-bottom 5px
                a
                    color #333
                    font-size 19px
                    @media screen and (max-width: 650px)
                        font-size 14px
                    &:hover
                        color #01aaed
                        transition all .2s
            .article-abstract
                height 79px
                font-size 13px
                line-height 20px
                color #999
                @media screen and (max-width: 1200px)
                    height 58px
                @media screen and (max-width: 700px)
                    height 25px
                @media screen and (max-width: 650px)
                    height 32px
                    font-size 12px
                    line-height unset
                    color #666
                overflow hidden
                text-overflow ellipsis
            .article-footer
                margin-top 3px
                color #999
                height 22px
                line-height 22px
                font-size 13px
                .tags, .category
                    @media screen and (max-width: 768px)
                        display none
                .article-footer-icon
                    padding-right 2%
                    font-size 13px
                    i
                        margin-right 2px
                    .iconfont
                        font-size 13px
                    .tag-name
                        color #009688
                        margin-right 5px
                .read
                    height 22px
                    line-height 22px
                    padding 0 5px
                    font-size 12px
                    background-color #1E9FFF
                    color #fff
                    cursor pointer
                    border-radius 2px
                    float right
                    @media screen and (max-width: 768px)
                        display none
                    &:hover
                        opacity 0.8
    .empty-box
        background-color #fff
        padding 25px 15px
        text-align center
        font-size 18px
        p
            margin 14px 0
            .el-icon-ali-cry
                font-size 50px
                color #5fb878
</style>