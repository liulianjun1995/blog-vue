<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <i class="icon el-icon-location-outline" />
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="item in breadcrumb">
        <el-breadcrumb-item :to="item.router">{{ item.title }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breadcrumb: {
      type: Array
    }
  }
}
</script>

<style scoped lang="stylus">
    .breadcrumb
        border 1px solid #ddd
        padding 10px 10px
        background #fff
        font-size 13px
        margin-bottom 15px
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        .icon
            color #01aaed
            font-size 14px
            float left
            margin 5px 0
            margin-right 5px
        .el-breadcrumb__item
            margin 5px 0

</style>
