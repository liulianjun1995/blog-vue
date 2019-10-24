<template>
    <div class="wangEditor">
        <vue-wangeditor id="editor" :options="options" v-model="content" :init-content="initContent" :disable="disable" @get-text="getText"></vue-wangeditor>
    </div>
</template>

<script>
  export default {
    name: "wangEditor",
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
      getText () {
        return this.content;
      },
    }
  }
</script>

<style scoped lang="stylus">

</style>