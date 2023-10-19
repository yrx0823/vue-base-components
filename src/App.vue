<template>
  <div id="app">
    <demo-el-base-table></demo-el-base-table>
  </div>
</template>

<script>
import demoElBaseTable from './examples/demo-el-table-table.vue'
export default {
  name: 'App',
  components: {
    demoElBaseTable
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
