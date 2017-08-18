<template>
  <div>
    <header>
      <input type="text" placeholder="搜索商品、商家" class="search">
    </header>
    <section id="food">
      <div class="food" v-for="food in foods" :key="food.index">
        <div class="container">
          <img class="food_img" :src="food.pic">
        </div>
        <span>{{food.cuisine}}</span>
      </div>
    </section>
    <div class="shop-title">
      <h3 class="index-title">推荐商家</h3>
    </div>
    <section id="shoplist">
      <section class="shop"  v-for="shop in shops" :key="shop.index" @click='shopdirection'>
          <img class="shop_img" :src="shop.pic" >
          <div class="shopinfo">
            <h3 class="info">{{shop.seller}}</h3>
            <p>月售{{shop.orders}}单</p>
          </div>
      </section>
    </section>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import BottomNav from "@/components/BottomNav";
export default {
  name: 'index',
  components: {
    BottomNav
  },
  data:function () {
    return {
      foods:[
        {pic:'/static/cuisine/1.jpeg',cuisine:'鲁菜'},
        {pic:'/static/cuisine/2.jpeg',cuisine:'川菜'},
        {pic:'/static/cuisine/3.jpeg',cuisine:'粤菜'},
        {pic:'/static/cuisine/4.jpeg',cuisine:'闽菜'},
        {pic:'/static/cuisine/5.jpeg',cuisine:'苏菜'},
        {pic:'/static/cuisine/6.jpeg',cuisine:'浙菜'},
        {pic:'/static/cuisine/7.jpeg',cuisine:'湘菜'},
        {pic:'/static/cuisine/8.jpeg',cuisine:'徽菜'}
      ],
      shops:[
        {pic:'/static/shop/1.jpeg',seller:'桃园眷村',orders:243},
        {pic:'/static/shop/2.jpeg',seller:'永和大王',orders:654},
        {pic:'/static/shop/3.png',seller:'汉堡王',orders:105},
        {pic:'/static/shop/3.png',seller:'汉堡王',orders:105},
        {pic:'/static/shop/3.png',seller:'汉堡王',orders:105}
      ]
    }
  },
  created() {
    this.$store.commit('updateTabBarIndex', '/');
  },
  methods: {
    shopdirection() {
      this.$router.push('/goodslist');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @function pxToRem($px, $base-font-size: 16px){
     @return ($px / $base-font-size) * 1rem;
  }

  header{
    display: block;
    width: 100%;
    height: pxToRem(120px);
    background: #0096ff;
    position: relative;
  }
  header input{
    font-size: pxToRem(16px);
  }
  .search{
    display: block;
    width: 80%;
    height: pxToRem(40px);
    border-radius: pxToRem(25px);
    text-align: center;
    outline: none;
    border:none;
    position: absolute;
    left: 10%;
    top: pxToRem(40px);
  }
  #food{
    width: 100%;
    height: pxToRem(160px);
    background: white;
  }
  .food{
    width: 25%;
    height: pxToRem(80px);
    float: left;
    text-align: center;
  }
  .food_img{
    margin-top: pxToRem(10px);
    width:pxToRem(40px);
    height:pxToRem(40px);
  }
  #shoplist{
    width: 100%;
    height: pxToRem(515px);
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: white;
    overflow-y: auto;
  }
  .shop-title{
    width: 100%;
    background: white;
    height: pxToRem(40px);
  }
  .index-title{
    width: 50%;
    margin: 0px;
    margin-top: pxToRem(10px);
    font-size: pxToRem(16px);
    font-weight: normal;
    background: white;
    height: pxToRem(40px);
    line-height: pxToRem(40px);
    padding-left: pxToRem(15px);
  }
  .shop{
    width: 100%;
    height: pxToRem(90px);
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  .shop_img{
    width: pxToRem(70px);
    height: pxToRem(70px);
    margin-top: pxToRem(10px);
    margin-left: pxToRem(10px);
  }
  .shopinfo{
    width: 70%;
    height: pxToRem(70px);
    margin-top: pxToRem(10px);
    margin-left: pxToRem(10px);
  }
  .info{
    margin: 0px;
    font-size: pxToRem(16px);
    margin-top: pxToRem(5px);
    padding-left: 35%;
  }
  p{
    padding-left: 32%;
  }
</style>
