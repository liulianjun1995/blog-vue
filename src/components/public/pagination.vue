<template>
  <el-pagination
    background
    layout="prev, pager, next"
    hide-on-single-page
    :current-page="currentPage"
    :page-size="perPage"
    :total="total"
    @current-change="handleCurrentChange"
  />
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number | String,
      required: true
    },
    currentPage: {
      type: Number | String,
      required: true
    },
    perPage: {
      type: Number | String,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$router.push(this.$route.path + '?page=' + val)
    }
  }
}
</script>

<style scoped lang="stylus">
    .el-pagination
        text-align center
        margin-bottom 10px
</style>
