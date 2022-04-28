<template>
  <v-skeleton-loader
    v-if="loading"
    class="mx-auto pt-10"
    max-height="100vh"
    type="card-avatar@2"
  />

  <EmptyList
    v-else-if="posts.length === 0"
    :message="message"
  />

  <v-list
    v-else
    class="overflow-auto"
    height="100vh"
  >
    <v-subheader>
      Posts
    </v-subheader>

    <PostItem
      v-for="post in posts"
      :key="post.id"
      v-bind="post"
    />
  </v-list>
</template>

<script>
import { mapState } from 'vuex';
import PostItem from '@/components/PostItem/PostItem.vue';
import EmptyList from '@/components/EmptyList/EmptyList.vue';
import { EmptyMessage } from '@/const';

export default ({
  name: 'posts-list',

  components: {
    PostItem,
    EmptyList,
  },

  data() {
    return {
      message: EmptyMessage.Posts,
    };
  },

  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      loading: (state) => state.posts.postsLoading,
    }),
  },

  watch: {
    '$route.params.id': {
      immediate: true,
      handler() {
        const userId = this.$route.params.id;

        this.$store.dispatch('fetchPosts', userId);
      },
    },
  },
});
</script>
