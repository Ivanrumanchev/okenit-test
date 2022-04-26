import Vue from 'vue';
import { EndPoint, ErrorMessage } from '../../const';

export default {
  state: {
    users: [],
    usersLoading: true,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUsersLoading(state, payload) {
      state.usersLoading = payload;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      commit('setUsersLoading', true);

      try {
        const response = await fetch(EndPoint.Users);

        if (!response.ok) {
          throw new Error(ErrorMessage.FetchUsers);
        }

        const data = await response.json();

        commit('setUsers', data);
      } catch (error) {
        Vue.$vToastify.error(error.message);
      } finally {
        commit('setUsersLoading', false);
      }
    },
  },
  getters: {
    getUserById: (state) => (id) => {
      const targetUser = state.users.find((user) => user.id === id);

      return targetUser ?? { name: 'инкогнито' };
    },
  },
};
