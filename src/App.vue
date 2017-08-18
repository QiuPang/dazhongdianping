<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  created(){
    if(this.$cookie.get('userinfo')){
      let userInfo = JSON.parse(this.$cookie.get('userinfo'));
      this.$store.commit('update_Users_info',userInfo);
    }
  }
}
</script>

<style>
html{
  background: #f4f4f4;
}
body,div{
  margin: 0;
  padding: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mint-header-title{
  font-size: 20px;
}
</style>
