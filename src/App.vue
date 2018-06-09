<template>
  <div class="app">
    <ball></ball> 
    <img src="./assets/logo.png">
    <el-row>
      <router-link to="/resume"><el-button>默认按钮</el-button></router-link>
      <router-link to="/ball"><el-button type="primary">主要按钮</el-button></router-link>
      <router-link to="/header"><el-button type="success">成功按钮</el-button></router-link>
      <router-link to="/index"><el-button type="info">信息按钮</el-button></router-link>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>
<script>
import ball from './views/ball'
export default {
  components: {
           ball,
        },
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-decoration: none;
}
</style>
