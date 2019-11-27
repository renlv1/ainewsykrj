import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountList: {},
    userInfo: {},
    mStatus: {}, // 商户状态
    mCount: 0, // 待确认的赏金单条数
    loading: false,
    errorMsg: '',
    lang: 'CN',
    votePageState: { // 记录选项卡的位置
      head: 0,
      foot: 0
    }
  },
  getters: {
    accountList: state => state.accountList,
    userInfo: state => state.userInfo
  },
  mutations: {
    ACCOUNT (state, data) {
      state.accountList = data
    },
    USER_INFO (state, data) {
      state.userInfo = data
    },
    SET_STATUS (state, data) {
      state.mStatus = data
    },
    SET_mapData (state, data) {
      state.mCount = data
    },
    SET_LOADING (state, data) {
      state.loading = data
    },
    SET_ERROR (state, data) {
      state.errorMsg = data
    },
    SET_LANG (state, data) {
      state.lang = data
    },
    SET_TAB_RECORD (state, data) {
      state.votePageState = data
    }
  },
  actions: {
    getAccountList ({commit}) {
      api.post('/user/balance').then(res => {
        if (res.success) {
          commit('ACCOUNT', res.data.accountList[0])
          commit('USER_INFO', res.data.user)
        }
      })
    }
  }
})
