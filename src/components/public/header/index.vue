<template>
  <div class="header">
    <el-row :gutter="0">
      <el-col :span="6">
        <div class="grid-content blog-logo blog-logo-left"><router-link class="logo" to="/">{{ title }}</router-link></div>
        <div class="grid-content blog-logo hide">
          <a class="blog-nav-icon" href="javascript:" @click="drawer = true">
            <i class="iconfont el-icon-ali-nav" />
          </a>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <div class="grid-content blog-logo hide"><router-link class="logo" to="/">{{ title }}</router-link></div>
          <header_menu class="el-menu-horizontal" />
        </div>
      </el-col>
      <el-col :span="6">
        <div v-show="$store.state.login" class="grid-content">
          <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
            <img class="avatar" :src="$store.state.user.avatar" alt="" @click="logout">
          </el-tooltip>
        </div>
        <div v-show="!$store.state.login" class="grid-content">
          <el-tooltip class="item" effect="dark" content="QQ登录" placement="bottom">
            <i class="iconfont icon el-icon-ali-qq" @click="login('qq')" />
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Github登录" placement="bottom">
            <i class="iconfont icon el-icon-ali-github" @click="login('github')" />
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
    <el-drawer
      ref="drawer"
      custom-class="drawer-menu"
      :visible.sync="drawer"
      direction="ltr"
      style="margin-top: 60px;"
      size="200px"
      :show-close="false"
    >
      <header_menu class="hide" :mode="'vertical'" />
    </el-drawer>
  </div>
</template>

<script>
import header_menu from './h_menu'
export default {
  name: 'Index',
  components: {
    header_menu
  },
  data() {
    return {
      drawer: false,
      title: process.env.VUE_APP_SITE_TITLE
    }
  },
  watch: {
    $route() {
      this.$refs.drawer.closeDrawer()
    }
  },
  mounted() {
    console.log(process.env)
    const _this = this
    if (_this.$route.query.token) {
      _this.$cookie.set('token', _this.$route.query.token, { expires: 7 })
      _this.$router.push('/')
    }
    if (_this.checkToken()) {
      _this.checkUser()
    }
  },
  methods: {
    login(type) {
      switch (type) {
        case 'qq':
          // this.$layer.msg('qq')
          window.location.href = process.env.VUE_APP_URL + '/oauth/qq'
          break
        case 'github':
          // this.$layer.msg('github')
          window.location.href = process.env.VUE_APP_URL + '/oauth/github'
          break
      }
    },
    logout() {
      const _this = this
      _this.$store.state.login = false
      _this.$store.state.user = {}
      _this.$cookie.delete('token')
      _this.$cookie.delete('user')
    },
    getUserInfo() {
      const _this = this
      const params = {}
      const headers = {
        'Authorization': _this.$cookie.get('token')
      }
      _this.api.getUserInfo(params, headers).then((res) => {
        if (res.code) {
          _this.$store.state.login = true
          _this.$store.state.user = res.data
          _this.$cookie.set('user', JSON.stringify(res.data), { expires: 7 })
        } else {
          _this.$layer.msg(res.message || '请求异常')
        }
      }).catch((error) => {
        if (error.response.status === 401) {
          _this.logout()
        }
      })
    },
    checkUser() {
      const _this = this
      if (_this.$cookie.get('user')) {
        _this.$store.state.login = true
        _this.$store.state.user = JSON.parse(_this.$cookie.get('user'))
      } else {
        _this.getUserInfo()
      }
    },
    checkToken() {
      return this.$cookie.get('token')
    }
  }
}
</script>
<style lang="stylus">
    .el-dialog__wrapper
        .drawer-menu
            background-color #393d49
            @media screen and (min-width: 770px)
                display none
            .el-drawer__header
                display none
</style>
<style scoped lang="stylus">
    .el-row
        .el-col
            background: #393d49;
            @media screen and (max-width: 770px)
                float right
            .blog-logo
                line-height 60px
                .logo
                    color #fff
                    font-weight bold
                    font-family KaiTi
                    display inline-block
                    z-index 10
                    font-size 25px
                .blog-nav-icon
                    padding 8px 10px
                    color #fff
                    border 1px solid #009688
            .blog-logo-left
                @media screen and (max-width: 770px)
                    display none
            .grid-content
                height 60px
                text-align center
                .icon
                    color #c2c2c2
                    font-size 30px
                    line-height 60px
                    cursor pointer
                    margin-right 5px
                    &:hover
                        color #fff
                .avatar
                    margin-top 10px
                    width 40px
                    height 40px
                    border-radius 50px
                    cursor pointer
    .hide
        @media screen and (min-width: 770px)
            display none
    .el-menu-horizontal
        @media screen and (max-width: 770px)
            display none
</style>
