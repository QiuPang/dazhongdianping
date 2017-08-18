<template>
  <div id="profile">
    <mt-header fixed :title="'个人中心'">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="user_info">
      <div class="user_pic">
        <img :src="'http://localhost:8888/'+avatar" v-if="!!avatar">
        <img src="../../assets/snowball.png" v-if="!avatar">
      </div>
      <div class="user_name">
        {{userInfo.username}}
      </div>
    </div>
    <input type="file" ref="photo"  accept="image/*" @change='change'>
    <input type="file" ref="camera" accept="image/*" capture="camera" @change='change'>
    <section>
      <div class="card bottom" @click="uploadImg">
        上传头像
      </div>
      <div  class="card bottom" @click="privateInfo">
        我的信息
      </div>
      <div  class="card">
        我的订单
      </div>
    </section>
    <section>
      <div class="card bottom">
        服务中心
      </div>
      <div class="card">
        加盟合作
      </div>
    </section>
    <section>
      <div class="card tip" @click="loginOut">
        退出登录
      </div>
    </section>
    <bottom-nav></bottom-nav>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
import { Header as Mtheader} from 'mint-ui';
import { Button as Mtbutton } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
import BottomNav from "@/components/BottomNav";
export default {
  name: "profile",
  components: {
    BottomNav
  },
  data(){
    return {
      actions:[
        {
          name:'拍照',method:()=>{
            this.$refs.camera.click();
          }
        },
        {
          name:'从相册中选择',method:()=>{
            this.$refs.photo.click();
          }
        }
      ],
      sheetVisible:false,
      imgData:{
        id:'',
        imgUrl:'',
        img:''
      }
    }
  },
  created(){
    this.$store.commit('updateTabBarIndex', '/profile');
    if(!this.$cookie.get('userinfo')){
      this.$router.push('/login');
    }
  },
  computed:{
    userInfo(){
      return this.$store.getters.Users_info;
    },
    avatar(){
      return this.$store.getters.Users_avatar;
    }
  },
  methods: {
    uploadImg(){
      this.sheetVisible=true;
    },
    change(e){
      this.imgData.file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.imgData.file);
      reader.onload =()=>{
        this.imgData.imgUrl=reader.result;
      };
      this.$store.dispatch('uploadImg',{
        $http:this.$http,
        data:{
          avatar:this.imgData.file
        }
      }).then((reponse)=>{
        if(!reponse.data.code){
          this.$store.commit('update_Users_avatar',reponse.data.avatar);
          MessageBox('提示', '上传成功');
        }else{
          MessageBox({
            title: '提示',
            message: reponse.data.message,
          })
        }
      })
    },
    loginOut(){
      this.$store.dispatch('loginOut',{
        $http:this.$http,
      }).then(response=>{
        if(!response.data.code){
          this.$store.commit('update_Users_info',{});
          MessageBox('提示', '注销成功').then(()=>{
            this.$router.push('/login');
          })
        }else{
          MessageBox({
            title: '提示',
            message: response.data.message,
          })
        }
      })
    },
    privateInfo(){
      this.$router.push("/privateinfo");
    }
  }
}
</script>
<style lang="scss" scoped>
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1rem;
  }
  #profile{
    text-align: center;
  }
  img{
    width: pxToRem(100px);
    height: pxToRem(100px);
  }
  section{
    margin-top: pxToRem(20px);
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .bottom{
    border-bottom: 1px solid #ddd;
  }
  .card{
    width: 100%;
    line-height: pxToRem(40px);
    height: pxToRem(40px);
    background: #fff;
  }
  .user_info{
    margin-top: pxToRem(40px);
    width: 100%;
    height: pxToRem(170px);
    display: flex;
    align-items: center;
    background: rgb(38, 162, 255);
  }
  .tip{
    background: red;
    color: white;
  }
  .user_pic{
    width: pxToRem(100px);
    height: pxToRem(100px);
    background: white;
    border-radius: 50%;
    margin-top: pxToRem(35px);
    margin-left: pxToRem(60px);
    overflow: hidden;
  }
  .user_name{
    text-align: center;
    height: 100%;
    margin-left: pxToRem(40px);
    vertical-align: middle;
    color: white;
    font-size: pxToRem(24px);
  }
  input{
    display: none;
  }
</style>
