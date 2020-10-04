import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    check_login: false,
    login_account:{
      email: '',
      password: ''
    },
    mail:{}  
  },
  mutations: {
    login_account_login(state,login_account){ 
      console.log('Successfull Login')
      state.login_account = login_account
      axios.post('http://localhost:3000/testlogin', state.login_account).then(res => {
        state.mail = res.data
        console.log(res.data)
        console.log(state.mail)
      })
        state.check_login = true      
    },
    login_account_logout(state){
      console.log('Successfull Logout')
      state.login_account.email = ''
      state.login_account.password = ''
      state.check_login = false
      state.mail = {}
    }
  },
  actions: {
    login({commit},login_account){
      commit('login_account_login',login_account);
    },
    logout({commit}){
      commit('login_account_logout');
    }
  },
  getters:{
    get_check_login_inverse(state){
      return !state.check_login
    },
    get_check_login(state){
      return state.check_login
    },
    get_subject(state){
      return state.mail.subject
    },
    get_from(state){
      return state.mail.from
    }
  },
  modules: {
  }
});
