<template>
  <div id="address">
    <mt-header fixed :title="'收货地址'">
      <router-link to="/privateinfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <section class="cards">
      <div class="card bottom">
        <span class="card_left">收货人</span>
        <span class="card_right" style="margin-left:60px">snowball</span>
      </div>
      <div class="card bottom">
        <span class="card_left">电话号码</span>
        <span class="card_right">15652711704</span>
      </div>
      <div class="card bottom" @click="choseAdd()">
        <span class="card_left">所在地区</span>
        <span class="card_right" v-if="!!Province">{{Province?Province:''}} {{City?City:''}} {{District?District:''}}</span>
        <span class="card_right" v-if="!Province" style="color:rgba(0,0,0,0.6)">请点击选择地区</span>
      </div>
      <mt-field label="详细地址" placeholder="请填写详细地址" v-model="address"></mt-field>
    </section>
    <mt-button size="large" type="primary" @click.native="confirmAddress">编辑收货地址</mt-button>
    <section class="myAddress">
        <!-- 居住地址三级联动选项 -->
        <section class="showChose" v-show="showChose">
          <section class="address">
            <section class="title">
              <h4>居住地址</h4>
              <span @click="closeAdd()">×</span>
            </section>
            <section class="title">
              <div class="area" @click="provinceSelected()">
                 {{Province?Province:info[province-1].name}}
              </div>
              <div class="area" @click="citySelected()" :class="City?'':'active'">
                 {{City?City:'请选择'}}
              </div>
              <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">
                 {{District?District:'请选择'}}
              </div>
            </section>
            <ul>
               <li class="addList" v-for="(v,k) in info"
                   @click="getProvinceId(v.id, v.name, k)"
                   v-show="showProvince"
                   :class="v.selected ? 'active' : ''">{{v.name}}</li>
               <li class="addList" v-for="(v,k) in showCityList"
                   @click="getCityId(v.id, v.name, k)"
                   v-show="showCity"
                   :class="v.selected ? 'active' : ''">{{v.name}}</li>
               <li class="addList" v-for="(v,k) in showDistrictList"
                   @click="getDistrictId(v.id, v.name, k)"
                   v-show="showDistrict"
                   :class="v.selected ? 'active' : ''">{{v.name}}</li>
             </ul>
          </section>
        </section>
    </section>
  </div>
