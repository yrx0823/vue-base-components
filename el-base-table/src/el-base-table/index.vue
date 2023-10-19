<template>
  <div>
    <a :href="link">{{ text }}</a>
    <el-button type="primary" plain>fdsf</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElBaseTable',
  props: {
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      test: {
        a: '1',
        b: '2'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  a {
    color: red;
  }
}
</style>
