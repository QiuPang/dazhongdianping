<template>
  <div>
    <mt-header fixed :title="'发现'">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <bottom-nav></bottom-nav>
  </div>
</template>
<script>
import { Header as Mtheader} from 'mint-ui';
import { Button as Mtbutton } from 'mint-ui';
import BottomNav from "@/components/BottomNav";
export default {
  name: "discover",
  components: {
    BottomNav
  },
  data: function data() {
    return {

    }
  },
  created() {
    this.$store.commit('updateTabBarIndex', '/discover');
  }
}
</script>
<style>
</style>
