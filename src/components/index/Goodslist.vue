<template>
  <div id="Goodslist">
    <div class="shopheader">
      <nav class="shopheader-header">
        <span class="shopheader-arrow" @click="back"></span>
      </nav>
      <section class="shopheader-main" @click="shopDetail">
        <div class="shopheader-main_content">
          <img class="shopheader-main_logo" src="https://fuss10.elemecdn.com/5/a9/05046650cc9a0357e518ff63b029dpng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/">
          <div class="shopheader-main_detail">
            <div class="detail-shopName">
              <span>丸来玩趣（大悦城店)</span>
            </div>
            <div class="detail-delivery">
              <span class="detail-delivery_item">蜂鸟专送</span>
              <span class="detail-delivery_item">32分钟送达</span>
              <span class="detail-delivery_lastitem">配送费¥5</span>
              <span class="detail-delivery_arrow"></span>
            </div>
            <div class="detail-notice">
              <span>公告：欢迎光临，用餐高峰期请提前下单，谢谢。</span>
            </div>
          </div>
        </div>
        <div class="shopheader-main_activity">
          <i class="activity-tip">新</i>
          <span class="activity-content">新用户下单立减17.0元(不与其它活动同享)</span>
          <span class="activity-number">3个活动</span>
        </div>
      </section>
    </div>
    <div class="shoptab">
      <div class="shoptab-item" @click="changeShowType='goods'">
        <span :class="changeShowType=='goods'?'shoptab-title-active':''">商品</span>
      </div>
      <div class="shoptab-item" @click="changeShowType='rate'">
        <span :class="changeShowType=='rate'?'shoptab-title-active':''">评价</span>
      </div>
    </div>
    <div class="" v-show="changeShowType=='goods'">
      <main class="menu-goods">
        <ul class="category">
          <li class="category-foodtype"   :class="{'category-foodtype-active':category.selected}"
          v-for="category in categorys"
          :key="category.index"
          @click="showSelected(category)">
            <img class="category-hotfood" v-if="category.isImg" :src="category.imgsrc">
            <span class="hotfood-description">{{category.description}}</span>
          </li>
        </ul>
        <section class="menuview">
          <dl class="">
            <dt>
              <div class="menu-header">
                <strong class="header-name">热销</strong>
                <span class="header-description">大家喜欢吃，才叫真好吃。</span>
              </div>
              <img class="header-icon" src="../../assets/more.svg">
            </dt>
            <dd>
              <img src="https://fuss10.elemecdn.com/7/14/280fefcb4a0c81c33ad5bbabceba8jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" class="foodimg">
              <section class="foodinfo">
                <header class="foodinfo-header">
                  <span class="foodinfo-detail">丸趣酸辣粉</span>
                  <div class="foodinfo-tip">
                    <span>招牌</span>
                  </div>
                </header>
                <p class="foodsales">
                  <span>月售77份</span>
                  <span style="margin-left:10px">好评率96%</span>
                </p>
                <p class="foodactivity" v-if="false">
                  <span>限1份</span>
                </p>
                <strong class="foodprice">
                  <span class="foodprice-number">13</span>
                  <span class="foodprice-lowest">起</span>
                </strong>
                <div class="cartbutton" v-if="true">
                  <span class="cartbutton-text">选规格</span>
                </div>
                <img v-if="false" class="addimg" src="../../assets/add.svg">
              </section>
            </dd>
            <dd>
              <img src="https://fuss10.elemecdn.com/7/e0/e5217845606a7df91a4dcbed54bb0jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" class="foodimg">
              <section class="foodinfo">
                <header class="foodinfo-header">
                  <span class="foodinfo-detail">招牌烤丸</span>
                  <div class="foodinfo-tip">
                    <span>招牌</span>
                  </div>
                </header>
                <p class="foodsales">
                  <span>月售73份</span>
                  <span style="margin-left:10px">好评率94%</span>
                </p>
                <p class="foodactivity" v-if="false">
                  <span>限1份</span>
                </p>
                <strong class="foodprice">
                  <span class="foodprice-number">10</span>
                  <span class="foodprice-lowest">起</span>
                </strong>
                <div class="cartbutton" v-if="false">
                  <span class="cartbutton-text">选规格</span>
                </div>
                <img v-if="true" class="addimg" src="../../assets/add.svg">
              </section>
            </dd>
            <dd>
              <img src="https://fuss10.elemecdn.com/0/9d/7f4fb4d5a08bbb8175ac50cd77febjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" class="foodimg">
              <section class="foodinfo">
                <header class="foodinfo-header">
                  <span class="foodinfo-detail">台湾纯肉烤肠</span>
                  <div class="foodinfo-tip" v-if="false">
                    <span>招牌</span>
                  </div>
                </header>
                <p class="foodsales">
                  <span>月售59份</span>
                  <span style="margin-left:10px">好评率90%</span>
                </p>
                <p class="foodactivity" v-if="true">
                  <span>限1份</span>
                </p>
                <strong class="foodprice">
                  <span class="foodprice-number">6</span>
                  <span class="foodprice-lowest">起</span>
                </strong>
                <div class="cartbutton" v-if="true">
                  <span class="cartbutton-text">选规格</span>
                </div>
                <img v-if="false" class="addimg" src="../../assets/add.svg">
              </section>
            </dd>
            <dd>
              <img src="https://fuss10.elemecdn.com/1/c5/bb3b2e41cc0e5d9318d075d674212jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/" class="foodimg">
              <section class="foodinfo">
                <header class="foodinfo-header">
                  <span class="foodinfo-detail">麻辣味</span>
                  <div class="foodinfo-tip" v-if="false">
                    <span>招牌</span>
                  </div>
                </header>
                <p class="foodsales">
                  <span>月售34份</span>
                  <span style="margin-left:10px">好评率100%</span>
                </p>
                <p class="foodactivity" v-if="false">
                  <span>限1份</span>
                </p>
                <strong class="foodprice">
                  <span class="foodprice-number">10</span>
                  <span class="foodprice-lowest">起</span>
                </strong>
                <div class="cartbutton" v-if="false">
                  <span class="cartbutton-text">选规格</span>
                </div>
                <img v-if="true" class="addimg" src="../../assets/add.svg">
              </section>
            </dd>
          </dl>
        </section>
      </main>
      <footer>
        <div class="shoppingcart2" attr-number='3'>
        </div>
        <div class="shoppingprice">
          <p style="padding-top: 8px;">
            <span class="totalprice">￥13</span>
          </p>
          <p class="deliveryprice">配送费¥5</p>
        </div>
        <div class="shoppingpay">
          去结算
        </div>
      </footer>
    </div>

    <main class="menu-rate" v-show="changeShowType=='rate'">
      <section class="showrate">
        <div class="showrate-left">
          <strong class="ratescore">4.6</strong>
          <div class="ratetext">综合评价</div>
          <p class="ratedescription">高于周边商家46.9%</p>
        </div>
        <div class="showrate-right">
          <div class="ratelist">
            <span class="ratelist-1">服务态度</span>
            <Ratingstar style="margin-left:15px" :rating='rating'></Ratingstar>
            <span class="ratelist-2">4.6</span>
          </div>
          <div class="ratelist">
            <span class="ratelist-1">菜品评价</span>
            <Ratingstar style="margin-left:15px" :rating='rating'></Ratingstar>
            <span class="ratelist-2">4.6</span>
          </div>
          <div class="ratelist">
            <span class="ratelist-1">送达时间</span>
            <span class="ratelist-3">35分钟</span>
          </div>
        </div>
      </section>
      <section class="ratedetail">
        <div class="taglist">
          <ul class="tagitems">
            <li v-for="tag in taglist" :key="tag.index"
            :class="{'tagitem-unsatisfied':tag.ratecategory=='不满意',
            'tagitem':tag.ratecategory!='不满意','tagitem-unsatisfied-actived':tag.choosed&&tag.ratecategory=='不满意',
            'tagitem-actived':tag.choosed&&tag.ratecategory!='不满意'}"
            @click='choose(tag)'>{{tag.ratecategory}}({{tag.number}})</li>
          </ul>
        </div>
        <div class="commentlist">
          <ul>
            <li class="comment">
              <img src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/">
              <div class="commentdetail">
                <div class="commentuser">
                  <span>匿名用户</span>
                  <span>2017-06-29</span>
                </div>
                <Ratingstar style="margin-top:5px" :rating='rating'></Ratingstar>
                <ul class="commentphotos">
                  <li>
                    <img src="https://fuss10.elemecdn.com/a/91/42caeb3dad46cc5c3ee7f4927dbc9jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/">
                  </li>
                  <li>
                    <img src="https://fuss10.elemecdn.com/a/91/42caeb3dad46cc5c3ee7f4927dbc9jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/">
                  </li>
                </ul>
                <ul class="commentfoods">
                  <li>全家福酸辣粉-加量粉丝2元量</li>
                  <li>台湾纯肉烤肠-原味肠</li>
                  <li>加料丸子-加丸2颗</li>
                  <li>加量榨菜</li>
                </ul>
              </div>
            </li>
            <li class="comment">
              <img src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/">
              <div class="commentdetail">
                <div class="commentuser">
                  <span>匿名用户</span>
                  <span>2017-06-14</span>
                </div>
                <Ratingstar style="margin-top:5px" :rating='5.0'></Ratingstar>
                <ul class="commentphotos">
                  <li>
                    <img src="https://fuss10.elemecdn.com/1/35/4b1bdb34409d7a611d6d5f9e67146jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/">
                  </li>
                </ul>
                <ul class="commentfoods">
                  <li>全家福酸辣粉-加量粉丝2元量</li>
                  <li>台湾纯肉烤肠-原味肠</li>
                  <li>加料丸子-加丸2颗</li>
                </ul>
              </div>
            </li>
            <li class="comment">
              <img src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/">
              <div class="commentdetail">
                <div class="commentuser">
                  <span>匿名用户</span>
                  <span>2017-06-06</span>
                </div>
                <Ratingstar style="margin-top:5px" :rating='4.0'></Ratingstar>
                <ul class="commentphotos">
                  <li>
                    <img src="https://fuss10.elemecdn.com/3/2e/74ec9a6d148d794d8ed8ecf865e61jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/">
                  </li>
                  <li>
                    <img src="https://fuss10.elemecdn.com/3/2e/74ec9a6d148d794d8ed8ecf865e61jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/">
                  </li>
                  <li>
                    <img src="https://fuss10.elemecdn.com/3/2e/74ec9a6d148d794d8ed8ecf865e61jpeg.jpeg?imageMogr/format/webp/thumbnail/!142x142r/gravity/Center/crop/142x142/">
                  </li>
                </ul>
                <ul class="commentfoods">
                  <li>武汉热干面-加丸2颗</li>
                  <li>加料丸子-加丸1颗</li>
                  <li>加料---荷包蛋2元</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import Ratingstar from './Ratingstar';