</template>
<script>
  import provinces from "../../assets/provinces";
  import { Header as Mtheader} from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import { Button as Mtbutton } from 'mint-ui';
  import { Field } from 'mint-ui';
  import moment from 'moment';
  export default {
    name: 'address',
    data() {
      return {
                personAddress:'',
                pageTitle: '居住地址',
                District: '',
                Province: '',
                City: '',
                address: '',
                showChose: false,
                showProvince: true,
                showCity: false,
                showDistrict: false,
                showCityList: false,
                showDistrictList: false,
                province: 5,
                city: 3,
                district: 57,
                GetProvinceId: 2,
                areaProvince: '',
                areaCity: '',
                areaDistrict: '',
                // v-for循环判断是否为当前
                selected: false,
                info:provinces
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
      userdetail() {
        return this.$store.getters.Users_detail
      }
    },
    methods: {
        editDetail(){
          this.$store.dispatch("editDetail",{
            $http:this.$http,
            data:{
              gender:this.userdetail.gender,
              birthday:this.userdetail.birthday,
              shippingAddress:this.personAddress
            }
          }).then(response=>{
            if(!response.data.code){
              MessageBox('提示', '成功').then(()=>{
                this.$store.dispatch("getDetail",{
                  $http:this.$http
                });
                this.$router.push('/privateinfo');
              })
            }else{
              MessageBox({
                title: '提示',
                message: response.data.message,
              })
            }
          })
        },
        confirmAddress(){
          this.personAddress=this.Province+this.City+this.District+this.address;
          // this.userdetail.birthday=moment(this.userdetail.birthday).format('YYYY-MM-DD');
          this.editDetail();
        },
        choseAdd: function() {
            this.showChose = true;
        },
        closeAdd: function() {
            this.showChose = false;
        },
        _filter(add, name, code) {
            let result = [];
            for (let i = 0; i < add.length; i++) {
                if (code == add[i].id) {
                    result = add[i][name];
                }
            }
            return result;
        },
        getProvinceId: function(code, input, index) {
            this.province = code;
            this.Province = input;
            this.showProvince = false;
            this.showCity = true;
            this.showDistrict = false;
            this.showCityList = this._filter(this.info, 'city', this.province);
            // 点击选择当前
            this.info.map(a => a.selected = false);
            this.info[index].selected = true;
            this.areaProvince = input;
        },
        provinceSelected: function() {
            // 清除市级和区级列表
            this.showCityList = false;
            this.showDistrictList = false;
            // 清除市级和区级选项
            this.City = false;
            this.District = false;
            // 选项页面的切换
            this.showProvince = true;
            this.showCity = false;
            this.showDistrict = false;
        },
        getCityId: function(code, input, index) {
            this.city = code;
            this.City = input;
            this.showProvince = false;
            this.showCity = false;
            this.showDistrict = true;
            this.showDistrictList = this._filter(this.showCityList, 'district', this.city);
            // 选择当前添加active
            this.showCityList.map(a => a.selected = false);
            this.showCityList[index].selected = true;
            this.areaCity = input;
        },
        citySelected: function() {
            this.showProvince = false;
            this.showCity = true;
            this.showDistrict = false;
        },
        getDistrictId: function(code, input, index) {
            this.district = code;
            this.District = input;
            // 选择当前添加active
            this.showDistrictList.map(a => a.selected = false);
            this.showDistrictList[index].selected = true;
            // 选取市区选项之后关闭弹层
            this.showChose = false;
            this.areaDistrict = input;
        },
        districtSelected: function() {
            this.showProvince = false;
            this.showCity = false;
            this.showDistrict = true;
        }
    }
  }
</script>
<style lang="scss" scoped>
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1rem;
  }
    .mint-button--primary{
      margin-top: pxToRem(15px);
      width: 100%;
    }
    .mint-cell{
      width: 90%;
      height: pxToRem(50px);
      margin-left: pxToRem(30px);
    }
    .cards{
      margin-top: pxToRem(60px);
      background: white;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
    .bottom{
      border-bottom: 1px solid #ddd;
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
      margin-left: pxToRem(40px);
    }
    .card_right{
      margin-left: pxToRem(40px);
    }
    .myAddress {
        margin-top: pxToRem(40px);
        width: 100%;
        background-color: white;
        border-top: 4px solid rgba(245, 245, 245, 1);
        color: #333;
    }
    .myAddress {
        border-bottom: 1px solid rgba(245, 245, 245, 0.8);
    }
    .showChose {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 120;
        background: rgba(122,122,122,0.6);
    }
    .address {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 121;
        background: #fff;
        width: 100%;
    }
    .title{
      display: flex;
    }
    .title h4 {
        width: 40%;
        margin-left: 10%;
        font-size: pxToRem(22px);
        line-height: pxToRem(18px);
        font-weight: normal;
        color: #999;
    }
    .title span {
        height: 100%;
        margin-top: pxToRem(18px);
        margin-left: pxToRem(140px);
        font-size: pxToRem(36px);
        color: red;
    }
    .area {
        display: inline-block;
        font-size: pxToRem(16px);
        line-height: pxToRem(24px);
        margin-left: 10%;
        color: #333;
    }
    .addList {
        margin-left: -pxToRem(28px);
        font-size: pxToRem(16px);
        line-height: pxToRem(26px);
        color: #333;
    }
    /* 修改的格式 */
    ul,li{
      margin: 0;
      padding: 0;
    }
    .address ul {
        height: 100%;
        padding-left: 10%;
        height: pxToRem(200px);
        list-style: none;
        overflow: auto;
    }
    .address li{
      margin-top: pxToRem(20px);
    }
    .address .title .active {
        color: #0071B8;
        border-bottom: 1px solid #0071B8;
    }
    .address ul .active {
        color: #0071B8;
    }
</style>
