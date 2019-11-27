<template>
  <div class="nav-box">
    <div class="box-title">
      分类导航
    </div>
    <template v-for="item in $store.state.menus">
      <router-link :to="item.router">{{ item.title }}</router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavBox',
  data() {
    return {
      menus: []
    }
  },
  mounted() {
    const _this = this
    _this.fetchData()
  },
  methods: {
    fetchData() {
      const _this = this
      _this.api.getCategoryList().then((res) => {
        _this.menus = res.data
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="stylus">
    .nav-box
        display block
        background #fff
        color #333
        font-size 14px
        padding 10px
        min-height 220px
        height 100%
        border 1px solid #ddd
        .box-title
            padding 0 0 5px 0
            font-weight 500
            font-size 15px
            text-align center
            border-bottom 1px solid #009688
            margin-bottom 5px
        a
            border 1px solid #d2d2d2
            background inherit
            font-size 14px
            color #444
            padding 7px 1%
            margin 5px 0
            width 46%
            text-align center
            line-height 19px
            word-break all
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            display block
            &:hover
                border 1px solid #5FB878
                color #5FB878
            &:nth-child(even)
                float left
            &:nth-child(odd)
                float right
</style>
