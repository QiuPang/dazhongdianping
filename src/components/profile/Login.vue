<template>
  <div id="login">
    <mt-header fixed :title="'登录界面'">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <img style="margin-top:40px" src="../../assets/react.svg">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="login.username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="login.password"></mt-field>
    <mt-button type="primary" @click="Login">登录</mt-button>
    <p>
      <router-link :class="{router:true}" to="/register">快速注册</router-link>
      <a style="margin-left:43%">忘记密码？</a>
    </p>
    <bottom-nav></bottom-nav>
  </div>
</template>
<script>
import { Header as Mtheader} from 'mint-ui';
import { Field } from 'mint-ui';
import { Button as Mtbutton } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import BottomNav from "@/components/BottomNav";
export default {
  name: "Login",
  components: {
    BottomNav
  },
  data(){
    return {
      login:{
        username:'',
        password:''
      }
    }
  },
  methods: {
    Login(){
      this.$store.dispatch('Login',{
        $http:this.$http,
        data:{
          username:this.login.username,
          password:this.login.password
        }
      }).then(
        response=>{
          console.log(response);
          this.$store.commit('update_Users_info',response);
          MessageBox('提示', '登录成功').then(()=>{
            this.$router.push('/profile');
          })
        }
      ).catch((error)=>{
        MessageBox({
          title: '提示',
          message: error.message,
        })
      })
    }
  }
}
</script>
<style lang="scss">
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1rem;
  }
  #login{
    text-align: center;
  }
  img{
    width: pxToRem(120px);
    height: pxToRem(120px)
  }
  .router{
    text-decoration: none;
  }
  a{
    color: inherit;
  }
  .mint-cell{
    width: 95%;
    height: pxToRem(50px);
    margin-left: 2.5%
  }
  .mint-button--primary{
    height: pxToRem(40px);
    margin-top: pxToRem(15px);
    width:85%
  }
</style>
