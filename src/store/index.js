import Vue from 'vue'
import Vuex from 'vuex'
import UsersApi from '../services/api/users';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    message: 'Search somebody in github',
    status: 'success',
    errors: null
  },

  mutations: {

    /**
     * Set users.
     * @param state
     * @constructor
     */
    SET_USERS: (state,users) => {
      Vue.set(state, 'users', users)
    },

    /**
     * Update message.
     * @param state
     * @param msg
     * @constructor
     */
    SET_MESSAGE: (state,msg) => {
      Vue.set(state, 'message', msg)
    },

    /**
     * Update status.
     * @param state
     * @param status
     * @constructor
     */
    UPDATE_STATUS: (state, status) => {
      Vue.set(state, 'status', status)
    }
  },

  actions: {
    /**
     * Load users from github api.
     * @param commit
     * @param payload
     * @returns {Promise<void>}
     */
    async loadUsers({ commit }, payload) {
      try {
        commit('UPDATE_STATUS', 'pending');
        const res = await UsersApi.fetchUsers(payload);
        if (!res.data.total_count) {
          commit('SET_MESSAGE', 'Users not found')
        }
        const users = res.data.items;
        commit('SET_USERS', users);
        commit('UPDATE_STATUS', 'success');
      } catch (e) {
        commit('UPDATE_STATUS', 'error');
        commit('SET_MESSAGE', 'Something went wrong');
        console.log(e)
      }
    },

    /**
     * Reset all users.
     * @param commit
     */
    resetUsers({ commit }) {
      commit('SET_USERS', [])
      commit('SET_MESSAGE', 'Search somebody in github')
    }
  },

  getters: {
    users: (state) => state.users,
    message: (state) => state.message,
    isPending: (state) => state.status === 'pending',
  },

  modules: {
  }
})
