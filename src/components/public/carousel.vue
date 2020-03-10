<template>
    <div class="carousel">
        <el-carousel ref="carousel" :height="carouselHeight + 'px'">
            <el-carousel-item v-for="(item, index) in carousels" :key="index">
                <p class="carousel-title">{{item.title}}</p>
                <a :href="item.link">
                    <img :src="item.img" style="width: 100%; height: 100%" :alt="item.title">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
  export default {
    name: "carousel",
    data() {
      return {
        carousels: [],
        carouselHeight: '400',
      }
    },
    methods: {
      setCarouselSize() {
        let _this = this;
        let clientWidth = _this.$refs.carousel.$el.clientWidth;
        if (clientWidth <= 640) {
          _this.carouselHeight = clientWidth / 2;
        }
      },
      fetchData() {
        let _this = this;
        _this.api.getCarousels().then((res) => {
          if (res.code) {
            _this.carousels = res.data
          }
        }).catch(() => {})
      }
    },
    mounted() {
      let _this = this;
      _this.setCarouselSize();
      _this.fetchData();
      window.addEventListener('resize', _this.setCarouselSize, false);
    },
    destroyed() {
      let _this = this;
      window.removeEventListener('resize', _this.setCarouselSize)
    }
  }
</script>

<style scoped lang="stylus">
    .carousel
        background-color #fff
        border 1px solid #ddd
        padding 5px
        margin-bottom 15px
        .el-carousel
            overflow hidden
            cursor pointer
            .carousel-title
                position absolute
                color #ffffff
                padding 5px 10px
                background-color rgba(0,0,0,.3)
                font-size 15px
</style>