export default {
  name: "Goodslist",
  components:{
    Ratingstar
  },
  data: () => ({
    changeShowType:'goods',
    rating:'4.5',
    categorys:[
      {isImg:true,imgsrc:'https://fuss10.elemecdn.com/5/da/3872d782f707b4c82ce4607c73d1ajpeg.jpeg?imageMogr/format/webp/thumbnail/18x/',description:'热销',selected:true},
      {isImg:true,imgsrc:'https://fuss10.elemecdn.com/4/73/5c4342691749b8e1a531149a46117jpeg.jpeg?imageMogr/format/webp/thumbnail/18x/',description:'优惠',selected:false},
      {isImg:false,imgsrc:'',description:'折扣套餐',selected:false},
      {isImg:false,imgsrc:'',description:'招牌丸子系列',selected:false},
      {isImg:false,imgsrc:'',description:'招牌酸辣粉系列',selected:false},
      {isImg:false,imgsrc:'',description:'鸡汤米线系列',selected:false},
      {isImg:false,imgsrc:'',description:'面条系列',selected:false},
      {isImg:false,imgsrc:'',description:'韩国年糕系列',selected:false},
      {isImg:false,imgsrc:'',description:'手抓饼系列',selected:false},
      {isImg:false,imgsrc:'',description:'台湾烤香肠',selected:false},
      {isImg:false,imgsrc:'',description:'粉面加料系列',selected:false}
    ],
    taglist:[
      {ratecategory:'全部',choosed:true,number:217},
      {ratecategory:'满意',choosed:false,number:209},
      {ratecategory:'不满意',choosed:false,number:8},
      {ratecategory:'有图',choosed:false,number:13},
    ]
  }),
  methods:{
    back(){
      this.$router.push('/');
    },
    shopDetail(){
      console.log(1);
    },
    showSelected(category){
      this.categorys.forEach(item=>item.selected=false);
      category.selected=true;
    },
    choose(tag){
      this.taglist.forEach(item=>item.choosed=false);
      tag.choosed=true;
    }
  }
}
</script>
<style lang="scss" scoped>
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1em;
  }
  .shopheader{
    width: 100%;
    height: pxToRem(160px);
  }
  .shopheader-header{
    width: inherit;
    height: pxToRem(41px);
    background: rgb(38, 162, 255);
  }
  .shopheader-arrow:before{
    content: "";
    position: absolute;
    width: pxToRem(12px);
    height: pxToRem(12px);
    border: 1px solid white;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: pxToRem(13px);
    left: pxToRem(20px);
  }
  .shopheader-main{
    width: inherit;
    height: pxToRem(120px);
    background: rgb(38, 162, 255);
  }
  .shopheader-main_content{
    width: inherit;
    height: pxToRem(90px);
    display: flex;
  }
  .shopheader-main_logo{
    width: pxToRem(80px);
    height: pxToRem(80px);
    margin-top: pxToRem(5px);
    margin-left: pxToRem(15px);
  }
  .shopheader-main_detail{
    width: 70%;
    height: pxToRem(80px);
    margin-top: pxToRem(5px);
    padding: 0 pxToRem(5px) 0 pxToRem(10px);
  }
  .detail-shopName{
    font-weight: 700;
    font-size: pxToRem(18px);
    color: white;
    height: pxToRem(24px);
  }
  .detail-delivery{
    margin-top: pxToRem(8px);
    height: pxToRem(20px);
  }
  .detail-delivery_item{
    font-size: pxToRem(12px);
    color: #fff;
    line-height: pxToRem(20px);
  }
  .detail-delivery_item:after{
    content: "/";
    opacity: 0.5;
    margin-left: pxToRem(5px);
  }
  .detail-delivery_lastitem{
    font-size: pxToRem(12px);
    color: #fff;
    line-height: pxToRem(20px);
  }
  .detail-delivery_arrow{
    margin-left: pxToRem(50px);
  }
  .detail-delivery_arrow:after{
    content: "";
    position: absolute;
    margin-top: pxToRem(3px);
    width: pxToRem(10px);
    height: pxToRem(10px);
    border: pxToRem(2px) solid white;
    border-width: pxToRem(1px) 0 0 pxToRem(1px);
    transform: rotate(135deg);
  }
  .detail-notice{
    margin-top: pxToRem(8px);
    height: pxToRem(20px);
    font-size: pxToRem(12px);
    color: #fff;
    line-height: pxToRem(20px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .shopheader-main_activity{
    width: inherit;
    margin-top: pxToRem(10px);
    height: pxToRem(15px);
    display: flex;
  }
  .activity-tip{
    font-size: pxToRem(10px);
    line-height: pxToRem(16px);
    margin-left: pxToRem(15px);
    height: 80%;
    font-style: normal;
    background-color: rgb(112, 188, 70);
    color: rgb(255, 255, 255);
    border-color: rgb(112, 188, 70);
  }
  .activity-content{
    font-size: pxToRem(10px);
    margin-left: pxToRem(10px);
    line-height: pxToRem(16px);
    color: #fff;
  }
  .activity-number{
    font-size: pxToRem(10px);
    line-height: pxToRem(16px);
    color: #fff;
    margin-left: auto;
    margin-right: pxToRem(20px);
  }
  .shoptab{
    width: 100%;
    height: pxToRem(50px);
    background: white;
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  .shoptab-item{
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: pxToRem(50px);
    color: #666;
  }
  .shoptab-title-active{
    position: relative;
    color: #3190e8;
  }
  .shoptab-title-active:after{
    content: "";
    position: absolute;
    top: pxToRem(23px);
    left: 0px;
    width: pxToRem(32px);
    height: 2px;
    background-color: #3190e8;
    border-radius: 1px;
  }
  .menu-goods{
    width: 100%;
    height: pxToRem(405px);
    display: flex;
  }
  .category{
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-y: auto;
    width: 25%;
    font-size: pxToRem(15px);
    height: pxToRem(435px);
  }
  .category-foodtype{
    height: pxToRem(50px);
    display: flex;
    color: #666;
    padding-left: pxToRem(10px);
    align-items: center;
    position: relative;
  }
  .category-foodtype-active{
    font-weight: bolder;
    background-color: #fff;
  }
  .category-foodtype-active:after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: pxToRem(3px);
    background-color: #3190e8;
  }
  .category-hotfood{
    width: pxToRem(10px);
    height: pxToRem(13px);
    padding-left: pxToRem(5px);
  }
  .hotfood-description{
    width: 100%;
    margin-left: pxToRem(5px);
    margin-right: pxToRem(10px);
  }
  .menuview{
    width: 75%;
    height: pxToRem(405px);
    background-color: #fff;
    overflow-y: auto;
  }
  dl{
    margin: 0;
    padding: 0;
  }
  dt{
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #f1f1f1;
    align-items: center;
    width: 100%;
    height: pxToRem(35px);
  }
  .header-name{
    font-size: pxToRem(15px);
    margin-left: pxToRem(10px);
    color: #666;
  }
  .header-description{
    font-size: pxToRem(12px);
    color: #999;
  }
  .header-icon{
    width: pxToRem(40px);
    height: pxToRem(25px);
    margin-left: auto;
  }
  dd{
    margin: 0;
    height: pxToRem(90px);
    padding: pxToRem(15px) pxToRem(10px);
    background-color: #fff;
    margin-bottom: 1px;
    display: flex;
  }
  dd:not(:last-child) {
    box-shadow: pxToRem(30px) pxToRem(2px) 0 0 #ddd;
  }
  .foodimg{
    width: pxToRem(60px);
    height: pxToRem(60px);
  }
  .foodinfo{
    width: 100%;
    padding-left: pxToRem(15px);
    position: relative;
  }
  .foodinfo-header{
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
  .foodinfo-detail{
    font-size: pxToRem(16px);
    font-weight: bold;
  }
  .foodinfo-tip{
    width: pxToRem(35px);
    height: pxToRem(20px);
    font-weight: bold;
    line-height: 1.4;
    font-size: pxToRem(10px);
    border-radius: pxToRem(5px);
    margin-left: auto;
    color: rgb(236, 156, 104);
    border: 1px solid rgb(236, 156, 104);
  }
  .foodsales{
    margin: 0;
    padding: 0;
    font-size: pxToRem(12px);
    color: #666;
    margin-top: pxToRem(5px);
  }
  .foodactivity{
    font-size: pxToRem(10px);
    transform: scale(.8);
    transform-origin: left;
    margin-top: pxToRem(3px);
    color: #f07373;
    white-space: nowrap;
  }
  .foodactivity span{
    border: 1px solid currentColor;
    padding: 0 pxToRem(2px);
  }
  .foodprice{
    position: absolute;
    bottom: 0;
    left: pxToRem(15px);
    color: #f60;
  }
  .foodprice:before{
    content: '\A5';
    font-weight: 400;
    font-size: pxToRem(10px);
  }
  .foodprice-number{
    font-size: pxToRem(18px);
  }
  .foodprice-lowest{
    color: #666;
    font-size: pxToRem(12px);
    font-weight: normal;
  }
  .cartbutton{
    position: absolute;
    bottom: 0;
    right: 0;
    width: pxToRem(60px);
    height: pxToRem(25px);
    display: flex;
    align-items: center;
    font-size: pxToRem(14px);
    border-radius: pxToRem(12px);
    background-color: #3199e8;
    color: #fff;
  }
  .cartbutton-text{
    margin: 0 auto;
  }
  .addimg{
    width: pxToRem(25px);
    height: pxToRem(25px);
    position: absolute;
    bottom: 0;
    right: 0;
  }
  footer{
    width: 100%;
    height: pxToRem(51px);
    display: flex;
    position: relative;
    background-color: #3d3d3f;
  }
  .shoppingcart{
    width: pxToRem(50px);
    height: pxToRem(50px);
    position: absolute;
    left: pxToRem(15px);
    bottom: pxToRem(10px);
    border-radius: 100%;
    background-color: #3190e8;
    border: pxToRem(5px) solid #444;
    background: #3d3d3f;
  }
  .shoppingcart:before{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(../../assets/shoppingcart.svg) 50% no-repeat;
    background-size: pxToRem(28px);
    content: "";
  }
  .shoppingcart2{
    width: pxToRem(50px);
    height: pxToRem(50px);
    position: absolute;
    left: pxToRem(15px);
    bottom: pxToRem(10px);
    border-radius: 100%;
    background: #3190e8;
    border: pxToRem(5px) solid #444;
  }
  .shoppingcart2:before{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(../../assets/shoppingcart2.svg) 50% no-repeat;
    background-size: pxToRem(28px);
    content: "";
  }
  .shoppingcart2::after{
    position: absolute;
    right: pxToRem(-5px);
    top: pxToRem(-6px);
    line-height: 1;
    background-color: #ff461d;
    color: #fff;
    border-radius: pxToRem(5px);
    padding: pxToRem(1px) pxToRem(2px);
    content: attr(attr-number);
    font-size: pxToRem(10px);
  }
  p{
    margin: 0;
    padding: 0;
  }
  .shoppingprice{
    width: pxToRem(100px);
    height: 100%;
    color: #fff;
    margin-left: pxToRem(80px);
    font-size: pxToRem(20px);
    line-height: 1;
    color: #fff;
  }
  .totalprice{
    margin-left: pxToRem(-4px);
  }
  .deliveryprice{
    margin-top: pxToRem(2px);
    font-size: pxToRem(10px);
  }
  .shoppingpay{
    margin-left: auto;
    height: pxToRem(51px);
    width: pxToRem(100px);
    background-color: #4cd964;
    color: #fff;
    text-align: center;
    font-size: pxToRem(16px);
    font-weight: 700;
    line-height: pxToRem(51px);
  }
  .showrate{
    height: pxToRem(90px);
    background: #fff;
    padding: pxToRem(15px);
    display: flex;
    margin-bottom: pxToRem(15px);
  }
  .showrate-left{
    width: 35%;
    height: inherit;
    border-right: 1px solid #ddd;
    text-align: center;
  }
  .showrate-right{
    width: 65%;
    height: inherit;
  }
  .ratescore{
    width: 100%;
    height: pxToRem(20px);
    font-size: pxToRem(35px);
    font-weight: normal;
    color: #f60;
    display: block;
  }
  .ratetext{
    width: 100%;
    height: pxToRem(20px);
    color: #666;
    font-size: pxToRem(15px);
    line-height: pxToRem(20px);
  }
  .ratedescription{
    width: 100%;
    height: pxToRem(20px);
    line-height: pxToRem(20px);
    font-size: pxToRem(10px);
    color: #999;
  }
  .ratelist{
    width: 90%;
    height: pxToRem(20px);
    padding: pxToRem(5px) 0px pxToRem(5px) pxToRem(20px);
    display: flex;
  }
  .ratelist-1{
    font-size: pxToRem(15px);
    color: #666;
    line-height: 0.8;
    margin-left: pxToRem(5px);
  }
  .ratelist-2{
    font-size: pxToRem(15px);
    color: #f60;
    line-height: 0.8;
    margin-left: pxToRem(15px);
  }
  .ratelist-3{
    font-size: pxToRem(10px);
    color: #999;
    line-height: 1.18;
    margin-left: pxToRem(15px);
  }
  .ratedetail{
    height: pxToRem(545px);
    padding: pxToRem(15px);
    background: #fff;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .taglist{
    padding-bottom: pxToRem(15px);
    border-bottom: 1px solid #ddd;
  }
  .tagitems{
    width: 100%;
    height: pxToRem(30px);
    display: flex;
  }
  .tagitem{
    padding: pxToRem(3px) pxToRem(5px) pxToRem(5px);
    border-radius: pxToRem(4px);
    color: #6d7885;
    background-color: #ebf5ff;
  }
  .tagitem-unsatisfied{
    padding: pxToRem(3px) pxToRem(5px) pxToRem(5px);
    border-radius: pxToRem(4px);
    margin-left: pxToRem(10px);
    color: #aaa;
    background-color: #f5f5f5;
  }
  .tagitem:not(:first-child){
    margin-left: pxToRem(10px);
  }
  .tagitem-actived{
    color: #fff;
    background-color: #3190e8;
  }
  .tagitem-unsatisfied-actived{
    color: #fff;
    background-color: #ccc;
  }
  .comment{
    width: 100%;
    height: pxToRem(150px);
    display: flex;
    padding: pxToRem(10px) 0;
  }
  .comment:not(:last-child){
    border-bottom: 1px solid #ddd;
  }
  .comment img{
    width: pxToRem(40px);
    height: pxToRem(40px);
  }
  .commentdetail{
    width: 100%;
    height: pxToRem(130px);
    margin-left: pxToRem(20px);
  }
  .commentuser{
    height: pxToRem(20px);
    font-size: pxToRem(16px);
    display: flex;
    color: #666;
  }
  .commentuser span:nth-of-type(2){
    margin-left: auto;
    line-height: pxToRem(20px);
    font-size: pxToRem(12px);
    color: #999;
  }
  .commentphotos{
    margin-top: pxToRem(5px);
    margin-left: pxToRem(-5px);
    display: flex;
  }
  .commentphotos img{
    width: pxToRem(70px);
    height: pxToRem(70px);
    margin: pxToRem(5px);
  }
  .commentfoods{
    width: 100%;
    height: pxToRem(20px);
    margin-left: pxToRem(-5px);
    margin-top: pxToRem(-5px);
    display: flex;
  }
  .commentfoods li{
    font-size: pxToRem(12px);
    line-height: pxToRem(15px);
    margin: pxToRem(5px);
    padding: pxToRem(2px) pxToRem(5px);
    width: pxToRem(50px);
    height: pxToRem(15px);
    color: #999;
    border: 1px solid #ddd;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
