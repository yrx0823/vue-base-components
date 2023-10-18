<script>
import Vue from 'vue'
import ElBaseTable from '@/el-base-table/index.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    ElBaseTable
  }
})
</script>

<template>
  <div id="app">
    <el-base-table link="https://baidu.com" text="click me"></el-base-table>
  </div>
</template>
