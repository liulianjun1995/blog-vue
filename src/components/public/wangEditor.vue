<template>
  <div class="wangEditor">
    <vue-wangeditor id="editor" v-model="content" :options="options" :init-content="initContent" :disable="disable" @get-text="getText" />
  </div>
</template>

<script>
export default {
  name: 'WangEditor',
  props: {
    disable: {
      type: Boolean
    },
    options: {
      type: Object
    }
  },
  data() {
    return {
      content: '', // 包含html标签
      initContent: '',
      id: new Date()
    }
  },
  methods: {
    getText() {
      return this.content
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
