<template>
    <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            hide-on-single-page
            :current-page="currentPage"
            :page-size="per_page"
            :total="total">
    </el-pagination>
</template>

<script>
  export default {
    name: "pagination",
    props: {
      total: {
        type: Number|String,
        required: true
      },
      currentPage: {
        type: Number|String,
        required: true
      },
      per_page: {
        type: Number|String,
        required: true
      },
    },
    data() {
      return {

      }
    },
    methods: {
      handleCurrentChange(val) {
        this.$router.push(this.$route.path + '?page=' + val)
      },
    },
  }
</script>

<style scoped lang="stylus">
    .el-pagination
        text-align center
        margin-bottom 10px
</style>