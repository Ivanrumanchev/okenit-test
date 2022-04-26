import Vue from 'vue';
import { EndPoint, ErrorMessage } from '../../const';

export default {
  state: {
    posts: [],
    postsLoading: true,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostsLoading(state, payload) {
      state.postsLoading = payload;
    },
  },
  actions: {
    async fetchPosts({ commit }, userId) {
      commit('setPostsLoading', true);

      const endPoint = userId === 'all'
        ? EndPoint.Posts
        : `${EndPoint.Posts}?userId=${userId}`;

      try {
        const response = await fetch(endPoint);

        if (!response.ok) {
          throw new Error(ErrorMessage.FetchPosts);
        }

        const data = await response.json();

        commit('setPosts', data);
      } catch (error) {
        Vue.$vToastify.error(error.message);
      } finally {
        commit('setPostsLoading', false);
      }
    },
  },
};
