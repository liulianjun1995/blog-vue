<template>
    <div class="blog-tips">
        <i class="iconfont el-icon-ali-volume-up"></i>
        <div class="tips-content">
            <template v-for="(item, index) in tips">
                <transition name="el-fade-in">
                    <span class="tip transition-box" v-show="item.show" style="display: block" :style="{color: item.color}">{{ item.title }}</span>
                </transition>
            </template>
        </div>
    </div>
</template>

<script>
  export default {
    name: "tips",
    data() {
      return {
        tips: [],
      }
    },
    methods: {
      initTips() {
        let n = 0;
        setInterval( () => {
          n++;
          this.tips.forEach( (v, i) => {
            n >= this.tips.length && (n = 0);
            v.show = i === n;
          })
        }, 3000)
      },
      fetchData() {
        let _this = this;
        _this.api.getNoticeList().then((res) => {
          if (res.code) {
            _this.tips = res.data;
          }
        })
      }
    },
    mounted() {
      let _this = this;
      _this.initTips();
      _this.fetchData()
    },
  }
</script>

<style scoped lang="stylus">
    .blog-tips
        border 1px solid #ddd
        padding 10px 10px
        background #fff
        font-size 13px
        text-align left
        .el-icon-ali-volume-up
            color #009688
            font-size 17px
            float left
        .tips-content
            height 17px
            overflow hidden
            .none
                display none
            .tip
                margin-bottom 5px
                margin-left 10px
                white-space nowrap
                text-overflow ellipsis
                overflow hidden
</style>