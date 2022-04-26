import Vue from 'vue';
import Vuex from 'vuex';
import users from './users/users';
import posts from './posts/posts';
import comments from './comments/comments';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    posts,
    comments,
  },
});
