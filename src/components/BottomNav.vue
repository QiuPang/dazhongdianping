<template>
    <mt-tabbar fixed v-model="tabBarIndex">
      <mt-tab-item id="/" @click.native="routerLink('/')">
          <i class="iconfont">&#xe644;</i>
          <p>美食</p>
      </mt-tab-item>
      <mt-tab-item id="/discover" @click.native="routerLink('/discover')">
          <i class="iconfont">&#xe6e6;</i>
          <p>发现</p>
      </mt-tab-item>
      <mt-tab-item id="/order" @click.native="routerLink('/order')">
          <i class="iconfont">&#xe6a2;</i>
          <p>订单</p>
      </mt-tab-item>
      <mt-tab-item id="/profile" @click.native="routerLink('/profile')">
          <i class="iconfont">&#xe6b8;</i>
          <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
</template>
<script>
import { Tabbar, TabItem } from 'mint-ui';
export default {
  name: "BottomNav",
  data:function() {
    return {

    }
  },
  computed:{
    tabBarIndex() {
      return this.$store.getters.tabBarIndex;
    }
  },
  methods: {
    routerLink(path){
      this.$router.push(path);
    }
  }
}
</script>
<style lang="scss" scoped>
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1rem;
  }
  div{
    margin: 0px;
    padding: 0px;
    user-select: none;
  }
  @font-face {
    font-family: 'iconfont';
    src: url('../assets/font/iconfont.eot');
    src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../assets/font/iconfont.woff') format('woff'),
    url('../assets/font/iconfont.ttf') format('truetype'),
    url('../assets/font/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:pxToRem(16px);
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: pxToRem(0.2px);
    -moz-osx-font-smoothing: grayscale;
  }
  p{
    margin-top: pxToRem(5px);
  }
  a{
    color: inherit;
  }
  .router{
    text-decoration: none;
  }
  .mint-tab-item{
    padding: pxToRem(15px) 0 0px !important
  }
</style>
