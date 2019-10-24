<template>
    <div class="h_menu">
        <el-menu
                :default-active="activeIndex"
                class="el-menu-horizontal"
                :mode="mode"
                background-color="#393d49"
                text-color="#fff"
                router
                active-text-color="#1e9fff">
            <el-menu-item index="/"><i class=""></i>网站首页</el-menu-item>
            <el-submenu index="articles">
                <el-menu-item index="all" style="height: 0"></el-menu-item>
                <template slot="title">学海无涯</template>
                <template v-for="menu in $store.state.menus">
                    <el-menu-item :index="menu.router">{{menu.title}}</el-menu-item>
                </template>
            </el-submenu>
<!--            <el-menu-item index="/message">留言板</el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
  export default {
    name: "h_menu",
    props: {
      mode: {
        type: String,
        default: 'horizontal'
      },
    },
    data() {
      return {
        activeIndex: 'articles',
        drawer: false,
      };
    },
    methods: {
      checkActiveIndex() {
        let _this = this;
        switch (_this.$route.name) {
          case 'category':
            _this.activeIndex = _this.$route.path;
            break;
          case 'tag':
            _this.activeIndex = _this.$route.meta.activeIndex ? _this.$route.meta.activeIndex : _this.$route.path
            break;
          default:
            _this.activeIndex = _this.$route.meta.activeIndex ? _this.$route.meta.activeIndex : _this.$route.path
            break;
        }
      },
      fetchData() {
        let _this = this;
        _this.api.getCategoryList().then((res) => {
          _this.$store.state.menus = res.data
        }).catch((error) => {
          console.log(error);
        })
      }
    },
    mounted() {
      let _this = this;
      _this.fetchData()
      _this.checkActiveIndex()
    },
    watch: {
      $route: 'checkActiveIndex'
    }
  }
</script>

<style scoped lang="stylus">
    .el-menu
        text-align left
</style>