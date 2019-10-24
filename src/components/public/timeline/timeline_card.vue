<template>
    <div class="timeline-card"  v-scroll-reveal.reset>
        <p class="card-title">
            <i class="iconfont el-icon-ali-locationicon"></i>
            一路走来
        </p>
        <el-timeline>
            <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :icon="activity.icon"
                    :type="activity.type"
                    :color="activity.color"
                    :size="activity.size"
                    placement="top"
                    :timestamp="activity.timestamp">
                {{activity.content}}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
  export default {
    name: "timeline_card",
    data() {
      return {
        activities: [
          {
            content: '新增博文配乐功能。',
            timestamp: '2018-04-12 20:46',
            type: 'primary',
            icon: 'iconfont el-icon-ali-clock1',
          },
          {
            content: '不落阁2.0项目启动',
            timestamp: '2018-04-03 20:46',
            icon: 'iconfont el-icon-ali-clock1',
          },
          {
            content: '不落阁1.0基本正式上线！',
            timestamp: '2018-04-03 20:46',
            icon: 'iconfont el-icon-ali-clock1',
          },
          {
            content: '不落阁1.0项目启动',
            timestamp: '2018-04-03 20:46',
            icon: 'iconfont el-icon-ali-yuandian',
          }
        ]
      };
    }
  }
</script>
<style lang="stylus">
    .el-timeline
        padding 15px 15px 0 20px
        .el-timeline-item__node
            cursor pointer
            left -3px !important
            width 18px !important
            height 18px !important
            background-color unset !important
            .iconfont
                color #5FB878 !important
                font-size 20px !important
                &:hover
                    color #FF5722 !important
        .el-timeline-item__wrapper
            margin-left 25px
            text-align left
</style>
<style scoped lang="stylus">
    .timeline-card
        background #fff
        height 100%
        border 1px solid #ddd

        .card-title
            background-color #fff
            line-height 20px
            padding 10px
            color #1e9fff
            border-bottom 1px solid #eaeaea
            text-align left
            .iconfont
                font-size 18px
</style>