import Vue from 'vue';
import { EndPoint, ErrorMessage } from '../../const';

export default {
  state: {
    currentUser: null,
    currentPost: null,
    comments: [],
    currentUserLoading: false,
    currentPostLoading: false,
    commentsLoading: false,
    newCommentLoading: false,
    notFound: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setCurrentUserLoading(state, payload) {
      state.currentUserLoading = payload;
    },
    setCurrentPost(state, currentUser) {
      state.currentPost = currentUser;
    },
    setCurrentPostLoading(state, payload) {
      state.currentPostLoading = payload;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
    setCommentsLoading(state, payload) {
      state.commentsLoading = payload;
    },
    setNewCommentLoading(state, payload) {
      state.newCommentLoading = payload;
    },
    addNewComment(state, payload) {
      const newComment = {
        ...payload,
        name: payload.title,
      };

      delete newComment.title;

      state.comments.unshift(newComment);
    },
    setNotFound(state, payload) {
      state.notFound = payload;
    },
  },
  actions: {
    async fetchCurrentUser({ commit }, userId) {
      commit('setCurrentUserLoading', true);

      try {
        const response = await fetch(`${EndPoint.Users}/${userId}`);

        if (!response.ok) {
          throw new Error(ErrorMessage.FetchCurrentUser);
        }

        const data = await response.json();

        commit('setCurrentUser', data);
      } catch (error) {
        Vue.$vToastify.error(error.message);
      } finally {
        commit('setCurrentUserLoading', false);
      }
    },
    async fetchCurrentPost({ commit, dispatch }, postId) {
      commit('setCurrentPostLoading', true);
      commit('setNotFound', false);

      try {
        const response = await fetch(`${EndPoint.Posts}/${postId}`);

        if (!response.ok) {
          if (response.status === 404) {
            commit('setNotFound', true);
          }

          throw new Error(ErrorMessage.FetchCurrentPost);
        }

        const data = await response.json();

        commit('setCurrentPost', data);

        dispatch('fetchCurrentUser', data.userId);

        dispatch('fetchComments', postId);
      } catch (error) {
        Vue.$vToastify.error(error.message);
      } finally {
        commit('setCurrentPostLoading', false);
      }
    },
    async fetchComments({ commit }, userId) {
      commit('setCommentsLoading', true);

      try {
        const response = await fetch(`${EndPoint.Comments}?postId=${userId}`);

        if (!response.ok) {
          throw new Error(ErrorMessage.FetchComments);
        }

        const data = await response.json();

        commit('setComments', data);
      } catch (error) {
        Vue.$vToastify.error(error.message);
      } finally {
        commit('setCommentsLoading', false);
      }
    },
    async postComment({ commit }, postData) {
      commit('setNewCommentLoading', true);

      try {
        const response = await fetch(`${EndPoint.Posts}`, {
          method: 'POST',
          body: JSON.stringify({
            ...postData,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });

        if (!response.ok) {
          throw new Error(ErrorMessage.PostComment);
        }

        const data = await response.json();

        commit('addNewComment', data);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        commit('setNewCommentLoading', false);
      }
    },
  },
};
