<template>
  <Loader v-if="loading" />

  <v-list v-else >
    <v-subheader class="text-h4 my-4 d-flex justify-space-between">
      Comments

      <NewComment />
    </v-subheader>

    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </v-list>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';
import CommentItem from '@/components/CommentItem/CommentItem.vue';
import NewComment from '@/components/NewComment/NewComment.vue';

export default ({
  name: 'comments-list',
  components: {
    Loader,
    CommentItem,
    NewComment,
  },
  computed: {
    comments() {
      return this.$store.state.comments.comments;
    },
    loading() {
      return this.$store.state.comments.commentsLoading;
    },
  },
});
</script>
