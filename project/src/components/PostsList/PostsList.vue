<template>
  <Loader v-if="loading" />

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
      :post="post"
    />
  </v-list>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';
import PostItem from '@/components/PostItem/PostItem.vue';
import EmptyList from '@/components/EmptyList/EmptyList.vue';
import { EmptyMessage } from '@/const';

export default ({
  name: 'posts-list',
  components: {
    Loader,
    PostItem,
    EmptyList,
  },
  data() {
    return {
      message: EmptyMessage.Posts,
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
    loading() {
      return this.$store.state.posts.postsLoading;
    },
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
