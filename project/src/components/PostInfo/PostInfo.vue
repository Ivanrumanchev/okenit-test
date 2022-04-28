<template>
  <v-skeleton-loader
    v-if="loading"
    class="mx-auto"
    min-height="410"
    type="list-item-two-line"
  />

  <EmptyList
    v-else-if="!post"
    :message="message"
  />

  <v-card
    v-else
    height="100%"
    elevation="0"
  >
    <v-card-title
      v-if="post.title"
      class="text-h5"
    >
      {{ post.title }}
    </v-card-title>

    <v-card-subtitle v-if="post.title">
      Post title
    </v-card-subtitle>

    <v-card-text v-if="post.body">
      {{ post.body }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import EmptyList from '@/components/EmptyList/EmptyList.vue';
import { EmptyMessage } from '@/const';

export default ({
  name: 'post-info',

  components: {
    EmptyList,
  },

  data() {
    return {
      message: EmptyMessage.Comments,
    };
  },

  computed: {
    ...mapState({
      post: (state) => state.comments.currentPost,
      loading: (state) => state.comments.currentPostLoading,
    }),
  },

  mounted() {
    const postId = this.$route.params.id;

    this.$store.dispatch('fetchCurrentPost', postId);
  },
});
</script>
