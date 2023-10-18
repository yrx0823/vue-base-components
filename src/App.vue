<template>
  <div id="app">
    <el-base-table link="https://baidu.com" text="click me"></el-base-table>
  </div>
</template>

<script>
import ElBaseTable from './examples/el-base-table/index.vue'
export default {
  name: 'App',
  components: {
    ElBaseTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
