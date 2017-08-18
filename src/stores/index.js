import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    tabBarIndex: '/',
    Users:{
      info:{},
      avatar:'',
      detail:{}
    }
  },
  getters:{
    tabBarIndex(state) {
        return state.tabBarIndex;
    },
    Users_info(state){
      return state.Users.info
    },
    Users_avatar(state){
      return state.Users.avatar
    },
    Users_detail(state){
      return state.Users.detail
    }
  },
  mutations:{
    updateTabBarIndex(state, data) {
      state.tabBarIndex = data;
    },
    update_Users_info(state, data){
      state.Users.info = data;
    },
    update_Users_avatar(state, data){
      state.Users.avatar = data;
    },
    update_Users_detail(state, data){
      state.Users.detail = data;
    }
  },
  actions:{
    Register(store,payload){
      let config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      };

      return payload.$http.post('http://localhost:8080/api/user/reg', 'username='+payload.data.username+'&password='+payload.data.password+'&repassword='+payload.data.repassword, config)

    },
    Login(store,payload){
      let config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      };
      return new Promise(function(resolve, reject) {
        payload.$http.post('http://localhost:8080/api/user/login', 'username='+payload.data.username+'&password='+payload.data.password, config).then((response) => {
          if (response.data.code) {
            reject(response.data);
          } else {
            store.commit('update_Users_info', response.data);
            resolve(response.data);
          }
        });
      })
    },
    loginOut(store,payload){
      return payload.$http.get('http://localhost:8080/api/user/logout');
    },
    uploadImg(store, {$http,data}){
      let fd = new FormData();
      fd.append('avatar', data.avatar);
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/user/avatar/upload',
        data: fd
      });
    },
    getDetail(store,payload){
      payload.$http.get('http://localhost:8080/api/user/profile').then((response) => {
       store.commit('update_Users_detail', response.data);
     });
    },
    editDetail(store,payload){
      let config = {
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        }
      };
      return payload.$http.post('http://localhost:8080/api/user/profile/edit', 'gender='+payload.data.gender+'&birthday='+payload.data.birthday+'&shippingAddress='+payload.data.shippingAddress, config)
    }
  }
})
