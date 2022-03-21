<template>
  <div class="nav">
    <router-link to="/home">home</router-link><br />
    <router-link to="/com">组合</router-link><br />
    <router-link to="/opt">选项</router-link><br />
    <router-link to="/abort">abort</router-link>
  </div>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  display: flex;
  .nav {
    padding-right: 30px;
  }
}
</style>
