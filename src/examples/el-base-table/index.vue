<template>
  <a :href="link">{{ text }}</a>
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
<style lang="scss" scoped></style>
