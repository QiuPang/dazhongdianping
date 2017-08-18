<template>
  <div id="">
    <mt-header fixed :title="'个人资料'">
      <router-link to="/profile" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <section class="userinfo">
      <div class="card bottom">
        <span class="card_left">用户名</span>
        <span class="card_right">{{userinfo.username}}</span>
      </div>
      <div class="card bottom"  @click="showGender">
        <span class="card_left">性别</span>
        <span class="card_right">{{userdetail.gender?userdetail.gender:'保密'}}</span>
      </div>
      <div class="card" @click="openPicker">
        <span class="card_left">生日</span>
        <span class="card_right">{{userdetail.birthday?(new Date(userdetail.birthday).getFullYear()+'-'+new Date(userdetail.birthday).getMonth()+'-'+new Date(userdetail.birthday).getDate()):'2000-1-1'}}</span>
      </div>
    </section>
    <section class="userdetail">
      <div class="card bottom" @click="shopAddress">
        <span class="card_left">收货地址</span>
        <span class="card_right">＞</span>
      </div>
      <div class="card">
        <span class="card_left">{{userinfo.username}}</span>
        <span class="card_right">15652711704</span>
      </div>
      <div class="card">
        <span class="card_address">{{userdetail.shippingAddress?userdetail.shippingAddress:'请编辑收货地址'}}</span>
      </div>
    </section>
    <mt-popup v-model="popupVisible">
      <mt-radio
        v-model="gender"
        :options="['男', '女', '保密']">
      </mt-radio>
      <div class="confirm" @click="editGender">
        确定
      </div>
    </mt-popup>
    <mt-datetime-picker
        ref="datePicker"
        type="date"
        :startDate="startDate"
        :endDate="endDate"
        v-model="dateValue"
        @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>
<script>
import { Header as Mtheader} from 'mint-ui';
import { Field } from 'mint-ui';
import { Button as Mtbutton } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Radio } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
import moment from 'moment';

export default {
  name: "Privateinfo",
  data: function data() {
    return {
      gender:'',
      popupVisible:false,
      dateValue: new Date(),
      startDate: new Date('1960-01-01'),
      endDate: new Date()
    }
  },
  created() {
    if(!this.$cookie.get('userinfo')){
      this.$router.push('/login');
    };
    this.$store.dispatch('getDetail', {
      $http: this.$http
    })
  },
  computed:{
    userinfo() {
      return this.$store.getters.Users_info
    },
    userdetail() {
      return this.$store.getters.Users_detail
    }
  },
  methods:{
    openPicker() {
      this.$refs.datePicker.open();
    },
    handleConfirm(value){
      this.$store.dispatch("editDetail",{
        $http:this.$http,
        data:{
          gender: this.userdetail.gender,
          birthday: moment(value).format('YYYY-MM-DD'),
          shippingAddress: this.userdetail.shippingAddress
        }
      }).then(response=>{
        if(!response.data.code){
          MessageBox('提示', '成功').then(()=>{
            this.$store.dispatch("getDetail",{
              $http:this.$http
            });
            this.$router.push('/privateinfo');
            this.popupVisible=false;
          })
        }else{
          MessageBox({
            title: '提示',
            message: response.data.message,
          }).then(()=>{
            this.popupVisible=false;
            this.$router.push("/login");
          })
        }
      })
    },
    showGender(){
      this.popupVisible=true;
    },
    shopAddress(){
      this.$router.push('/shopaddress');
    },
    editGender(){
      console.log(this.gender);
      this.$store.dispatch("editDetail",{
        $http:this.$http,
        data:{
          gender:this.gender,
          birthday:this.userdetail.birthday,
          shippingAddress:this.userdetail.shippingAddress
        }
      }).then(response=>{
        if(!response.data.code){
          MessageBox('提示', '成功').then(()=>{
            this.$store.dispatch("getDetail",{
              $http:this.$http
            });
            this.$router.push('/privateinfo');
            this.popupVisible=false;
          })
        }else{
          MessageBox({
            title: '提示',
            message: response.data.message,
          }).then(()=>{
            this.popupVisible=false;
            this.$router.push("/login");
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1rem;
  }
  .userinfo{
    margin-top: pxToRem(60px);
    background: white;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .userdetail{
    margin-top: pxToRem(20px);
    background: white;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .bottom{
    border-bottom: 1px solid #ddd;
  }
  .card_address{
    margin-left: pxToRem(15px);
  }
  .card{
    margin-top: pxToRem(5px);
    width: 100%;
    display: flex;
    line-height: 2.4;
    height: pxToRem(40px);
    background: #fff;
  }
  .card_left{
    margin-left: pxToRem(15px);
  }
  .card_right{
    margin-left: auto;
    margin-right: pxToRem(25px);
  }
  .mint-button--primary{
    width: 100%;
    margin-top: pxToRem(10px);
  }
  .mint-popup{
    width: 80%;
    border-radius: pxToRem(15px);
    margin-bottom: 50%;
  }
  .confirm{
    width: 100%;
    height: pxToRem(40px);
    margin-top: pxToRem(10px);
    background: rgb(38, 162, 255);
    color: white;
    text-align: center;
    line-height: pxToRem(40px);
    border-bottom-left-radius: pxToRem(15px);
    border-bottom-right-radius: pxToRem(15px);
  }
</style>
