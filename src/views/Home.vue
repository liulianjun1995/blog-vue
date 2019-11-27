<template>
  <div class="home">
    <div class="blog-content">
      <el-row>
        <el-col :span="24">
          <tips />
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
          <carousel />
          <template v-loading="loading">
            <div class="left-box">
              <article_box :articles="tops" :icon="'el-icon-ali-diamond'" :title="'置顶博文'" />
            </div>
            <div class="left-box">
              <article_box :articles="articles" :icon="'el-icon-ali-signal'" :title="'最新博文'" />
            </div>
          </template>
          <pagination :current-page="current_page" :total="total" :per_page="per_page" />
        </el-col>
        <el-col style="padding: unset" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <el-row>
            <el-col class="box" :span="24">
              <info :article_count="total" :comment_count="comment_count" />
            </el-col>
            <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
              <article_card :articles="hots" :icon="'el-icon-ali-huomiao'" :title="'热文排行'" />
            </el-col>
            <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
              <article_card :articles="recommends" :icon="'el-icon-ali-zan'" :title="'作者推荐'" />
            </el-col>
            <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
              <comment_card :comments="comments" :icon="'el-icon-ali-message1'" :title="'最新评论'" />
            </el-col>
            <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
              <link_card />
            </el-col>
            <!--            <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">-->
            <!--              <timeline_card/>-->
            <!--            </el-col>-->
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import article_box from '@/components/public/article/article_box'
import article_card from '@/components/public/article/article_card'
import comment_card from '@/components/public/article/comment_card'
import link_card from '@/components/public/link/link_card'
import timeline_card from '../components/public/timeline/timeline_card'
import carousel from '../components/public/carousel'
import info from '@/components/public/info'
import tips from '../components/public/tips'

import pagination from '../components/public/pagination'

export default {
  name: 'Home',
  components: {
    article_box,
    info,
    article_card,
    comment_card,
    link_card,
    timeline_card,
    carousel,
    tips,
    pagination
  },
  data() {
    return {
      articles: [],
      recommends: [],
      tops: [],
      comments: [],
      hots: [],
      loading: true,
      current_page: 1,
      total: 1,
      per_page: 10,
      comment_count: 0
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  mounted() {
    const _this = this
    _this.fetchData()
    _this.getRecommendPostList()
    _this.getTopPostList()
    _this.getHotPostList()
  },
  methods: {
    fetchData() {
      const _this = this
      const params = {
        page: _this.$route.query.page || 1
      }
      _this.api.getPostList(params).then((res) => {
        if (res.code) {
          _this.articles = res.data.data
          _this.current_page = res.data.current_page
          _this.total = res.data.total
          _this.per_page = res.data.per_page
          _this.comment_count = res.data.comment_count
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    getRecommendPostList() {
      const _this = this
      _this.api.getRecommendPostList().then((res) => {
        if (res.code) {
          _this.recommends = res.data
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    getTopPostList() {
      const _this = this
      _this.api.getTopPostList().then((res) => {
        if (res.code) {
          _this.tops = res.data
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    getHotPostList() {
      const _this = this
      _this.api.getHotPostList().then((res) => {
        if (res.code) {
          _this.hots = res.data
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    @media screen and (min-width: 768px)
      width 750px
    @media screen and (min-width: 992px)
      width 970px
    @media screen and (min-width: 1200px)
      width 1170px
    min-height 700px
    margin 0 auto
    box-shadow 0 0 10px 2px #666
    padding 15px 15px
    .blog-content
      .el-col
        padding 7.5px 0
        .box
          padding 5px
        .left-box
          border 1px solid #ddd
          margin-bottom 15px
</style>
