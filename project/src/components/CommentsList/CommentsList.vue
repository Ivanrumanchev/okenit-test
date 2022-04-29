<template>
  <v-skeleton-loader
    v-if="loading"
    class="mx-auto mt-6"
    type="table-heading"
  />

  <v-list v-else >
    <div class="my-4 d-flex justify-space-between flex-wrap">
      <v-subheader class="text-h4" height="auto">
        Comments
      </v-subheader>

      <NewComment />
    </div>

    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      v-bind="comment"
    />
  </v-list>
</template>

<script>
import { mapState } from 'vuex';
import CommentItem from '@/components/CommentItem/CommentItem.vue';
import NewComment from '@/components/NewComment/NewComment.vue';

export default ({
  name: 'comments-list',

  components: {
    CommentItem,
    NewComment,
  },

  computed: {
    ...mapState({
      comments: (state) => state.comments.comments,
      // loading: (state) => state.comments.commentsLoading,
      commentsLoading: (state) => state.comments.currentUserLoading,
      postLoading: (state) => state.comments.currentPostLoading,
    }),
    loading() {
      return this.commentsLoading || this.postLoading;
    },
  },
});
</script>
