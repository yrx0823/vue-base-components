<template>
  <div>
    <a :href="link">{{ text }}</a>
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
