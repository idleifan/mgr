import { createStore } from 'vuex';
import { character,user } from '@/service';
import { getCharacterInfoById } from '@/helpers/character';
import { result } from '@/helpers/utils';

export default createStore({
  state: {
    characterInfo: [],
    userInfo: {},
    userCharacter:{},
    currentAccount: '', // 当前登录用户
  },
  mutations: {
    setCharacterInfo(state,characterInfo) {
      state.characterInfo = characterInfo;
    },

    setUserInfo(state,userInfo) {
      state.userInfo = userInfo;
    },

    setUserCharacter(state,userCharacter) {
      state.setUserCharacter = userCharacter;
    },

    setCurrentAccount(state,currentAccount) {
      console.log('currentAccount', currentAccount)
      state.currentAccount = currentAccount;
    },
  },
  actions: {
    async getCharacterInfo(store) {
      const res = await character.list();

      result(res)
      .success(({data}) => {
        store.commit('setCharacterInfo',data);
      })
    },
    async getUserInfo(store) {
      const res = await user.info();

      result(res)
      .success(({ data }) => {
        store.commit('setUserInfo',data);

        store.commit('setUserCharacter',getCharacterInfoById(data.character));

        console.log(store.state);
      });
    },
  },
});
