<template>
  <div>
    <mt-header fixed :title="'注册界面'">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-field :style="'margin-top:40px'" label="用户名" placeholder="请输入用户名" v-model="register.username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="register.password"></mt-field>
    <mt-field label="重复密码" placeholder="请再次输入密码" v-model="register.repassword"></mt-field>
    <mt-button  type="primary" @click="Register">注册</mt-button>
  </div>
</template>
<script>
import { Header as Mtheader} from 'mint-ui';
import { Field } from 'mint-ui';
import { Button as Mtbutton } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default {
  name: "Register",
  data(){
    return {
      register:{
        username:'',
        password:'',
        repassword:''
      }
    }
  },
  methods: {
    Register() {
      this.$store.dispatch('Register',{
        $http:this.$http,
        data:{
          username:this.register.username,
          password:this.register.password,
          repassword:this.register.repassword
        }
      }).then(response=>{
        if(!response.data.code){
          this.register.username="";
          this.register.password="";
          this.register.repassword="";
          MessageBox('提示', '注册成功').then(()=>{
            this.$router.push('/login');
          })
        }else{
          MessageBox({
            title: '提示',
            message: response.data.message,
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1rem;
  }
  .mint-button--primary{
    width: 100%
  }
  .mint-header{
    font-size: pxToRem(14px) !important;
    height: pxToRem(40px) !important;
  }
  .mint-cell-wrapper{
    font-size: pxToRem(16px) !important;
    padding: 0 pxToRem(10px) !important;
  }
</style>
