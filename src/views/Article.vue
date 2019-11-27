<template>
  <div class="article">
    <el-row>
      <el-col :span="24">
        <breadcrumb :breadcrumb="breadcrumb" />
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <template v-loading="loading">
          <div class="left-box">
            <article_box :articles="articles" :icon="'el-icon-ali-cog el-icon-spin'" :title="title" />
          </div>
        </template>
        <pagination :current-page="current_page" :total="total" :per_page="per_page" />
      </el-col>
      <el-col style="padding: unset" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <el-row>
          <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
            <nav_box />
          </el-col>
          <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
            <article_card :articles="recommends" :icon="'el-icon-ali-zan'" :title="'作者推荐'" />
          </el-col>
          <el-col class="box" :xs="24" :sm="12" :md="24" :lg="24" :xl="24">
            <article_card :articles="hots" :icon="'el-icon-ali-shujuwajue'" :title="'随便看看'" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import article_card from '@/components/public/article/article_card'
import article_box from '../components/public/article/article_box'
import nav_box from '../components/public/article/nav_box'
import breadcrumb from '../components/public/article/breadcrumb'
import pagination from '../components/public/pagination'

export default {
  name: 'Article',
  components: {
    article_card,
    article_box,
    nav_box,
    breadcrumb,
    pagination
  },
  data() {
    return {
      articles: [],
      recommends: [],
      hots: [],
      loading: true,
      current_page: 1,
      total: 1,
      per_page: 10,
      title: '全部文章',
      breadcrumb: []
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  mounted() {
    const _this = this
    _this.fetchData()
    _this.getRecommendPostList()
    _this.getHotPostList()
  },
  methods: {
    fetchData() {
      const _this = this
      switch (_this.$route.name) {
        case 'category':
          _this.breadcrumb = [
            {
              title: '学海无涯',
              router: '/articles'
            },
            {
              title: _this.$route.params.category
            }
          ]
          _this.title = _this.$route.params.category
          _this.api.getCategoryPostList(_this.$route.params.category).then((res) => {
            if (res.code) {
              _this.articles = res.data.data
              _this.current_page = res.data.current_page
              _this.total = res.data.total
              _this.per_page = res.data.per_page
            }
          }).catch((error) => {
            console.log(error)
          })
          break
        case 'tag':
          _this.title = _this.$route.params.tag
          _this.breadcrumb = [
            {
              title: _this.$route.params.tag
            }
          ]
          _this.api.getTagPostList(_this.$route.params.tag).then((res) => {
            if (res.code) {
              _this.articles = res.data.data
              _this.current_page = res.data.current_page
              _this.total = res.data.total
              _this.per_page = res.data.per_page
            }
          }).catch((error) => {
            console.log(error)
          })
          break
        default:
          _this.title = '全部文章'
          _this.breadcrumb = [
            {
              title: '学海无涯'
            }
          ]
          _this.api.getPostList().then((res) => {
            if (res.code) {
              _this.articles = res.data.data
            }
          }).catch((error) => {
            console.log(error)
          })
      }
      document.title = _this.title + ' - ' + process.env.VUE_APP_SITE_TITLE
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

<style scoped lang="stylus">
    .article
        min-height 700px
        margin 0 auto
        box-shadow 0 0 10px 2px #666
        padding 15px 15px
        @media screen and (min-width: 768px)
            width 750px
        @media screen and (min-width: 992px)
            width 970px
        @media screen and (min-width: 1200px)
            width 1170px
        .box
            padding 5px
        .left-box
            border 1px solid #ddd
            margin-bottom 15px
</style>
