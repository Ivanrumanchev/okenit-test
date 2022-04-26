<template>
  <Loader v-if="loading" />

  <EmptyList
    v-else-if="!post"
    :message="message"
  />

  <v-card
    v-else
    height="100%"
    elevation="0"
  >
    <v-card-title class="text-h5">
      {{ post.title }}
    </v-card-title>

    <v-card-subtitle>
      Post title
    </v-card-subtitle>

    <v-card-text>
      {{ post.body }}
    </v-card-text>
  </v-card>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';
import EmptyList from '@/components/EmptyList/EmptyList.vue';
import { EmptyMessage } from '@/const';

export default ({
  name: 'post-info',
  components: {
    Loader,
    EmptyList,
  },
  data() {
    return {
      message: EmptyMessage.Comments,
    };
  },
  computed: {
    post() {
      return this.$store.state.comments.currentPost;
    },
    loading() {
      return this.$store.state.comments.currentPostLoading;
    },
  },
  mounted() {
    const postId = this.$route.params.id;

    this.$store.dispatch('fetchCurrentPost', postId);
  },
});
</script>
