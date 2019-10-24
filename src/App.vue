<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view/>
      <vue-progress-bar></vue-progress-bar>
    </el-main>
    <el-footer>
      <Footer/>
    </el-footer>
    <backTop/>
  </el-container>
</template>
<style lang="stylus" type="text/stylus" scoped>
  .el-header
    padding 0
    position fixed
    width 100%
    z-index 1000
  .el-main
    padding 0
    padding-top 60px
    background-color #eee
    min-height 700px
    overflow hidden
  .el-footer
    padding 0
</style>
<script>
  import Header from '@/components/public/header/index.vue'
  import Footer from '@/components/public/footer/index.vue'
  import backTop from "./components/public/backTop";

  export default {
    components: {
      Header,
      Footer,
      backTop,
    },
    mounted () {
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish()
    },
    created () {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start()
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        // if (to.meta.progress !== undefined) {
        //   let meta = to.meta.progress
        //   // parse meta tags
        //   this.$Progress.parseMeta(meta)
        // }
        //  start the progress bar
        this.$Progress.start()
        //  continue to next page
        next()
      })
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        this.$Progress.finish()
      })
    }
  }
</script>
