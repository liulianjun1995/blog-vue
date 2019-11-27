<template>
  <div class="message">
    <el-row>
      <el-col :span="24">
        <breadcrumb :breadcrumb="breadcrumb" />
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <div class="tip">
          <div class="tip-figure">
            <i class="iconfont el-icon-ali-message1" />
          </div>
          <p class="tip-title">留言板</p>
          <p class="tip-introduce">可留言、可吐槽、可提问。欢迎灌水，杜绝广告！</p>
        </div>
        <div class="editor-box">
          <wangEditor ref="wangEditor" :disable="disable" :options="editor_options" />
          <el-button size="small" type="primary">提交评论</el-button>
        </div>
      </el-col>
      <el-col style="padding: unset" :xs="24" :sm="24" :md="8" :lg="8" :xl="8" />
    </el-row>
  </div>
</template>

<script>
import breadcrumb from '../components/public/article/breadcrumb'
import wangEditor from '../components/public/wangEditor'
import emotions from '../config/emotions'

export default {
  name: 'Message',
  components: {
    breadcrumb,
    wangEditor
  },
  data() {
    return {
      breadcrumb: [],
      editor_options: {
        menus: [
          'bold', // 粗体
          'italic', // 斜体
          'underline', // 下划线
          'redo', // 重复
          'undo',
          // 一键清空编辑器
          'clearAll',
          // 插入带类名的代码
          'insertCode',
          'emoticon',
          'justify',
          'link'
        ],
        pasteFilterStyle: true, // 打开/关闭粘贴样式的过滤,
        emotions: emotions
      },
      disable: false
    }
  },
  mounted() {
    const _this = this
    _this.breadcrumb = [
      {
        title: '留言板',
        router: '/message'
      }
    ]
  }
}
</script>

<style scoped lang="stylus">
    .message
        min-height 700px
        margin 0 auto
        box-shadow 0 0 10px 2px #666
        padding 15px 15px
        @media screen and (min-width: 768px)
            width 750px
        @media screen and (min-width: 992px)
            width 970px
        @media screen and (min-width: 1200px)
            width 1170px
        .tip
            text-align center
            background-color #fff
            border 1px solid #ddd
            .tip-figure
                display inline-block
                margin 20px auto
                .iconfont
                    font-size 100px
            .tip-title
                font-size 32px
                font-weight 32px
                margin 0 0 15px 0
            .tip-introduce
                font-size 18px
                width 90%
                margin 20px auto
        .editor-box
            padding 15px
            background-color #fff
            .wangEditor
                margin-bottom 10px
            .el-divider__text
                font-size 18px
                padding 0 10px
        .left-box
            border 1px solid #ddd
            margin-bottom 15px
</style>
