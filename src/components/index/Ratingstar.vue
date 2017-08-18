<template>
	<div class="rating_container">
        <section class="star_container">
            <svg class="grey_fill" v-for="num in 5" :key="num">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star">
                  <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                </use>
            </svg>
        </section>
        <div :style="'width:' + rating/80*70 + 'rem'" class="star_overflow">
            <section class="star_container" >
                <svg  class="orange_fill" v-for="num in 5" :key="num">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star">
                    <svg viewBox="0 0 22 22" id="rating-star" width="100%" height="100%"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></svg>
                  </use>
                </svg>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
      name:'Ratingstar',
      props:['rating'],
    }
</script>

<style lang="scss" scoped>
	@function pxToRem($px, $base-font-size: 16px){
		 @return ($px / $base-font-size) * 1em;
	}
  .rating_container{
    width: pxToRem(70px);
    height: pxToRem(12px);
    position: relative;
  }
  .star_container{
    position: absolute;
    display: flex;
    width: pxToRem(70px);
    height: pxToRem(12px);
    top: 0;
    left: 0;
  }
  .star_overflow{
    overflow: hidden;
    position: absolute;
    height: pxToRem(12px);
    top: 0;
    left: 0;
  }
  .grey_fill{
    fill: #ddd;
  }
  .orange_fill{
    fill: #ffaa0c;
  }
</style>
